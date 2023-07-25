import { Resolvers } from "../.mesh";

const resolvers: Resolvers = {
    Mutation: {
        createMediaContentAndLinkRecords: {
            async resolve(root, _args, context, info) {
                console.log(context.ContentService.Mutation);
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
                    context,
                    info
                });

                return content;
            }
        }
    }
}

export default resolvers;