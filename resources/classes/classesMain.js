const items = require("../items/itemsMain");

const barbarian = {
  name: "Barbarian",
  description:
    "A fierce warrior of primitive background who can enter a battle rage",
  hitDie: 12,
  primaryAbility: "str",
  savingThrowProficiencies: ["str", "con"],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: ["weapons simple", "weapons martial "],
  startingEquipment: [
    [items.weapons.martial.melee.greataxe, items.weapons.martial.melee.any],
    [
      (items.weapons.simple.melee.handaxe, items.weapons.simple.melee.handaxe),
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
  primaryAbility: "cha",
  savingThrowProficiencies: ["cha", "dex"],
  armorProficiencies: ["armor light"],
  weaponProficiencies: [
    "weapons simple",
    "weapons martial ranged handCrossbow",
    "weapons martial melee longsword",
    "weapons martial melee rapier",
    "weapons martial melee shortsword"
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
  primaryAbility: "wis",
  savingThrowProficiencies: ["wis", "cha"],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: ["weapons simple"],
  startingEquipment: [
    [items.weapons.simple.melee.mace, items.weapons.martial.melee.warhammer],
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
    [items.adventuringGear.priestsPack, items.adventuringGear.adventurersPack],
    items.armor.shield,
    items.adventuringGear.holySymbol
  ]
};
const druid = {
  name: "Druid",
  description:
    "A priest of the Old Faith, wielding the powers of nature — moonlight and plant growth, fire and lightning — and adopting animal forms",
  hitDie: 8,
  primaryAbility: "wis",
  savingThrowProficiencies: ["int", "wis"],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: [
    "weapons simple melee club",
    "weapons simple melee dagger",
    "weapons simple ranged dart",
    "weapons simple melee javelin",
    "weapons martial melee mace",
    "weapons simple melee quarterstaff",
    "weapons martial melee scimitar",
    "weapons simple melee sickle",
    "weapons simple ranged sling",
    "weapons simple melee spear"
  ],
  startingEquipment: [
    [items.armor.shield, items.weapons.simple.any],
    [items.weapons.martial.melee.scimitar, items.weapons.simple.melee.any],
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
  primaryAbility: ["str", "dex"], /// OR
  savingThrowProficiencies: ["str", "con"],
  armorProficiencies: [
    "armor light",
    "armor medium",
    "armor heavy ",
    "armor shield"
  ],
  weaponProficiencies: ["weapons simple", "weapons martial"],
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
      [items.weapons.simple.melee.handaxe, items.weapons.simple.melee.handaxe]
    ],
    [items.adventuringGear.dungeoneersPack, items.adventuringGear.explorersPack]
  ]
};
const monk = {
  name: "Monk",
  description:
    "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
  hitDie: 8,
  primaryAbility: ["dex", "wis"], //// AND
  savingThrowProficiencies: ["str", "dex"],
  armorProficiencies: [],
  weaponProficiencies: ["weapons simple", "weapons martial melee shortsword"],
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
  primaryAbility: ["str", "cha"], /// AND
  savingThrowProficiencies: ["wis", "cha"],
  armorProficiencies: [
    "armor light",
    "armor medium",
    "armor heavy",
    "armor shield"
  ],
  weaponProficiencies: ["weapons simple", "weapons martial"],
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
    [items.adventuringGear.priestsPack, items.adventuringGear.explorersPack],
    items.armor.heavy.chainMail,
    items.adventuringGear.holySymbol
  ]
};
const ranger = {
  name: "Ranger",
  description:
    "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization",
  hitDie: 10,
  primaryAbility: ["dex", "wis"], /// AND
  savingThrowProficiencies: ["str", "dex"],
  armorProficiencies: ["armor light", "armor medium", "armor shield"],
  weaponProficiencies: ["weapons simple", "weapons martial"],
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
  primaryAbility: "dex",
  savingThrowProficiencies: ["dex", "int"],
  armorProficiencies: ["armor light"],
  weaponProficiencies: [
    "weapons simple",
    "weapons martial ranged handCrossbow",
    "weapons martial melee longsword",
    "weapons martial melee rapier",
    "weapons martial melee shortsword"
  ],
  startingEquipment: [
    [
      items.weapons.martial.melee.rapier,
      items.weapons.martial.melee.shortsword
    ],
    [
      [items.weapons.simple.ranged.shortbow, items.adventuringGear.quiver],
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
  primaryAbility: "cha",
  savingThrowProficiencies: ["con", "cha"],
  armorProficiencies: [],
  weaponProficiencies: [
    "weapons simple melee dagger",
    "weapons simple ranged dart",
    "weapons simple ranged sling",
    "weapons simple melee quarterstaff",
    "weapons simple ranged lightCrossbow"
  ],
  startingEquipment: [
    [
      [
        items.weapons.simple.ranged.lightCrossbow,
        items.adventuringGear.crossbowBoltCase
      ],
      items.weapons.simple.any
    ],
    [items.adventuringGear.componentPouch, items.adventuringGear.acaneFocus],
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
  primaryAbility: "cha",
  savingThrowProficiencies: ["wis", "cha"],
  armorProficiencies: ["armor light"],
  weaponProficiencies: ["weapons simple"],
  startingEquipment: [
    [
      [
        items.weapons.simple.ranged.lightCrossbow,
        items.adventuringGear.crossbowBoltCase
      ],
      items.weapons.simple.any
    ],
    [items.adventuringGear.componentPouch, items.adventuringGear.acaneFocus],
    [items.adventuringGear.scholarsPack, items.adventuringGear.dungeoneersPack],
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
  primaryAbility: "int",
  savingThrowProficiencies: ["int", "wis"],
  armorProficiencies: [],
  weaponProficiencies: [
    "weapons simple melee dagger",
    "weapons simple ranged dart",
    "weapons simple ranged sling",
    "weapons simple melee quarterstaff",
    "weapons simple ranged lightCrossbow"
  ],
  startingEquipment: [
    [
      items.weapons.simple.melee.quarterstaff,
      items.weapons.simple.melee.dagger
    ],
    [items.adventuringGear.componentPouch, items.adventuringGear.acaneFocus],
    [items.adventuringGear.scholarsPack, items.adventuringGear.explorersPack],
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
