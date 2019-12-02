const equipment = require("../items/equipmentMain");

const barbarian = {
  name: "Barbarian",
  description:
    "A fierce warrior of primitive background who can enter a battle rage",
  hitDie: 12,
  primaryAbility: "Strength",
  savingThrowProficiency: ["Strength", "Constitution"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Shields",
    "Simple Weapons",
    "Martial Weapons"
  ],
  startingEquipment: [
    [
      equipment.weapons.martial.melee.greataxe,
      equipment.weapons.martial.melee.any
    ],
    [
      (equipment.weapons.simple.melee.handaxe,
      equipment.weapons.simple.melee.handaxe),
      equipment.weapons.simple.melee.any
    ],
    (equipment.weapons.simple.melee.javelin,
    equipment.weapons.simple.melee.javelin,
    equipment.weapons.simple.melee.javelin,
    equipment.weapons.simple.melee.javelin),
    equipment.adventuringGear.explorersPack
  ]
};
const bard = {
  name: "Bard",
  description: "An inspiring magician whose power echoes the music of creation",
  hitDie: 8,
  primaryAbility: "Charisma",
  savingThrowProficiency: ["Charisma", "Dexterity"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Simple Weapons",
    "Hand crossbows",
    "Longswords",
    "Rapiers",
    "Shortswords"
  ],
  startingEquipment: [
    [
      equipment.weapons.martial.melee.rapier,
      equipment.weapons.martial.melee.longsword,
      equipment.weapons.simple.melee.any
    ],
    [
      equipment.adventuringGear.diplomatsPack,
      equipment.adventuringGear.entertainersPack
    ],
    [equipment.adventuringGear.lute, equipment.adventuringGear.anyInstrument],
    equipment.armor.light.leather,
    equipment.weapons.simple.melee.dagger
  ]
};
const cleric = {
  name: "Cleric",
  description:
    "A priestly champion who wields divine magic in service of a higher power",
  hitDie: 8,
  primaryAbility: "Wisdom",
  savingThrowProficiency: ["Wisdom", "Charisma"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Shields",
    "Simple weapons"
  ],
  startingEquipment: [
    [
      equipment.weapons.simple.melee.mace,
      equipment.weapons.martial.melee.warhammer
    ],
    [
      equipment.armor.medium.scaleMail,
      equipment.armor.light.leather,
      equipment.armor.heavy.chainMail
    ],
    [
      [
        equipment.weapons.simple.ranged.lightCrossbow,
        equipment.adventuringGear.crossbowBoltCase
      ],
      equipment.weapons.simple.any
    ],
    [
      equipment.adventuringGear.priestsPack,
      equipment.adventuringGear.adventurersPack
    ],
    equipment.armor.shield,
    equipment.adventuringGear.holySymbol
  ]
};
const druid = {
  name: "Druid",
  description:
    "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms",
  hitDie: 8,
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
  ],
  startingEquipment: [
    [equipment.armor.shield, equipment.weapons.simple.any],
    [
      equipment.weapons.martial.melee.scimitar,
      equipment.weapons.simple.melee.any
    ],
    equipment.armor.light.leather,
    equipment.adventuringGear.explorersPack,
    equipment.adventuringGear.druidicFocus
  ]
};
const fighter = {
  name: "Fighter",
  description:
    "A master of martial combat, skilled with a variety of weapons and armor",
  hitDie: 10,
  primaryAbility: { or: ["Strength", "Dexterity"] },
  savingThrowProficiency: ["Strength", "Constitution"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Heavy armor",
    "Shields",
    "Simple Weapons",
    "Martial Weapons"
  ],
  startingEquipment: [
    [
      equipment.armor.heavy.chainMail,
      [
        equipment.armor.light.leather,
        equipment.weapons.martial.ranged.longbow,
        equipment.adventuringGear.quiver
      ]
    ],
    [
      [equipment.weapons.martial.any, equipment.armor.shield],
      [equipment.weapons.martial.any, equipment.weapons.martial.any]
    ],
    [
      [
        equipment.weapons.simple.ranged.lightCrossbow,
        equipment.adventuringGear.crossbowBoltCase
      ],
      [
        equipment.weapons.simple.melee.handaxe,
        equipment.weapons.simple.melee.handaxe
      ]
    ],
    [
      equipment.adventuringGear.dungeoneersPack,
      equipment.adventuringGear.explorersPack
    ]
  ]
};
const monk = {
  name: "Monk",
  description:
    "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
  hitDie: 8,
  primaryAbility: { and: ["Dexterity", "Wisdom"] },
  savingThrowProficiency: ["Strength", "Dexterity"],
  armorAndWeaponProficiencies: ["Simple Weapons", "Shortswords"],
  startingEquipment: [
    [equipment.weapons.martial.melee.shortsword, equipment.weapons.simple.any],
    [
      equipment.adventuringGear.dungeoneersPack,
      equipment.adventuringGear.explorersPack
    ],
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart,
    equipment.weapons.simple.ranged.dart
  ]
};
const paladin = {
  name: "Paladin",
  description: "A holy warrior bound to a sacred oath",
  hitDie: 10,
  primaryAbility: { and: ["Strength", "Charisma"] },
  savingThrowProficiency: ["Wisdom", "Charisma"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Heavy armor",
    "Shields",
    "Simple Weapons",
    "Martial Weapons"
  ],
  startingEquipment: [
    [
      [equipment.weapons.martial.any, equipment.armor.shield],
      [equipment.weapons.martial.any, equipment.weapons.martial.any]
    ],
    [
      [
        equipment.weapons.simple.melee.javelin,
        equipment.weapons.simple.melee.javelin,
        equipment.weapons.simple.melee.javelin,
        equipment.weapons.simple.melee.javelin,
        equipment.weapons.simple.melee.javelin
      ],
      equipment.weapons.simple.melee.any
    ],
    [
      equipment.adventuringGear.priestsPack,
      equipment.adventuringGear.explorersPack
    ],
    equipment.armor.heavy.chainMail,
    equipment.adventuringGear.holySymbol
  ]
};
const ranger = {
  name: "Ranger",
  description:
    "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
  hitDie: 10,
  primaryAbility: { and: ["Dexterity", "Wisdom"] },
  savingThrowProficiency: ["Strength", "Dexterity"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Medium armor",
    "Shields",
    "Simple weapons",
    "Martial weapons"
  ],
  startingEquipment: [
    [equipment.armor.medium.scaleMail, equipment.armor.light.leather],
    [
      [
        equipment.weapons.martial.melee.shortsword,
        equipment.weapons.martial.melee.shortsword
      ],
      [equipment.weapons.simple.melee.any, equipment.weapons.simple.melee.any]
    ],
    [
      equipment.adventuringGear.dungeoneersPack,
      equipment.adventuringGear.explorersPack
    ],
    equipment.weapons.martial.ranged.longbow,
    equipment.adventuringGear.quiver
  ]
};
const rogue = {
  name: "Rogue",
  description:
    "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
  hitDie: 8,
  primaryAbility: "Dexterity",
  savingThrowProficiency: ["Dexterity", "Intelligence"],
  armorAndWeaponProficiencies: [
    "Light armor",
    "Simple weapons",
    "Hand crossbows",
    "Longswords",
    "Rapiers",
    "Shortswords"
  ],
  startingEquipment: [
    [
      equipment.weapons.martial.melee.rapier,
      equipment.weapons.martial.melee.shortsword
    ],
    [
      [
        equipment.weapons.simple.ranged.shortbow,
        equipment.adventuringGear.quiver
      ],
      equipment.weapons.martial.melee.shortsword
    ],
    [
      equipment.adventuringGear.burglarsPack,
      equipment.adventuringGear.dungeoneersPack,
      equipment.adventuringGear.explorersPack
    ],
    ,
    equipment.armor.light.leather,
    equipment.weapons.simple.melee.dagger,
    equipment.weapons.simple.melee.dagger,
    equipment.adventuringGear.thievesTools
  ]
};
const sorcerer = {
  name: "Sorcerer",
  description:
    "A spellcaster who draws on inherent magic from a gift or bloodline",
  hitDie: 6,
  primaryAbility: "Charisma",
  savingThrowProficiency: ["Constitution", "Charisma"],
  armorAndWeaponProficiencies: [
    "Daggers",
    "Darts",
    "Slings",
    "Quarterstaffs",
    "Light crossbows"
  ],
  startingEquipment: [
    [
      [
        equipment.weapons.simple.ranged.lightCrossbow,
        equipment.adventuringGear.crossbowBoltCase
      ],
      equipment.weapons.simple.any
    ],
    [
      equipment.adventuringGear.componentPouch,
      equipment.adventuringGear.acaneFocus
    ],
    [
      equipment.adventuringGear.dungeoneersPack,
      equipment.adventuringGear.explorersPack
    ],
    equipment.weapons.simple.melee.dagger,
    equipment.weapons.simple.melee.dagger
  ]
};
const warlock = {
  name: "Warlock",
  description:
    "A wielder of magic that is derived from a bargain with an extraplanar entity",
  hitDie: 8,
  primaryAbility: "Charisma",
  savingThrowProficiency: ["Wisdom", "Charisma"],
  armorAndWeaponProficiencies: ["Light armor", "Simple weapons"],
  startingEquipment: [
    [
      [
        equipment.weapons.simple.ranged.lightCrossbow,
        equipment.adventuringGear.crossbowBoltCase
      ],
      equipment.weapons.simple.any
    ],
    [
      equipment.adventuringGear.componentPouch,
      equipment.adventuringGear.acaneFocus
    ],
    [
      equipment.adventuringGear.scholarsPack,
      equipment.adventuringGear.dungeoneersPack
    ],
    equipment.armor.light.leather,
    equipment.weapons.simple.any,
    equipment.weapons.simple.melee.dagger,
    equipment.weapons.simple.melee.dagger
  ]
};
const wizard = {
  name: "Wizard",
  description:
    "A scholarly magic-user capable of manipulating the structures of reality",
  hitDie: 6,
  primaryAbility: "Intelligence",
  savingThrowProficiency: ["Intelligence", "Wisdom"],
  armorAndWeaponProficiencies: [
    "Daggers",
    "Darts",
    "Slings",
    "Quarterstaffs",
    "Light crossbows"
  ],
  startingEquipment: [
    [
      equipment.weapons.simple.melee.quarterstaff,
      equipment.weapons.simple.melee.dagger
    ],
    [
      equipment.adventuringGear.componentPouch,
      equipment.adventuringGear.acaneFocus
    ],
    [
      equipment.adventuringGear.scholarsPack,
      equipment.adventuringGear.explorersPack
    ],
    equipment.adventuringGear.spellbook
  ]
};

const classes = {
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
};

module.exports = classes;
