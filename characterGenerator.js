const resources = require("./resourceAssembler");
const backgrounds = resources.backgrounds;
const classes = resources.classes;
const feats = resources.feats;
const items = resources.items;
const names = resources.names;
const races = resources.races;
const skills = resources.skills;
const spells = resources.spells;
const statsRoll = resources.statsRoll;
const genders = ["Male", "Female"]


// a general function to return the value from a random key of an object

function randomFromObj(x) {
  return Object.values(x)[Math.floor(Math.random() * Object.values(x).length)];
}

// a general function to return the value from a random index of an array

function randomFromArr(x) {
  return x[Math.floor(Math.random() * x.length)];
}

// the structure of a character

let character = {
  name: undefined,
  levels: [],
  gender: undefined,
  race: undefined,
  subrace: undefined,
  class: undefined,
  background: undefined,
  abilities: {
    str: null,
    dex: null,
    con: null,
    wis: null,
    int: null,
    cha: null
  },
  weapons: [],
  armor: [],
  skills: {},
  feats: [],
  proficiencies: {
    savingThrows: [],
    weapons: [],
    armor: [],
    skills: [],
    tools: []
  },
  spells: [[], [], [], [], [], [], [], [], [], []],
  items: []
};

////////////////////////////////////////////////////////////////////////////////////////

// 1. Roll stats

let stats = statsRoll(2);

// 2. Assign class

character.class = Object.values(classes)[
  Math.floor(Math.random() * Object.values(classes).length)
];

//      Assign options
//      Assign benefits

// 3. Assign abilities

//      Sort stats (descending)

stats.sort((a, b) => a - b).reverse();

//      Assign higest value(s) to primary abilities of Class

if (
  character.class.name === "Barbarian" ||
  character.class.name === "Bard" ||
  character.class.name === "Cleric" ||
  character.class.name === "Druid" ||
  character.class.name === "Rogue" ||
  character.class.name === "Sorcerer" ||
  character.class.name === "Warlock" ||
  character.class.name === "Wizard"
) {
  let primaryAbility = character.class.primaryAbility;
  character.abilities[primaryAbility] = stats.shift();
} else if (
  character.class.name === "Monk" ||
  character.class.name === "Paladin" ||
  character.class.name === "Ranger"
) {
  let primaryAbilities = character.class.primaryAbility;
  character.abilities[primaryAbilities[0]] = stats.shift();
  character.abilities[primaryAbilities[1]] = stats.shift();
} else {
  let primaryAbility = randomFromArr(character.class.primaryAbility);
  character.abilities[primaryAbility] = stats.shift();
}

//      Assign the remaining stats to the remaining abilities randomly

let abilityValuesArr = Object.values(character.abilities);
let abilityKeysArr = Object.keys(character.abilities);

for (let i = 0; i < abilityKeysArr.length; i++) {
  let randomIndex = Math.floor(Math.random() * stats.length);
  if (abilityValuesArr[i] === null) {
    character.abilities[abilityKeysArr[i]] = stats.splice(randomIndex, 1)[0];
  }
}

//      Behold the abilities of our character!

console.log("CLASS:    " + character.class.name);
console.log(Object.keys(character.abilities).join(" "));
console.log(Object.values(character.abilities).join("  "));

// 4. Assign race

var randomSourceBook = randomFromObj(races);
character.race = randomFromObj(randomSourceBook);

//      Assign Subrace

character.subrace = randomFromArr(character.race.subraces)

//      Behold the Race of our character!

console.log("RACE:     " + character.race.name + " (" + character.subrace.name + ")");

//      Assign options
//      Assign benefits


// 5. Assign background

character.background = randomFromObj(backgrounds)

//      Assign options
//      Assign benefits


// 6. Assign gender, name

character.gender = randomFromArr(genders)

function pickRandomName(race, gender){
    let raceNames = names[race]
    if(raceNames["Male"] === undefined){raceNames = raceNames[character.subrace.name]}
    let genderedNames = raceNames[gender]
    let familyNames = raceNames.Family
   return randomFromArr(genderedNames) + " " + randomFromArr(familyNames)
}

character.name = pickRandomName(character.race.name, character.gender)

console.log(character.name);

// 7. Assign feats

console.log(feats);


// 8. Assign skills
// 9. Assign spells (if caster)
// 10. Assign items
// 10.     Assign equipment
