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
    },
    firstName: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The first name of this character',
    },
    lastName: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The last name of this character',
    },
    middleName: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The middle name of this character, if they have one.',
    },
    name: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The full name of this character',
      resolve: (obj) => (obj.middleName) ? `${obj.firstName} ${obj.middleName} ${obj.lastName}` : `${obj.firstName} ${obj.lastName}`
    },
    dob: { 
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The date of birth of this character, in UNIX (use moment.js to parse).  "0" if not known.',
    },
    dod: { 
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The date of death of this character, in UNIX (use moment.js to parse).  "0" if not known, "-1" if character is still alive.',
    },
    gender: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The gender of this charcter, either "male", "female", "unknown" or "n/a" if this character does not have a gender.',
    },
    house: { 
      type: new GraphQLNonNull(GraphQLString),
      description: 'The house of this charcter was in as a student at Hogwarts.  "n/a" if the character never attended Hogwarts as a student.',
    },
    occupation: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The occupation of this charcter.  Multiple listed if applicable.',
    },
    magical: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: '"True" if this character is magical',
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
    },
    DA: {
      type: GraphQLBoolean,
      description: '"True" if this character was a member of "Dumbledore\'s Army". "False" if unkown.',
    },
    deathEater: {
      type: GraphQLBoolean,
      description: '"True" if this character was a known supported of Voldemort."False" if unknown.',
    },
    specialSkills: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Any special skills (such as potion making or flying) this character has.',
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
    dod: { type: new GraphQLNonNull(GraphQLInt) },
    gender: { type: new GraphQLNonNull(GraphQLString) },
    house: { type: new GraphQLNonNull(GraphQLString) },
    occupation: { type: new GraphQLNonNull(GraphQLString) },
    magical: { type: new GraphQLNonNull(GraphQLBoolean) },
    wand: { type: new GraphQLNonNull(GraphQLString) },
    patronus: { type: new GraphQLNonNull(GraphQLString) },
    muggleBorn: { type: new GraphQLNonNull(GraphQLBoolean) },
    DA: { type: new GraphQLNonNull(GraphQLBoolean) },
    deathEater: { type: new GraphQLNonNull(GraphQLBoolean) },
    specialSkills: { type: new GraphQLNonNull(GraphQLString) },
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
  mutateAndGetPayload: ({firstName, lastName, middleName, dob, dod, gender, house, occupation, magical, wand, patronus, muggleBorn, DA, deathEater, specialSkills}) => { //logic for mutation goes here
    (async () => {
      try {
        let characterId = await db.collection('characters').count();
        characterId++;
        return db.collection('characters').insertOne({firstName, lastName, middleName, dob, dod, gender, house, occupation, magical, wand, patronus, muggleBorn, DA, deathEater, specialSkills, characterId});
      } catch(e) {
        console.error(e.stack);
      }
    })();
  }
});

export default character;



