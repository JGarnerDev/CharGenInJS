////// --------------- Races --------------- \\\\\\

const races = [dragonborn, dwarf]

// PHB, Players HandBook (The "core" races of Dungeons and Dragons)

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
    languages: [common, draconic],
    size:
      "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 2 pounds. Your size is Medium."
  },
  racialFeats: [draconicAncestry, breathWeapon, draconicDamageResistance],
  source: "PHB"
};
const dwarf = {
  race: "Dwarf",
  subraces: [hillDwarf, mountainDwarf ],
  abilityMod: { con: +2 },
  movement: { walking: "25", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age:
      "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
    alignment:
      "Most Dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of Fair Play and a belief that everyone deserves to share in the benefits of a just order.",
    languages: [common, dwarvish],
    size:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium."
  },
  racialFeats: [hvyArmrSpeed, darkvision, dwarvenResilience, dwarvenCombatTraining, toolProficiency, stonecunning],
  source: "EEPC"
};

// EEPC, Elemental Evil Player's Companion (Supplimental)

const aarakocra = {
  race: "Aarakocra",
  subraces: [],
  abilityMod: { dex: +2, wis: +1 },
  movement: { walking: "25", swim: "", fly: "", climb: "" },
  details: {
    desc: "",
    age: "30",
    alignment: "",
    languages: ["Common", "Aarakocra", "Auran"],
    size: "M"
  },
  racialFeats: [flight, talons],
  source: "EEPC"
};

////// --------------- racialFeats --------------- \\\\\\


module.exports = charRace;
