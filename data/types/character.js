import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLID,
	GraphQLBoolean,
	GraphQLEnumType
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import appearanceType from './appearance';

// var {nodeInterface, nodeField} = nodeDefinitions(
//   (globalId) => { var {type, id} = fromGlobalId(globalId); },
//   (obj) => {  }
//   );

let CharacterType = new GraphQLObjectType({
	name: 'Character',
	description: 'All the people from the Harry Potter Canon.',
	fields: () => ({
		id: globalIdField('Character'),
		characterId: {
			type: new GraphQLNonNull(GraphQLInt),
			resolve: (obj) => obj.characterId
		},
		firstName: { 
			type: new GraphQLNonNull(GraphQLString),
			resolve: (obj) => obj.firstName
		},
		lastName: { 
			type: new GraphQLNonNull(GraphQLString),
			resolve: (obj) => obj.lastName
		},
		middleName: { 
			type: GraphQLString,
			resolve: (obj) => obj.middleName
		},
		fullName: { 
			type: new GraphQLNonNull(GraphQLString),
			resolve: (obj) => {
				if (obj.middleName) {
					return `${obj.firstName} ${obj.middleName} ${obj.lastName}`
				} else {
					return `${obj.firstName} ${obj.lastName}`
				}
			}
		},
		dob: { 
			type: GraphQLInt,
			resolve: (obj) => obj.dob
		},
		gender: { 
			type: GraphQLString,
			resolve: (obj) => (obj.female) ? "female" : "male"
		},
		magical: {
			type: GraphQLBoolean,
			args: {
				true: { type: GraphQLBoolean }
			},
			resolve: (obj) => (obj.magical)
		},
		muggleBorn: {
			type: GraphQLBoolean,
			resolve: (obj) => (obj.muggleBorn)
		},
		DA: {
			type: GraphQLBoolean,
			resolve: (obj) => (obj.DA)
		},
		deathEater: {
			type: GraphQLBoolean,
			resolve: (obj) => (obj.deathEater)
		},
		appearance: { 
			type: appearanceType,
			resolve: (obj) => obj.appearance
		}
	}),
	// interfaces: [nodeInterface]
});

// console.log('node interface from characterType', nodeInterface)
export default CharacterType;