import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import character from './types/character';
import storeType from './types/store';

let Schema = (db) => {
  class Store {};
  let store = new Store();

  let nodeDefs = nodeDefinitions(
    (globalId) => {
      let { type } = fromGlobalId(globalId);
      if (type === 'Store') {
        return store
      }
      return null;
    },
    (obj) => {
      if (obj instanceof Store) return storeType;
      return null;
    }
  );

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        node: nodeDefs.nodeField,
        store: {
          type: storeType,
          resolve: () => store
        }
      })
    })
  });
  return schema;
};

export default Schema

