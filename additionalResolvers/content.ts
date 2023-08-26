import {Resolvers} from "../.mesh";

const resolvers: Resolvers = {
    Mutation: {
        createMediaContentAndLinkRecords: {
            async resolve(root, _args, context, info) {
                // create the content object using the createMediaContent query of the content service
                let content = await context.ContentService.Mutation.createMediaContent({
                    root,
                    args: {
                        input: _args.contentInput
                    },
                    context,
                    info
                });

                // link the created content to the passed media records
                await context.MediaService.Mutation.linkMediaRecordsWithContent({
                    root,
                    args: {
                        contentId: content.id,
                        mediaRecordIds: _args.mediaRecordIds
                    },
                    // we need to define a selection set manually here, otherwise it thinks we don't need any data
                    // from this mutation and it won't actually be executed
                    selectionSet: `
                    {
                        id
                    }
                    `,
                });

                return content;
            }
        },
        createQuizAssessment: {
            async resolve(root, _args, context, info) {
                let content = await context.ContentService.Mutation.createAssessment({
                    root,
                    args: {
                        input: _args.assessmentInput
                    },
                    context,
                    info
                });

                await context.QuizService.Mutation.createQuiz({
                    root,
                    args: {
                        assessmentId: content.id,
                        input: _args.quizInput
                    },
                    // we need to define a selection set manually here, otherwise it thinks we don't need any data
                    // from this mutation and it won't actually be executed
                    selectionSet: `
                    {
                        assessmentId
                    }
                    `,
                });

                return content;
            }
        },
        createFlashcardSetAssessment: {
            async resolve(root, _args, context, info) {
                let content = await context.ContentService.Mutation.createAssessment({
                    root,
                    args: {
                        input: _args.assessmentInput
                    },
                    context,
                    info
                });

                let flashcardSet = await context.FlashcardService.Mutation.createFlashcardSet({
                    root,
                    args: {
                        assessmentId: content.id,
                        input: _args.flashcardSetInput
                    },
                    // we need to define a selection set manually here, otherwise it thinks we don't need any data
                    // from this mutation and it won't actually be executed
                    selectionSet: `
                    {
                        assessmentId
                    }
                    `,
                });

                return content;
            }
        }
    }
}

export default resolvers;
