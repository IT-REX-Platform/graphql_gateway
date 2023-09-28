import {Resolvers} from "../.mesh";

const resolvers: Resolvers = {
    Course: {
        // combines suggestions from the chapters of the course to a single list of suggestions for the
        // whole course
        suggestions: {
            // TODO use course service filters instead of manually filtering the chapters
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
                    return Date.parse(chapter.startDate) <= currentTime;

                });

                return await context.ContentService.Query.suggestionsByChapterIds({
                    root,
                    args: {
                        chapterIds: chapters.map(chapter => chapter.id),
                        amount: _args.amount,
                        skillTypes: _args.skillTypes
                    },
					context,
					info
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
                const chapterIds: string[] = root.chapters.elements.map(chapter => chapter.id);

                const queryParameters = {
                    root,
                    args: {
                        chapterIds: chapterIds
                    },
                    selectionSet: `
                    {
                        completedContents
                        totalContents
                        progress
                    }`,
                    context,
                    info
                };

                const progressOfChapters: CompositeProgressInformation[]
                    = await context.ContentService.Query._internal_noauth_progressByChapterIds(queryParameters);

                return combineChapterProgressInformation(progressOfChapters);
            }
        },

        createSection: {
            async resolve(root, _args, context, info) {
                let chapters = await context.CourseService.Query.chaptersByIds({
                    root,
                    args: {
                        ids: [_args.sectionInput.chapterId]
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

                let courseId = chapters[0].course.id;

                return await context.ContentService.Mutation._internal_createSection({
                    root,
                    args: {
                        courseId: courseId,
                        input: _args.sectionInput
                    },
                    context,
                    info
                });
            }
        }
    }
};

/**
 * Sums up the progress information of all chapters of a course.
 */
function combineChapterProgressInformation(progressPerChapter: CompositeProgressInformation[]): CompositeProgressInformation {
    let totalCompletedContents: number = 0;
    let totalContents: number = 0;

    progressPerChapter.forEach(progressInformation => {
        totalCompletedContents += progressInformation.completedContents;
        totalContents += progressInformation.totalContents;
    });

    let progress = 100.0;

    if (totalContents !== 0) {
        progress = totalCompletedContents / totalContents * 100.0;
    }

    return {
        completedContents: totalCompletedContents,
        totalContents: totalContents,
        progress: progress
    }
}

type CompositeProgressInformation = {
    completedContents: number,
    totalContents: number
    progress: number
}

export default resolvers;