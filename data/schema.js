import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  connectionDefinitions, // a helper function that takes a regular graphql node
  // and gives back an object representing the new node connection structure
  connectionArgs,
  connectionFromPromisedArray,
  mutationWithClientMutationId,
  globalIdField,
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import character from './types/character';
import storeType from './types/store';

let Schema = (db) => {
  class Store {};
  let store = new Store();
  // console.log('db from schema',db);

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


  // let storeType = new GraphQLObjectType({
  //   name: 'Store',
  //   fields: () => ({
  //     id: globalIdField('Store'),
  //     characterConnection: {
  //       type: character.characterConnection.connectionType,
  //       args: connectionArgs,
  //       resolve: (_, args) => connectionFromPromisedArray(
  //         db.collection('characters').find({}).limit(args.first).toArray(),
  //         args
  //       )
  //     }
  //   })
  // });

  // let characterType = character.characterType;
  // let characterConnection = character.characterConnection;
  // let createCharacterMutation = character.createCharacterMutation;

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
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => ({
        createCharacter: character.createCharacterMutation
      })
    })
  });
  return schema;
};

export default Schema

