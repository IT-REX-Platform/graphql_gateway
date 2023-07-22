import { Resolvers } from "../.mesh";

const resolvers: Resolvers = {
    Mutation: {
        createMediaContentAndLinkRecords: {
            resolve(root, _args, context, info) {
                // create the content object using the createMediaContent query of the content service
                let content = context.Query.createMediaContent({
                    root,
                    args: {
                        input: _args.contentInput
                    },
                    context,
                    info
                });

                // link the created content to the passed media records
                context.Query.linkMediaRecordsWithContent(content.id, _args.mediaRecordIds)

                return content;
            }
        }
    }
}

export default resolvers;