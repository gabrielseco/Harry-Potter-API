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
  connectionDefinitions, 
  connectionArgs,
  connectionFromPromisedArray,
  mutationWithClientMutationId,
  globalIdField
} from 'graphql-relay';

import character from './character';

import { db } from '../../db';

// console.log(getCollection('characters'))

// console.log((await getCollection('characters')).find({}));

console.log('db from store', db);


let storeType = new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    id: globalIdField('Store'),
    characterConnection: {
      type: character.characterConnection.connectionType,
      args: connectionArgs,
      resolve: (_, args) => connectionFromPromisedArray(
        data.collection('characters').find({}).limit(args.first).toArray(),
        args
      )
    }
  }),
  // interfaces: [nodeDefs.nodeInterface]
});

// console.log(data)

export default storeType;