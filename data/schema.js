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
  globalIdField
} from 'graphql-relay';

let Schema = (db) => {
  let store = {}

  let storeType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      id: globalIdField('Store'),
      characterConnection: {
        type: characterConnection.connectionType,
        args: connectionArgs,
        resolve: (_, args) => connectionFromPromisedArray(
          db.collection('characters').find({}).limit(args.first).toArray(),
          args
        )
      }
    })
  });

  let characterType = new GraphQLObjectType({
    name: 'Character',
    fields: () => ({
      // _id: { type: GraphQLString },
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve: (obj) => obj._id
      },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      middleName: { type: GraphQLString },
      dob: { type: GraphQLInt },
      gender: { type: GraphQLString },
      magical: { type: GraphQLBoolean },
      muggleBorn: { type: GraphQLBoolean },
      DA: { type: GraphQLBoolean },
      deathEater: { type: GraphQLBoolean }
    })
  })

  let characterConnection = connectionDefinitions({
    name: 'Character',
    nodeType: characterType
  });

  let createCharacterMutation = mutationWithClientMutationId({
    name: 'CreateCharacter',
    inputFields: {
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: new GraphQLNonNull(GraphQLString) },
      middleName: { type: new GraphQLNonNull(GraphQLString) },
      dob: { type: new GraphQLNonNull(GraphQLInt) },
      gender: { type: new GraphQLNonNull(GraphQLString) },
      magical: { type: new GraphQLNonNull(GraphQLBoolean) },
      muggleBorn: { type: new GraphQLNonNull(GraphQLBoolean) },
      DA: { type: new GraphQLNonNull(GraphQLBoolean) },
      deathEater: { type: new GraphQLNonNull(GraphQLBoolean) }
    },
    outputFields: {
      characterEdge: {
        type: characterConnection.edgeType,
        resolve: (obj) => ({ node: obj.ops[0], cursor: obj.insertedId })
      },
      store: {
        type: storeType,
        resolve: () => store 
      }
    },
    mutateAndGetPayload: ({firstName, lastName, middleName, dob, gender, magical, muggleBorn, DA, deathEater}) => { //logic for mutation goes here
      return db.collection('characters').insertOne({firstName, lastName, middleName, dob, gender, magical, muggleBorn, DA, deathEater});
    }
  });

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        store: {
          type: storeType,
          resolve: () => store
        }
      })
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => ({
        createCharacter: createCharacterMutation
      })
    })
  });
  return schema;
};

export default Schema

