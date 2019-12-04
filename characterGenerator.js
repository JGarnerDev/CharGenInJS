const resources = require("./resourceAssembler");
const backgrounds = resources.backgrounds;
const classes = resources.classes;
const languages = resources.languages;
const feats = resources.feats;
const items = resources.items;
const names = resources.names;
const races = resources.races;
const skills = resources.skills;
const spells = resources.spells;
const statsRoll = resources.statsRoll;
const genders = ["Male", "Female"];

// a general function to return the value from a random key of an object

function randomFromObj(x) {
  return Object.values(x)[Math.floor(Math.random() * Object.values(x).length)];
}

// a general function to return the value from a random index of an array

function randomFromArr(x) {
  return x[Math.floor(Math.random() * x.length)];
}

//

// the structure of a character

let character = {
  name: null,
  gender: null,
  race: null,
  subrace: null,
  class: null,
  background: null,
  personality: [],
  languages: [],
  proficiencyBonus: null,
  proficiencies: {
    primaryAbility: null,
    savingThrows: [],
    weapons: [],
    armor: [],
    skills: [],
    tools: []
  },
  HP: 0,
  hitDie: 0,
  levels: [],
  abilities: {
    str: null,
    dex: null,
    con: null,
    wis: null,
    int: null,
    cha: null
  },
  equipment: { weapons: [], armor: [], magicItems: [] },
  skills: {
    atheletics: [0, false],
    acrobatics: [0, false],
    sleightOfHand: [0, false],
    stealth: [0, false],
    arcana: [0, false],
    history: [0, false],
    investigation: [0, false],
    nature: [0, false],
    religion: [0, false],
    animalHandling: [0, false],
    insight: [0, false],
    medicine: [0, false],
    perception: [0, false],
    survival: [0, false],
    deception: [0, false],
    intimidation: [0, false],
    performance: [0, false],
    persuasion: [0, false]
  },
  feats: [],
  spells: [
    [[0], []],
    [[0], []],
    [[0], []],
    [[0], []],
    [[0], []],
    [[0], []],
    [[0], []],
    [[0], []],
    [[0], []],
    [[0], []]
  ],
  items: []
};

////////////////////////////////////////////////////////////////////////////////////////

// 1. Roll stats --------------------------------------------------------------------

let stats = statsRoll(2);

// 2. Assign class ------------------------------------------------------------------

character.class = Object.values(classes)[
  Math.floor(Math.random() * Object.values(classes).length)
];

character.levels.push(character.class.name);

//      Assign options
//      Assign benefits

character.proficiencyBonus = Math.floor(character.levels.length / 5) + 2;
character.proficiencies.savingThrows = character.class.savingThrowProficiencies;
character.proficiencies.weapons = character.class.weaponProficiencies;
character.proficiencies.armor = character.class.armorProficiencies;
character.HP = character.class.hitDie;
character.hitDie = character.class.hitDie;

