const items = require("../items/itemsMain");

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
      items.weapons.martial.melee.greataxe,
      items.weapons.martial.melee.any
    ],
    [
      (items.weapons.simple.melee.handaxe,
      items.weapons.simple.melee.handaxe),
      items.weapons.simple.melee.any
    ],
    (items.weapons.simple.melee.javelin,
    items.weapons.simple.melee.javelin,
    items.weapons.simple.melee.javelin,
    items.weapons.simple.melee.javelin),
    items.adventuringGear.explorersPack
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
      items.weapons.martial.melee.rapier,
      items.weapons.martial.melee.longsword,
      items.weapons.simple.melee.any
    ],
    [
      items.adventuringGear.diplomatsPack,
      items.adventuringGear.entertainersPack
    ],
    [items.adventuringGear.lute, items.adventuringGear.anyInstrument],
    items.armor.light.leather,
    items.weapons.simple.melee.dagger
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
      items.weapons.simple.melee.mace,
      items.weapons.martial.melee.warhammer
    ],
    [
      items.armor.medium.scaleMail,
      items.armor.light.leather,
      items.armor.heavy.chainMail
    ],
    [
      [
        items.weapons.simple.ranged.lightCrossbow,
        items.adventuringGear.crossbowBoltCase
      ],
      items.weapons.simple.any
    ],
    [
      items.adventuringGear.priestsPack,
      items.adventuringGear.adventurersPack
    ],
    items.armor.shield,
    items.adventuringGear.holySymbol
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
    [items.armor.shield, items.weapons.simple.any],
    [
      items.weapons.martial.melee.scimitar,
      items.weapons.simple.melee.any
    ],
    items.armor.light.leather,
    items.adventuringGear.explorersPack,
    items.adventuringGear.druidicFocus
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
      items.armor.heavy.chainMail,
      [
        items.armor.light.leather,
        items.weapons.martial.ranged.longbow,
        items.adventuringGear.quiver
      ]
    ],
    [
      [items.weapons.martial.any, items.armor.shield],
      [items.weapons.martial.any, items.weapons.martial.any]
    ],
    [
      [
        items.weapons.simple.ranged.lightCrossbow,
        items.adventuringGear.crossbowBoltCase
      ],
      [
        items.weapons.simple.melee.handaxe,
        items.weapons.simple.melee.handaxe
      ]
    ],
    [
      items.adventuringGear.dungeoneersPack,
      items.adventuringGear.explorersPack
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
    [items.weapons.martial.melee.shortsword, items.weapons.simple.any],
    [
      items.adventuringGear.dungeoneersPack,
      items.adventuringGear.explorersPack
    ],
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart,
    items.weapons.simple.ranged.dart
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
      [items.weapons.martial.any, items.armor.shield],
      [items.weapons.martial.any, items.weapons.martial.any]
    ],
    [
      [
        items.weapons.simple.melee.javelin,
        items.weapons.simple.melee.javelin,
        items.weapons.simple.melee.javelin,
        items.weapons.simple.melee.javelin,
        items.weapons.simple.melee.javelin
      ],
      items.weapons.simple.melee.any
    ],
    [
      items.adventuringGear.priestsPack,
      items.adventuringGear.explorersPack
    ],
    items.armor.heavy.chainMail,
    items.adventuringGear.holySymbol
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
    [items.armor.medium.scaleMail, items.armor.light.leather],
    [
      [
        items.weapons.martial.melee.shortsword,
        items.weapons.martial.melee.shortsword
      ],
      [items.weapons.simple.melee.any, items.weapons.simple.melee.any]
    ],
    [
      items.adventuringGear.dungeoneersPack,
      items.adventuringGear.explorersPack
    ],
    items.weapons.martial.ranged.longbow,
    items.adventuringGear.quiver
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
      items.weapons.martial.melee.rapier,
      items.weapons.martial.melee.shortsword
    ],
    [
      [
        items.weapons.simple.ranged.shortbow,
        items.adventuringGear.quiver
      ],
      items.weapons.martial.melee.shortsword
    ],
    [
      items.adventuringGear.burglarsPack,
      items.adventuringGear.dungeoneersPack,
      items.adventuringGear.explorersPack
    ],
    ,
    items.armor.light.leather,
    items.weapons.simple.melee.dagger,
    items.weapons.simple.melee.dagger,
    items.adventuringGear.thievesTools
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
        items.weapons.simple.ranged.lightCrossbow,
        items.adventuringGear.crossbowBoltCase
      ],
      items.weapons.simple.any
    ],
    [
      items.adventuringGear.componentPouch,
      items.adventuringGear.acaneFocus
    ],
    [
      items.adventuringGear.dungeoneersPack,
      items.adventuringGear.explorersPack
    ],
    items.weapons.simple.melee.dagger,
    items.weapons.simple.melee.dagger
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
        items.weapons.simple.ranged.lightCrossbow,
        items.adventuringGear.crossbowBoltCase
      ],
      items.weapons.simple.any
    ],
    [
      items.adventuringGear.componentPouch,
      items.adventuringGear.acaneFocus
    ],
    [
      items.adventuringGear.scholarsPack,
      items.adventuringGear.dungeoneersPack
    ],
    items.armor.light.leather,
    items.weapons.simple.any,
    items.weapons.simple.melee.dagger,
    items.weapons.simple.melee.dagger
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
      items.weapons.simple.melee.quarterstaff,
      items.weapons.simple.melee.dagger
    ],
    [
      items.adventuringGear.componentPouch,
      items.adventuringGear.acaneFocus
    ],
    [
      items.adventuringGear.scholarsPack,
      items.adventuringGear.explorersPack
    ],
    items.adventuringGear.spellbook
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
