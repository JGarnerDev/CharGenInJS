const racialFeats = require("./racialFeats");
const languages = require("./languages")
const phbSubraces = require("./phbSubRaces")

const dragonborn = {
  race: "Dragonborn",
  subraces: [],
  abilityMod: { str: +2, cha: +1 },
  movement: { walking: "30", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Young dragonborn grow quickly. They walk hours after hatching, attain the size and Development of a 10-year-old human child by the age of 3, and reach Adulthood by 15. They live to be around 80.",
    alignment:
      "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
    languages: [languages.common, languages.draconic],
    size:
      "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 2 pounds. Your size is Medium."
  },
  racialFeats: [racialFeats.draconicAncestry, racialFeats.breathWeapon, racialFeats.draconicDamageResistance],
  source: "PHB"
};

const dwarf = {
  race: "Dwarf",
  subraces: [phbSubraces.hillDwarf, phbSubraces.mountainDwarf],
  abilityMod: { con: +2 },
  movement: { walking: "25", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
    alignment:
      "Most Dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of Fair Play and a belief that everyone deserves to share in the benefits of a just order.",
    languages: [languages.common, languages.dwarvish],
    size:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
  },
  racialFeats: [
    racialFeats.hvyArmrSpeed,
    racialFeats.darkvision,
    racialFeats.dwarvenResilience,
    racialFeats.dwarvenCombatTraining,
    racialFeats.toolProficiency,
    racialFeats.stonecunning
  ],
  source: "EEPC"
};
const elf = {
  race: "Elf",
  subraces: [phbSubraces.highElf, phbSubraces.woodElf, phbSubraces.drow],
  abilityMod: { dex: +2 },
  movement: { walking: "30", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Although elves reach physical maturity at about the same age as humans, the elven understanding of Adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims Adulthood and an adult name around the age of 100 and can live to be 750 years old.",
    alignment:
      "Elves love freedom, variety, and self- expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not.",
    languages: [languages.common, languages.elvish],
    size:
      "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium."
  },
  racialFeats: [racialFeats.darkvision, racialFeats.keenSenses, racialFeats.feyAncestry, racialFeats.trance],
  source: "EEPC"
};
const gnome = {
  race: "Gnome",
  subraces: [phbSubraces.deepGnome, phbSubraces.rockGnome],
  abilityMod: { int: +2 },
  movement: { walking: "25", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
    alignment:
      "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than Vicious.",
    languages: [languages.common, languages.gnomish],
    size:
      "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small."
  },
  racialFeats: [racialFeats.darkvision, racialFeats.gnomeCunning],
  source: "EEPC"
};
const halfElf = {
  race: "Half-Elf",
  subraces: [],
  abilityMod: { cha: +2, any2: +1 },
  movement: { walking: "30", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Half-elves mature at the same rate humans do and reach Adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
    alignment:
      "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.",
    languages: [languages.common, languages.elvish, languages.any1Lang],
    size:
      "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium."
  },
  racialFeats: [racialFeats.darkvision, racialFeats.feyAncestry],
  source: "EEPC"
};
const halfOrc = {
  race: "Half-Orc",
  subraces: [],
  abilityMod: { str: +2, con: +1 },
  movement: { walking: "30", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Half-Orcs mature a little faster than humans, reaching Adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
    alignment:
      "Half-Orcs inherit a tendency toward chaos from their orc Parents and are not strongly inclined toward good. Half-Orcs raised among orcs and willing to live out their lives among them are usually evil.",
    languages: [languages.common, languages.orc],
    size:
      "Half-Orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium."
  },
  racialFeats: [racialFeats.darkvision, racialFeats.menacing, racialFeats.relentlessEndurace, racialFeats.savageAttacks],
  source: "EEPC"
};
const halfling = {
  race: "Halfling",
  subraces: [phbSubraces.lightfootHalfling, phbSubraces.stoutHalfling],
  abilityMod: { dex: +2 },
  movement: { walking: "25", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "A halfling reaches Adulthood at the age of 20 and generally lives into the middle of his or her second century.",
    alignment:
      "Most Halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
    languages: [languages.common, languages.halfling],
    size:
      "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small."
  },
  racialFeats: [racialFeats.lucky, racialFeats.brave, racialFeats.halflingNimbleness],
  source: "EEPC"
};
const human = {
  race: "Human",
  subraces: [phbSubraces.humanVariant],
  abilityMod: { all: +1 },
  movement: { walking: "30", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Humans reach adulthood in their late teens and live less than a century.",
    alignment:
      " Humans tend toward no particular alignment. The best and the worst are found among them.",
    languages: [languages.common, languages.any1Lang],
    size:
      "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium."
  },
  racialFeats: [],
  source: "EEPC"
};
const tiefling = {
  race: "Tiefling",
  subraces: [],
  abilityMod: { cha: +2, int: +1 },
  movement: { walking: "30", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Tieflings mature at the same rate as humans but live a few years longer.",
    alignment:
      "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent Nature inclines many Tieflings toward a chaotic Alignment.",
    languages: [languages.common, languages.infernal],
    size:
      "Tieflings are about the same size and build as humans. Your size is Medium."
  },
  racialFeats: [racialFeats.darkvision, racialFeats.hellishResistance, racialFeats.infernalLegacy],
  source: "EEPC"
};

const races = {
  dragonborn: dragonborn,
  dwarf: dwarf,
  elf: elf,
  gnome: gnome,
  halfElf: halfElf,
  halfOrc: halfOrc,
  halfing: halfling,
  human: human,
  tiefling: tiefling
};

module.exports = races;