// 3. Assign abilities --------------------------------------------------------------

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
  character.proficiencies.primaryAbility = primaryAbility;
  character.abilities[primaryAbility] = stats.shift();
} else if (
  character.class.name === "Monk" ||
  character.class.name === "Paladin" ||
  character.class.name === "Ranger"
) {
  let primaryAbilities = character.class.primaryAbility;
  character.proficiencies.primaryAbility = primaryAbilities;
  character.abilities[primaryAbilities[0]] = stats.shift();
  character.abilities[primaryAbilities[1]] = stats.shift();
} else {
  let primaryAbility = randomFromArr(character.class.primaryAbility);
  character.primaryAbilities = primaryAbility;
  character.proficiencies.primaryAbility = primaryAbility;
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

// 4. Assign race -------------------------------------------------------------------

var randomSourceBook = randomFromObj(races);
character.race = randomFromObj(randomSourceBook);

//      Assign Subrace

character.subrace = randomFromArr(character.race.subraces);

//      Assign options
//      Assign benefits

character.languages = character.race.details.languages.map(x => {
  if (x === "any") {
    let remaingLanguages = Object.values(languages).filter(function(language) {
      return !character.languages.includes(language);
    });
    x = randomFromObj[remaingLanguages];
  }
  return x;
});

for (let i = 0; i < Object.keys(character.race.abilityMod).length; i++) {
  let ability = Object.keys(character.race.abilityMod)[i];
  if (ability === "any") {
    ability = randomFromArr(Object.keys(character.abilities));
  }
  if (ability === "all") {
    character.abilities.str += 1;
    character.abilities.dex += 1;
    character.abilities.con += 1;
    character.abilities.wis += 1;
    character.abilities.int += 1;
    character.abilities.cha += 1;
    break
  }
  let modifier = Object.values(character.race.abilityMod)[i];
  character.abilities[ability] = character.abilities[ability] + modifier;
}

// Below is a bug fix - occassionally, an undefined element will populate character.languages. This removes it.

character.languages = character.languages.filter(function(ele) {
  return typeof ele === "object";
});

// 5. Assign background -------------------------------------------------------------

character.background = randomFromObj(backgrounds);

//      Assign options uniquely offered in background

character.personality.push(character.background.details);

for (let i = 0; i < 4; i++) {
  character.personality.push(
    randomFromArr(character.background.personalityTraits[i])
  );
}

if (character.background.personalityTraits.length > 4) {
  character.personality.push(character.background.personalityTraits[4]);
  character.personality.push(
    randomFromArr(character.background.personalityTraits[5])
  );
}

let remaingLanguages = Object.values(languages).filter(function(language) {
  return !character.languages.includes(language);
});

for (let i = 0; i < character.background.languages.length; i++) {
  if (character.background.languages[i] === "any") {
    let randomLanguage = randomFromArr(remaingLanguages);
    character.languages.push(randomLanguage);
    remaingLanguages.splice(remaingLanguages.indexOf(randomLanguage), 1);
  }
}

//      Assign benefits

character.proficiencies.skills = character.background.skillProficiencies;
for (let i = 0; i < character.proficiencies.skills.length; i++) {
  character.proficiencies.skills[i] = character.proficiencies.skills[i].name;
}

character.proficiencies.tools = character.background.toolProficiencies;

for (let i = 0; i < character.proficiencies.tools.length; i++) {
  if (Array.isArray(character.proficiencies.tools[i]) === true) {
    character.proficiencies.tools[i] = randomFromObj(
      character.proficiencies.tools[i][0]
    );
  }
}

for (let i = 0; i < character.proficiencies.tools.length; i++) {
  character.proficiencies.tools[i] = character.proficiencies.tools[i].name;
}

character.items = character.background.items;

// 6. Assign gender, name -----------------------------------------------------------

character.gender = randomFromArr(genders);

function pickRandomName(race, gender) {
  let raceNames = names[race];
  if (raceNames["Male"] === undefined) {
    raceNames = raceNames[character.subrace.name];
  }
  let genderedNames = raceNames[gender];
  let familyNames = raceNames.Family;
  return randomFromArr(genderedNames) + " " + randomFromArr(familyNames);
}

character.name = pickRandomName(character.race.name, character.gender);

// 7. Assign feats ------------------------------------------------------------------

// 8. Assign skills -----------------------------------------------------------------
//          Assign skill proficiencies from class
//          Assign skill proficiencies from background
//          Assign skill proficiencies from feats

// 9. Assign spells (if caster) -----------------------------------------------------
// 10. Assign items -----------------------------------------------------------------
//          Assign equipment

// 11. Assess -----------------------------------------------------------------------

//      Behold the abilities of our character!

// console.log("name === " + character.name)
// console.log(" ")
// console.log("gender === " + character.gender)
// console.log(" ")
// console.log("race === " + character.race.name);
// console.log(" ")
// console.log("subrace === " + character.subrace.name)
// console.log(" ")
// console.log("class === " + character.class.name);
// console.log(" ")
// console.log("background === " + character.background.name)
// console.log(" ")
// console.log("personality === " + character.personality.join(' '))
// console.log(" ")
// if(character.languages.length === 1){console.log("languages === " + " " + character.languages[0].name);}
// if(character.languages.length === 2){console.log("languages === " + " " + character.languages[0].name + " " + character.languages[1].name);}
// if(character.languages.length === 3){console.log("languages === " + " " + character.languages[0].name + " " + character.languages[1].name + " " + character.languages[2].name);}
// if(character.languages.length === 4){console.log("languages === " + " " + character.languages[0].name + " " + character.languages[1].name + " " + character.languages[2].name + " " + character.languages[3].name);}
// if(character.languages.length === 5){console.log("languages === " + " " + character.languages[0].name + " " + character.languages[1].name + " " + character.languages[2].name + " " + character.languages[3].name + " " + character.languages[4].name);}
// console.log(" ")
// console.log("character level === " + character.levels.length)
// console.log("proficiencyBonus === " + character.proficiencyBonus)
// console.log(" ")
// console.log(" ")
// console.log("primaryAbility === " + character.primaryAbility)
// console.log(" ")
// console.log("savingThrows === " + character.proficiencies.savingThrows)
// console.log(" ")
// console.log("weapon proficiencies === " + character.proficiencies.weapons)
// console.log(" ")
// console.log("armor proficiencies === " + character.proficiencies.armor)
// console.log(" ")
// console.log("skill proficiencies of character === " + character.proficiencies.skills.join(', '))
// console.log(" ")
// console.log("tool proficiencies === " + character.proficiencies.tools.join(', '))
// console.log(" ")
// console.log("HP === " + character.HP) // Currently just for level 1
// console.log(" ")
// console.log("hitDie === " + character.hitDie)
// console.log(" ")
// console.log("levels === " + character.levels.length)
// console.log(" ")
// console.log("abilities === " + Object.keys(character.abilities).join(" "));
// console.log("abilities === " + Object.values(character.abilities).join("  "));
// console.log(" ")
// console.log("str === " + character.str)
// console.log(" ")
// console.log("dex === " + character.dex)
// console.log(" ")
// console.log("con === " + character.con)
// console.log(" ")
// console.log("wis === " + character.wis)
// console.log(" ")
// console.log("int === " + character.int)
// console.log(" ")
// console.log("cha === " + character.cha)
// console.log(" ")
// console.log("equipment === " + character.equipment)
// console.log(" ")
// console.log("weapons === " + character.weapons)
// console.log(" ")
// console.log("armor === " + character.armor)
// console.log(" ")
// console.log("magicItems === " + character.magicItems)
// console.log(" ")
// console.log("skills === " + character.skills)
// console.log(" ")
// console.log("atheletics === " + character.atheletics)
// console.log(" ")
// console.log("acrobatics === " + character.acrobatics)
// console.log(" ")
// console.log("sleightOfHand === " + character.sleightOfHand)
// console.log(" ")
// console.log("stealth === " + character.stealth)
// console.log(" ")
// console.log("arcana === " + character.arcana)
// console.log(" ")
// console.log("history === " + character.history)
// console.log(" ")
// console.log("investigation === " + character.investigation)
// console.log(" ")
// console.log("nature === " + character.nature)
// console.log(" ")
// console.log("religion === " + character.religion)
// console.log(" ")
// console.log("animalHandling === " + character.animalHandling)
// console.log(" ")
// console.log("insight === " + character.insight)
// console.log(" ")
// console.log("medicine === " + character.medicine)
// console.log(" ")
// console.log("perception === " + character.perception)
// console.log(" ")
// console.log("survival === " + character.survival)
// console.log(" ")
// console.log("deception === " + character.deception)
// console.log(" ")
// console.log("intimidation === " + character.intimidation)
// console.log(" ")
// console.log("performance === " + character.performance)
// console.log(" ")
// console.log("persuasion === " + character.persuasion)
// console.log(" ")
// console.log("feats === " + character.feats)
// console.log(" ")
// console.log("spells === " + character.spells)
// console.log(" ")
// console.log("items === " + character.items)
// console.log(" ")

// 12. Export -----------------------------------------------------------------------

module.exports = character;
