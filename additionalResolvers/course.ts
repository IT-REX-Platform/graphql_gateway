import {Resolvers} from "../.mesh";

const resolvers: Resolvers = {
    Course: {
        suggestions: {
            // manually request some fields from the chapters that we need to decide if the chapter should
            // be included in the suggestions
            selectionSet: `
            {
              chapters {
                elements {
                  id
                  startDate
                  suggestedStartDate
                }
              }
            }
            `,
            async resolve(root, _args, context, info) {
                let currentTime = Date.now();

                let chapters = root.chapters.elements.filter(chapter => {
                    // if chapter hasn't started yet, don't suggest it
                    if(Date.parse(chapter.startDate) > currentTime) {
                        return false;
                    }

                    // if chapter doesn't have a suggested start date, suggest it
                    if(chapter.suggestedStartDate === null) {
                        return true;
                    }

                    // if chapter has a suggested start date and it's in the past, suggest it
                    return Date.parse(chapter.suggestedStartDate) < currentTime;
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
        }
    }
};

export default resolvers;