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
const QQQ = {
  name: "",
  desc: ""
};

/////////////////

const racialFeats = [
  breathWeapon,
  darkvision,
  draconicAncestry,
  draconicDamageResistance,
  dwarvenResilience,
  dwarvenCombatTraining,
  toolProficiency,
  stonecunning
];
