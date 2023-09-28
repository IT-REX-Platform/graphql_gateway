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
                // find out in which course the chapter this assessment should be created in is
                let chapters = await context.CourseService.Query._internal_noauth_chaptersByIds({
                    root,
                    args: {
                        ids: [_args.assessmentInput.metadata.chapterId]
                    },
                    selectionSet: `
                    {
                        course {
                            id
                        }
                    }
                    `,
                });

                if (chapters.length !== 1) {
                    throw new Error("Chapter with given id does not exist.");
                }

                // create the assessment
                let content = await context.ContentService.Mutation._internal_createAssessment({
                    root,
                    args: {
                        courseId: chapters[0].course.id,
                        input: _args.assessmentInput
                    },
                    context,
                    info
                });

                // create the quiz
                await context.QuizService.Mutation._internal_createQuiz({
                    root,
                    args: {
                        courseId: chapters[0].course.id,
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
                // find out in which course the chapter this assessment should be created in is
                let chapters = await context.CourseService.Query._internal_noauth_chaptersByIds({
                    root,
                    args: {
                        ids: [_args.assessmentInput.metadata.chapterId]
                    },
                    selectionSet: `
                    {
                        course {
                            id
                        }
                    }
                    `,
                });

                if (chapters.length !== 1) {
                    throw new Error("Chapter with given id does not exist.");
                }

                // create the assessment
                let content = await context.ContentService.Mutation._internal_createAssessment({
                    root,
                    args: {
                        courseId: chapters[0].course.id,
                        input: _args.assessmentInput
                    },
                    context,
                    info
                });

                // create the flashcard set
                let flashcardSet = await context.FlashcardService.Mutation._internal_createFlashcardSet({
                    root,
                    args: {
                        courseId: chapters[0].course.id,
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
        },
    }
}

export default resolvers;
