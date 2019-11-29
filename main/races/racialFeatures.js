const breathWeapon = {
  name: "Breath Weapon",
  desc:
    "You can use your action to exhale destructive energy. Your Draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your Draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your Proficiency Bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or Long Rest."
};

const draconicAncestry = {
  name: "Draconic Ancestry",
  desc:
    "You have Draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage Resistance are determined by the dragon type, as shown in the table.",
  table: {
    Black: { DamageType: "Acid", BreathWeapon: "5 by 30 ft. line (Dex. save)" },
    Blue: {
      DamageType: "Lightning",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    Brass: { DamageType: "Fire", BreathWeapon: "5 by 30 ft. line (Dex. save)" },
    Bronze: {
      DamageType: "Lightning",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    Copper: {
      DamageType: "Acid",
      BreathWeapon: "5 by 30 ft. line (Dex. save)"
    },
    Gold: { DamageType: "Fire", BreathWeapon: "15 ft. cone (Dex. save)" },
    Green: { DamageType: "Poison", BreathWeapon: "15 ft. cone (Dex. save)" },
    Red: { DamageType: "Fire", BreathWeapon: "15 ft. cone (Dex. save)" },
    Silver: { DamageType: "Cold", BreathWeapon: "15 ft. cone (Dex. save)" },
    White: { DamageType: "Cold", BreathWeapon: "15 ft. cone (Dex. save)" }
  }
};

const draconicDamageResistance = {
  name: "Damage Resistance",
  desc:
    "You have Resistance to the damage type associated with your Draconic ancestry."
};

const hvyArmrSpeed = {
  name: "Heavy Armor Speed",
  desc: "Your speed is not reduced by wearing Heavy Armor."
};
const darkvision = {
  name: "Darkvision",
  desc:
    "Accustomed to life Underground, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only Shades of Gray."
};

const dwarvenResilience = {
  name: "Dwarven Resilience",
  desc:
    "You have advantage on Saving Throws against poison, and you have Resistance against poison damage."
};
const dwarvenCombatTraining = {
  name: "Dwarven Combat Training",
  desc:
    "You have proficiency with the Battleaxe, Handaxe, Light Hammer, and Warhammer."
};
const toolProficiency = {
  name: "Tool Proficiency",
  desc:
    "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
};
const stonecunning = {
  name: "Stonecunning",
  desc:
    "Whenever you make an Intelligence (History) check related to the Origin of stonework, you are considered proficient in the History skill and add double your Proficiency Bonus to the check, instead of your normal Proficiency Bonus."
};
const keenSenses = {
  name: "Keen Senses",
  desc: "You have proficiency in the Perception skill."
};
const feyAncestry = {
  name: "Fey Ancestry",
  desc:
    "You have advantage on Saving Throws against being Charmed, and magic can’t put you to sleep."
};
const trance = {
  name: "Trance",
  desc:
    "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
};
const gnomeCunning = {
  name: "Gnome Cunning",
  desc:
    "You have advantage on all Intelligence, Wisdom, and Charisma Saving Throws against magic."
};

const relentlessEndurace = {
  name: "Relentless Endurace",
  desc:
    "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a Long Rest."
};
const savageAttacks = {
  name: "Savage Attacks",
  desc:
    "When you score a critical hit with a melee weapon Attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit."
};

const lucky = {
  name: "Lucky",
  desc:
    "When you roll a 1 on The D20 for an Attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
};

const brave = {
  name: "Brave",
  desc: "You have advantage on Saving Throws against being Frightened."
};

const halflingNimbleness = {
  name: "Halfling Nimbleness",
  desc:
    "You can move through the space of any creature that is of a size larger than yours."
};

const hellishResistance = {
    name: "Hellish Resistance",
    desc: "You have Resistance to fire damage."
}

const infernalLegacy = {
    name: "Infernal Legacy",
    desc: "You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the Hellish Rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a Long Rest. When you reach 5th level, you can cast the Darkness spell once with this trait and regain the ability to do so when you finish a Long Rest. Charisma is your Spellcasting Ability for these Spells."
}

/////////////////

const racialFeatures = {
  breathWeapon: breathWeapon,
  darkvision: darkvision,
  draconicAncestry: draconicAncestry,
  draconicDamageResistance: draconicDamageResistance,
  dwarvenResilience: dwarvenResilience,
  dwarvenCombatTraining: dwarvenCombatTraining,
  hvyArmrSpeed: hvyArmrSpeed,
  toolProficiency: toolProficiency,
  stonecunning: stonecunning,
  keenSenses: keenSenses,
  feyAncestry: feyAncestry,
  trance: trance,
  gnomeCunning: gnomeCunning,
  feyAncestry: feyAncestry,
  relentlessEndurace: relentlessEndurace,
  savageAttacks: savageAttacks,
  lucky: lucky,
  brave: brave,
  halflingNimbleness: halflingNimbleness,
  hellishResistance: hellishResistance,
  infernalLegacy: infernalLegacy
};

module.exports = racialFeatures
