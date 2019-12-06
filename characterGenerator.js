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

// a general function to return the camelCase version of a sentence

function camelCase(x) {
  return x.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

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
  abilityMod: {
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
  spellcastingLevel: 0,
  spellsKnown: 0,
  spellcastingAbility: 0,
  spellAttackMod: 0,
  spellSaveDC: 0,
  ritualCaster: false,
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

function makeCharacter() {
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
  character.proficiencies.savingThrows =
    character.class.savingThrowProficiencies;

  let classSkillsOptions = character.class.skillProficiencies.slice(1);
  if (character.class.name === "Bard") {
    classSkillsOptions = skills.names;
  }
  let classSkillsChoices = character.class.skillProficiencies[0];

  for (let i = 0; i < classSkillsChoices; i++) {
    let skillPick = randomFromArr(classSkillsOptions);
    character.proficiencies.skills.push(skillPick);
    classSkillsOptions = classSkillsOptions.filter(
      option => option !== skillPick
    );
  }

  character.proficiencies.weapons = character.class.weaponProficiencies;
  character.proficiencies.armor = character.class.armorProficiencies;
  character.HP = character.class.hitDie;
  character.hitDie = character.class.hitDie;

  for (let i = 0; i < character.class.startingItems.length; i++) {
    let item = character.class.startingItems[i];
    if (Array.isArray(item)) {
      item = randomFromArr(item);
    }
    character.items.push(item);
  }
  for (let i = 0; i < character.items.length; i++) {
    let item = character.items[i];
    if (Array.isArray(item)) {
      item = randomFromArr(item);
      character.items[i] = item
    }
  }

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
      let remaingLanguages = Object.values(languages).filter(function(
        language
      ) {
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
      break;
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

  if (character.background.skillProficiencies.length >= 1) {
    let backgroundSkills = character.background.skillProficiencies;
    backgroundSkills = backgroundSkills.map(function(skill) {
      return camelCase(skill);
    });
    character.proficiencies.skills = character.proficiencies.skills.concat(
      backgroundSkills
    );
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

  for (let i = 0; i < character.background.startingItems.length; i++) {
    let item = character.background.startingItems[i];
    if (Array.isArray(item)) {
      item = randomFromArr(item);
    }
    character.items.push(item);
  }


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

  // 7. Assign skills -----------------------------------------------------------------
  //          Assign skill proficiencies

  for (let i = 0; i < character.proficiencies.skills.length; i++) {
    let skillIdentity = camelCase(character.proficiencies.skills[i]);
    character.skills[skillIdentity][1] = true;
  }

  // 8. Assign spells (if caster) -----------------------------------------------------

  character.spellcastingLevel = Math.floor(character.class.spellcastingLevel);
  if (character.spellcastingLevel > 0) {
    character.spells[1][0] = Math.min(4, 2 + (character.spellcastingLevel - 1));
    character.spells[2][0] = Math.min(3, 2 + (character.spellcastingLevel - 3));
    character.spells[3][0] = Math.min(3, 2 + (character.spellcastingLevel - 5));
    character.spells[4][0] = Math.min(3, 1 + (character.spellcastingLevel - 7));
    character.spells[5][0] = Math.min(3, 1 + (character.spellcastingLevel - 9));
    character.spells[6][0] = Math.min(
      2,
      1 + (character.spellcastingLevel - 11)
    );
    character.spells[7][0] = Math.min(
      2,
      1 + (character.spellcastingLevel - 13)
    );
    character.spells[8][0] = Math.min(
      1,
      1 + (character.spellcastingLevel - 15)
    );
    character.spells[9][0] = Math.min(
      1,
      1 + (character.spellcastingLevel - 17)
    );
  }

  // 10. Assign items -----------------------------------------------------------------

  //      From class

 
  return character;
}

makeCharacter();
character.items.forEach(item => {console.log(item)})

// 9. Assign feats ------------------------------------------------------------------

//      From background

// 11. Assign equipment -------------------------------------------------------------

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// 12. Assess -----------------------------------------------------------------------

//      Behold the abilities of our character!

// console.log("name === " + character.name);
// console.log(" ");
// console.log("gender === " + character.gender);
// console.log(" ");
// console.log("race === " + character.race.name);
// console.log(" ");
// console.log("subrace === " + character.subrace.name);
// console.log(" ");
// console.log("class === " + character.class.name);
// console.log(" ");
// console.log("background === " + character.background.name);
// console.log(" ");
// console.log("Personality");
// console.log(" ");
// for (let i = 0; i < character.personality.length; i++) {
//   console.log("- " + character.personality[i]);
//   console.log(" ");
// }
// console.log(" ");

// console.log("Languages");
// for (let i = 0; i < character.languages.length; i++) {
//   console.log("- " + character.languages[i].name);
// }

// console.log(" ");
// console.log("character level === " + character.levels.length);
// console.log(" ");
// console.log("proficiencyBonus === " + character.proficiencyBonus);
// console.log(" ");
// console.log("primaryAbility === " + character.proficiencies.primaryAbility);
// console.log(" ");
// console.log(
//   "savingThrows === " + character.proficiencies.savingThrows.join(" ")
// );
// console.log(" ");
// console.log("Weapon proficiencies");
// for (let i = 0; i < character.proficiencies.weapons.length; i++) {
//   console.log("- " + character.proficiencies.weapons[i]);
// }
// console.log(" ");
// console.log("armor proficiencies === ");
// for (let i = 0; i < character.proficiencies.armor.length; i++) {
//   console.log("- " + character.proficiencies.armor[i]);
// }
// console.log(" ");
// console.log(
//   "skill proficiencies === " + character.proficiencies.skills.join(", ")
// );
// console.log(" ");
// console.log(
//   "tool proficiencies === " + character.proficiencies.tools.join(", ")
// );
// console.log(" ");
// console.log("HP === " + character.HP); // Currently just for level 1
// console.log(" ");
// console.log("hitDie === " + character.hitDie);
// console.log(" ");
// console.log("levels === " + character.levels.length);
// console.log(" ");
// console.log("abilities === " + Object.keys(character.abilities).join(" "));
// console.log("abilities === " + Object.values(character.abilities).join("  "));
// console.log(" ");
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

module.exports = makeCharacter;
