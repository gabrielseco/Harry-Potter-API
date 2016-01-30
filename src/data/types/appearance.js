import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLID,
	GraphQLBoolean,
	GraphQLEnumType,
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

// var {nodeInterface, nodeField} = nodeDefinitions(
//   (globalId) => { var {type, id} = fromGlobalId(globalId); },
//   (obj) => {  }
//   );

let AppearanceType = new GraphQLObjectType({
	name: 'Appearance',
	description: 'The appearance of people in the Harry Potter Canon.',
	fields: () => ({
		id: globalIdField('Appearance'),
		hair: { 
			type: new GraphQLNonNull(GraphQLString),
			resolve: (obj) => obj.hair
		},
		eyes: { 
			type: new GraphQLNonNull(GraphQLString),
			resolve: (obj) => obj.eyes
		},
		misc: { 
			type: GraphQLString,
			resolve: (obj) => obj.misc
		}
	}),
	// interfaces: [nodeInterface]
});

// console.log('node interface from person type', nodeInterface)
export default AppearanceType;