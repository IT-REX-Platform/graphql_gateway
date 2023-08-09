import { MeshPlugin } from '@graphql-mesh/types';
const util = require('util');

export function useAuthorizationDirectives(): MeshPlugin {
  return {
    onDelegate(payload) {
        let astNode = payload.info.parentType._fields[payload.info.fieldName].astNode;
        if(astNode !== undefined) {
            let shouldSkipInternalAuth: boolean = astNode.directives.some(x => x.name.value === "skipInternalAuth");

            console.log("Should skip internal auth: " + shouldSkipInternalAuth);

            if(shouldSkipInternalAuth) {
              payload.info.operation.directives.push(payload.schema.schema._directives.find(x => x.name === "internalSkipInternalAuth"));
              console.log(util.inspect(payload, {showHidden: false, depth: 4, colors: true}));
            }
        }
    }
  };
}