import {
  // GraphQLSchema,
  GraphQLObjectType,
  // GraphQLInt,
  // GraphQLString,
  // GraphQLList,
  // GraphQLBoolean,
  // GraphQLNonNull,
  // GraphQLID
} from 'graphql';

import {
  // connectionDefinitions, 
  connectionArgs,
  connectionFromPromisedArray,
  // mutationWithClientMutationId,
  globalIdField,
  // fromGlobalId,
  // nodeDefinitions,
} from 'graphql-relay';

import character from './character';
import { db } from '../../../../db';

// let nodeDefs = nodeDefinitions(
//   (globalId) => {
//     let { type } = fromGlobalId(globalId);
//     if (type === 'Store') {
//       return store
//     }
//     return null;
//   },
//   (obj) => {
//     if (obj instanceof Store) return storeType;
//     return null;
//   }
// );

let storeType = new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    id: globalIdField('Store'),
    characterConnection: {
      type: character.characterConnection.connectionType,
      args: connectionArgs,
      resolve: (_, args) => connectionFromPromisedArray(
        db.collection('characters').find({}).limit(args.first).toArray(),
        args
      )
    }
  }),
  // interfaces: [nodeDefs.nodeInterface]
});

export default storeType;