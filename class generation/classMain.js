
const barbarian = {
    name: "Barbarian",
  description:
    "A fierce warrior of primitive background who can enter a battle rage",
  hitDie: "d12",
  primaryAbility: "Strength",
  savingThrowProficiency: ["Strength", "Constitution"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Shields",
    "Simple Weapons",
    "Martial Weapons"
  ]
};
const bard = {
    name: "Bard",
  description: "An inspiring magician whose power echoes the music of creation",
  hitDie: "d8",
  primaryAbility: "Charisma",
  savingThrowProficiency: ["Charisma", "Dexterity"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Simple Weapons",
    "Hand crossbows",
    "Longswords",
    "Rapiers",
    "Shortswords"
  ]
};
const cleric = {
    name: "Cleric",
  description:
    "A priestly champion who wields divine magic in service of a higher power",
  hitDie: "d8",
  primaryAbility: "Wisdom",
  savingThrowProficiency: ["Wisdom", "Charisma"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Shields",
    "Simple weapons"
  ]
};
const druid = {
    name: "Druid",
  description:
    "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms",
  hitDie: "d8",
  primaryAbility: "Wisdom",
  savingThrowProficiency: ["Intelligence", "Wisdom"],
  armorAndWeaponProficiencies: [
    "Light armor (non-metal)",
    "Medium armor (non-metal)",
    "Shields (non-metal)",
    "Clubs",
    "Daggers",
    "Darts",
    "Javelins",
    "Maces",
    "Quarterstaffs",
    "Scimitars",
    "Sickles",
    "Slings",
    "Spears"
  ]
};
const fighter = {
    name: "Fighter",
  description:
    "A master of martial combat, skilled with a variety of weapons and armor",
  hitDie: "d10",
  primaryAbility: { or: ["Strength", "Dexterity"] },
  savingThrowProficiency: ["Strength", "Constitution"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Heavy armor",
    "Shields",
    "Simple Weapons",
    "Martial Weapons"
  ]
};
const monk = {
    name: "Monk",
  description:
    "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
  hitDie: "d8",
  primaryAbility: { and: ["Dexterity", "Wisdom"] },
  savingThrowProficiency: ["Strength", "Dexterity"],
  armorAndWeaponProficiencies: ["Simple Weapons", "Shortswords"]
};
const paladin = {
    name: "Paladin",
  description: "A holy warrior bound to a sacred oath",
  hitDie: "d10",
  primaryAbility: { and: ["Strength", "Charisma"] },
  savingThrowProficiency: ["Wisdom", "Charisma"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Heavy armor",
    "Shields",
    "Simple Weapons",
    "Martial Weapons"
  ]
};
const ranger = {
    name: "Ranger",
  description:
    "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
  hitDie: "d10",
  primaryAbility: { and: ["Dexterity", "Wisdom"] },
  savingThrowProficiency: ["Strength", "Dexterity"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Shields",
    "Simple weapons",
    "Martial weapons"
  ]
};
const rogue = {
    name: "Rogue",
  description:
    "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
  hitDie: "d8",
  primaryAbility: "Dexterity",
  savingThrowProficiency: ["Dexterity", "Intelligence"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Simple weapons",
    "Hand crossbows",
    "Longswords",
    "Rapiers",
    "Shortswords"
  ]
};
const sorcerer = {
    name: "Sorcerer",
  description:
    "A spellcaster who draws on inherent magic from a gift or bloodline",
  hitDie: "d6",
  primaryAbility: "Charisma",
  savingThrowProficiency: ["Constitution", "Charisma"],
  armorAndWeaponProficiencies: [
    "Daggers",
    "Darts",
    "Slings",
    "Quarterstaffs",
    "Light crossbows"
  ]
};
const warlock = {
    name: "Warlock",
  description:
    "A wielder of magic that is derived from a bargain with an extraplanar entity",
  hitDie: "d8",
  primaryAbility: "Charisma",
  savingThrowProficiency: ["Wisdom", "Charisma"],
  armorAndWeaponProficiencies: ["Light armor", "Simple weapons"]
};
const wizard = {
    name: "Wizard",
  description:
    "A scholarly magic-user capable of manipulating the structures of reality",
  hitDie: "d6",
  primaryAbility: "Intelligence",
  savingThrowProficiency: ["Intelligence", "Wisdom"],
  armorAndWeaponProficiencies: [
    "Daggers",
    "Darts",
    "Slings",
    "Quarterstaffs",
    "Light crossbows"
  ]
};

const classes = [
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard
];

module.exports = classes

