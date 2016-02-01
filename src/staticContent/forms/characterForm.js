var character = [
  { 
    name: 'firstName',
    type: 'text', 
    label: 'First Name',
    required: true,
    options: { 
      maxLength: 20, 
      placeholder: 'Harry'
    }
  },
  { 
    name: 'lastName',
    type: 'text', 
    label: 'Last Name',
    required: true,
    options: { 
      maxLength: 20, 
      placeholder: 'Potter'
    }
  },
  { 
    name:'middleName',
    type: 'text', 
    label: 'Middle Name(s)',
    required: false,
    options: { 
      unkown: true, 
      maxLength: 50,
      placeholder: 'Potter'
    }
  },
  { 
    name: 'dob',
    type: 'date', 
    label: 'Date of Birth',
    required: true, 
    options: { unkown: true }
  },
  { 
    name: 'dod',
    type: 'date', 
    label: 'Date of Death',
    required: false,
    options: {
      unkown: true,
      na: true
    }
  },
  {
    name: 'gender',
    type: 'radio',
    label: 'Gender',
    required: true,
    options: ['male', 'female', 'unkown', 'not applicable']
  },
  { 
    name: 'house',
    type: 'radio',
    label: 'Hogwarts House Affiliation',
    required: true,
    options: ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff', 'not applicable']
  },
  {
    name: 'magical',
    type: 'radio',
    label: 'Is this character magical?',
    required: true,
    options: ['Yes', 'No']
  },
  {
    name: 'muggleBorn',
    type: 'radio',
    label: 'Is this character muggle born?',
    required: true,
    options: ['Yes', 'No']
  },
  {
    name: 'DA',
    type: 'radio',
    label: 'Was this character in Dumbledore\'s Army?',
    required: true,
    options: ['Yes', 'No']
  },
  {
    name: 'deathEater',
    type: 'radio',
    label: 'Was this character a known Death Eater?',
    required: true,
    options: ['Yes', 'No']
  },
  {
    name: 'specialSkills',
    type: 'text',
    label: 'Special Skills',
    required: true,
    options: { 
      maxLength: 100,
      placeholder: "Defence Against the Dark Arts; Flying; Surviving Avada Kedavras"
    }
  },
  {
    name: 'occupation',
    type: 'text',
    label: 'Occupation',
    required: true,
    options: {
      unkown: true,
      na: true,
      maxLength: 100,
      placeholder: 'Auror'
    }
  },
  {
    name: 'wand',
    type: 'text',
    label: 'Wand Description',
    required: true,
    options: {
      unkown: true,
      na: true,
      maxLength: 50,
      placeholder: '11 inch holly with a phoenix feather core'
    }
  },
  {
    name: 'patronus',
    type: 'text',
    label: 'Patronus',
    required: true,
    options: {
      unkown: true,
      na: true,
      maxLength: 20,
      placeholder: 'stag'
    }
  }
]

export default character;