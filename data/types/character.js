import {
  // GraphQLEnumType,
  // GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  // GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  // connectionFromArray,
  // fromGlobalId,
  // nodeDefinitions,
  connectionDefinitions,
  // connectionArgs,
  // connectionFromPromisedArray,
  mutationWithClientMutationId,
  globalIdField
} from 'graphql-relay';

import storeType from './store';
import { db } from '../../db';

let character = {};

character.characterType = new GraphQLObjectType({
  name: 'Character',
  description: 'Any sentient character from Harry Potter Book Canon.  (Can they speak?)',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The global unique ID of this character',
      resolve: (obj) => obj._id
    },
    characterId: {
      type: GraphQLInt,
      description: 'The human readable ID of this character.',
      resolve: (obj) => {
        if (obj.characterId) {
          return obj.characterId;
        } else {
          return db.collection('characters').count() + 1;
        }
      }
    },
    firstName: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The first name of this character',
      // resolve: (obj) => obj.firstName
    },
    lastName: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The last name of this character',
      // resolve: (obj) => obj.lastName
    },
    middleName: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The middle name of this character, if they have one.',
      // resolve: (obj) => obj.middleName
    },
    name: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The full name of this character',
      resolve: (obj) => {
        if (obj.middleName) {
          return `${obj.firstName} ${obj.middleName} ${obj.lastName}`
        } else {
          return `${obj.firstName} ${obj.lastName}`
        }
      }
    },
    dob: { 
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The date of birth of this character, in UNIX (use moment.js to parse).  "0" if not known.',
      // resolve: (obj) => obj.dob
    },
    dod: { 
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The date of death of this character, in UNIX (use moment.js to parse).  "0" if not known, "-1" if character is still alive.',
      // resolve: (obj) => obj.dob
    },
    gender: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The gender of this charcter, either "male", "female", "unknown" or "n/a" if this character does not have a gender.',
      // resolve: (obj) => (obj.gender)
    },
    house: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The house of this charcter was in as a student at Hogwarts.  "n/a" if the character never attended Hogwarts as a student.',
      // resolve: (obj) => (obj.house)
    },
    occupation: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The occupation of this charcter.  Multiple listed if applicable.',
      // resolve: (obj) => (obj.occupation)
    },
    magical: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: '"True" if this character is magical',
      // args: {
        // true: { type: GraphQLBoolean }
      // },
      // resolve: (obj) => (obj.magical)
    },
    wand: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The character\'s wand core and materials.  "Unkown" if not known, "n/a" if character doesn\'t use a wand.'
    },
    patronus: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The character\'s patronus.  "Unkown" if not known, "n/a" if character can\'t cast magic.'
    },
    muggleBorn: {
      type: GraphQLBoolean,
      description: '"True" if this character is born to non-magical parents.  "False" if unknown.',
      // resolve: (obj) => (obj.muggleBorn)
    },
    DA: {
      type: GraphQLBoolean,
      description: '"True" if this character was a member of "Dumbledore\'s Army". "False" if unkown.',
      // resolve: (obj) => (obj.DA)
    },
    deathEater: {
      type: GraphQLBoolean,
      description: '"True" if this character was a known supported of Voldemort."False" if unknown.',
      // resolve: (obj) => (obj.deathEater)
    },
    specialSkills: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Any special skills (such as potion making or flying) this character has.',
      // resolve: (obj) => (obj.deathEater)
    },
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
