import { MongoClient } from '../../node_modules/mongodb/lib/mongo_client';

// console.log('MongoClient here', MongoClient);

// /../../character.js
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

import storeType from './store';

// let db = MongoClient.connect(process.env.MONGO_URL)
// (async () => {
//   try {
//     let db = await MongoClient.connect(process.env.MONGO_URL)
//   } catch(e) {
//     console.error(e.stack);
//   }
// })();

// console.log('db from character',db);


let character = {};

character.characterType = new GraphQLObjectType({
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
    // magical: { type: GraphQLBoolean },
    // muggleBorn: { type: GraphQLBoolean },
    // DA: { type: GraphQLBoolean },
    // deathEater: { type: GraphQLBoolean }
  })
})

character.characterConnection = connectionDefinitions({
  name: 'Character',
  nodeType: character.characterType
});

character.createCharacterMutation = mutationWithClientMutationId({
  name: 'CreateCharacter',
  inputFields: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    middleName: { type: new GraphQLNonNull(GraphQLString) },
    dob: { type: new GraphQLNonNull(GraphQLInt) },
    gender: { type: new GraphQLNonNull(GraphQLString) },
    // magical: { type: new GraphQLNonNull(GraphQLBoolean) },
    // muggleBorn: { type: new GraphQLNonNull(GraphQLBoolean) },
    // DA: { type: new GraphQLNonNull(GraphQLBoolean) },
    // deathEater: { type: new GraphQLNonNull(GraphQLBoolean) }
  },
  outputFields: {
    characterEdge: {
      type: character.characterConnection.edgeType,
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

export default character;

// import {
// 	GraphQLSchema,
// 	GraphQLObjectType,
// 	GraphQLInt,
// 	GraphQLString,
// 	GraphQLList,
// 	GraphQLNonNull,
// 	GraphQLID,
// 	GraphQLBoolean,
// 	GraphQLEnumType
// } from 'graphql';

// import {
//   connectionArgs,
//   connectionDefinitions,
//   connectionFromArray,
//   fromGlobalId,
//   globalIdField,
//   mutationWithClientMutationId,
//   nodeDefinitions,
// } from 'graphql-relay';

// import appearanceType from './appearance';

// // var {nodeInterface, nodeField} = nodeDefinitions(
// //   (globalId) => { var {type, id} = fromGlobalId(globalId); },
// //   (obj) => {  }
// //   );

// let CharacterType = new GraphQLObjectType({
// 	name: 'Character',
// 	description: 'All the people from the Harry Potter Canon.',
// 	fields: () => ({
// 		id: globalIdField('Character'),
// 		characterId: {
// 			type: new GraphQLNonNull(GraphQLInt),
// 			resolve: (obj) => obj.characterId
// 		},
// 		firstName: { 
// 			type: new GraphQLNonNull(GraphQLString),
// 			resolve: (obj) => obj.firstName
// 		},
// 		lastName: { 
// 			type: new GraphQLNonNull(GraphQLString),
// 			resolve: (obj) => obj.lastName
// 		},
// 		middleName: { 
// 			type: GraphQLString,
// 			resolve: (obj) => obj.middleName
// 		},
// 		name: { 
// 			type: new GraphQLNonNull(GraphQLString),
// 			resolve: (obj) => {
// 				if (obj.middleName) {
// 					return `${obj.firstName} ${obj.middleName} ${obj.lastName}`
// 				} else {
// 					return `${obj.firstName} ${obj.lastName}`
// 				}
// 			}
// 		},
// 		dob: { 
// 			type: GraphQLInt,
// 			resolve: (obj) => obj.dob
// 		},
// 		gender: { 
// 			type: GraphQLString,
// 			resolve: (obj) => (obj.female) ? "female" : "male"
// 		},
// 		magical: {
// 			type: GraphQLBoolean,
// 			args: {
// 				true: { type: GraphQLBoolean }
// 			},
// 			resolve: (obj) => (obj.magical)
// 		},
// 		muggleBorn: {
// 			type: GraphQLBoolean,
// 			resolve: (obj) => (obj.muggleBorn)
// 		},
// 		DA: {
// 			type: GraphQLBoolean,
// 			resolve: (obj) => (obj.DA)
// 		},
// 		deathEater: {
// 			type: GraphQLBoolean,
// 			resolve: (obj) => (obj.deathEater)
// 		},
// 		appearance: { 
// 			type: appearanceType,
// 			resolve: (obj) => obj.appearance
// 		}
// 	}),
// 	// interfaces: [nodeInterface]
// });

// // console.log('node interface from characterType', nodeInterface)
// export default CharacterType;