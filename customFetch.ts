import { MeshFetch } from '@graphql-mesh/types';

const fetchFn: MeshFetch = (url, requestInit, context, info) =>{
  console.log(requestInit);
  /*if(info !== undefined) {
    let astNode = info.parentType._fields[info.fieldName].astNode;
    if(astNode !== undefined) {
        console.log(astNode.directives);
        console.log(astNode.directives.some(x => x.name.value === "skipInternalAuth"));
    }
  }*/

  return fetch(url, requestInit);
}

export default fetchFn;