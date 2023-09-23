import {Resolvers} from "../.mesh";

const resolvers: Resolvers = {
    Course: {
        // combines suggestions from the chapters of the course to a single list of suggestions for the
        // whole course
        suggestions: {
            // HINT use course service filters instead of manually filtering the chapters
            // manually request some fields from the chapters that we will need to decide if
            // the chapter should be included in the suggestions
            selectionSet: `
            {
              chapters {
                elements {
                  id
                  startDate
                }
              }
            }
            `,
            async resolve(root, _args, context, info) {
                let currentTime = Date.now();

                let chapters = root.chapters.elements.filter(chapter => {
                    // if chapter hasn't started yet, don't suggest it
                    if (Date.parse(chapter.startDate) > currentTime) {
                        return false;
                    }
                });

                return await context.ContentService.Query.suggestionsByChapterIds({
                    root,
                    args: {
                        chapterIds: chapters.map(chapter => chapter.id),
                        amount: _args.amount,
                        skillTypes: _args.skillTypes
                    },

                })
            }
        },

        userProgress: {
            selectionSet: `
            {
              chapters {
                elements {
                  id
                }
              }
            }`,

            async resolve(root, _args, context, info) {
                const chapterIds = root.chapters.elements.map(chapter => chapter.id);

                const progressInformationObjects = await context.ContentService.Query.progressByChapterIds({
                    root,
                    args: {
                        chapterIds: chapterIds
                    },
                    selectionSet: `
                    {
                        completedContents
                        totalContents
                    }`
                });

                let totalCompletedContents = 0;
                let totalContents = 0;

                progressInformationObjects.forEach(progressInformation => {
                    totalCompletedContents += progressInformation.completedContents;
                    totalContents += progressInformation.totalContents;
                });

                return {
                    completedContents: totalCompletedContents,
                    totalContents: totalContents,
                    progress: totalCompletedContents / (totalContents || 1)
                }
            }
        }
    }
};

export default resolvers;