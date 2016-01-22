import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} from 'graphql';

let Schema = (db) => {

  let characterType = new GraphQLObjectType({
    name: 'Counter',
    fields: () => ({
      _id: { type: GraphQLString },
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

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        characters: {
          type: new GraphQLList(characterType),
          resolve: () => db.collection('characters').find({}).toArray()
        }
      })
    })
  });
  return schema;
};

export default Schema

