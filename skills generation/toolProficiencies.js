function alchemistsSupplies() {
  return {
    name: "Alchemist's Supplies",
    desc:
      "You're proficient with alchemist's supplies. Your proficiency bonus is added to any ability check you make to create and manipulate ingredients to make something useful."
  };
}
function brewersSupplies() {
  return {
    name: "Brewer's Supplies",
    desc:
      "You're proficient with brewer's supplies. Your proficiency bonus is added to any ability check you make to brew fermented items."
  };
}
function calligraphersSupplies() {
  return {
    name: "Calligrapher's Supplies",
    desc:
      "You're proficient with calligrapher's supplies. Your proficiency bonus is added to any ability check you make to create and manipulate written materials."
  };
}
function carpentersTools() {
  return {
    name: "Carpenter's Tools",
    desc:
      "You're proficient with carpenter's tools. Your proficiency bonus is added to any ability check you make to create and manipulate wooden constructs."
  };
}
function cartographersTools() {
  return {
    name: "Cartographer's Tools",
    desc:
      "You're proficient with cartographer's tools. Your proficiency bonus is added to any ability check you make to create, manipulate, and interpret maps."
  };
}
function cobblersTools() {
  return {
    name: "Cobbler's Tools",
    desc:
      "You're proficient with cobbler's tools. Your proficiency bonus is added to any ability check you make to create and manipulate footware."
  };
}
function cooksUtensils() {
  return {
    name: "Cook's Utensils",
    desc:
      "You're proficient with cook's utensils. Your proficiency bonus is added to any ability check you make to create and manipulate ingredients for the purposes of eating."
  };
}
function glassblowersTools() {
  return {
    name: "Glassblower's Tools",
    desc:
      "You're proficient with glassblower's tools. Your proficiency bonus is added to any ability check you make to create and manipulate glass."
  };
}
function jewelersTools() {
  return {
    name: "Jeweler's Tools",
    desc:
      "You're proficient with jeweler's tools. Your proficiency bonus is added to any ability check you make while handling gems, crystals, rare stones, and jewelry."
  };
}
function leatherworkersTools() {
  return {
    name: "Leatherworker's Tools",
    desc:
      "You're proficient with leatherworker's tools. Your proficiency bonus is added to any ability check you make to create and manipulate leather."
  };
}
function masonsTools() {
  return {
    name: "Mason's Tools",
    desc:
      "You're proficient with mason's tools. Your proficiency bonus is added to any ability check you make while working with stone and brick."
  };
}
function paintersSupplies() {
  return {
    name: "Painter's Supplies",
    desc:
      "You're proficient with painter's supplies. Your proficiency bonus is added to any ability check you make to create and manipulate paint."
  };
}
function pottersTools() {
  return {
    name: "Potter's Tools",
    desc:
      "You're proficient with potter's tools. Your proficiency bonus is added to any ability check you make to create and manipulate pottery."
  };
}
function smithsTools() {
  return {
    name: "Smith's Tools",
    desc:
      "You're proficient with smith's tools. Your proficiency bonus is added to any ability check you make to create and manipulate metallic items."
  };
}
function tinkersTools() {
  return {
    name: "Tinker's Tools",
    desc:
      "You're proficient with tinker's tools. Your proficiency bonus is added to any ability check you make to create and repair gadgets, machinery, and general mechanisms."
  };
}
function weaversTools() {
  return {
    name: "Weaver's Tools",
    desc:
      "You're proficient with weaver's tools. Your proficiency bonus is added to any ability check you make to create and manipulate textiles."
  };
}
function woodcarversTools() {
  return {
    name: "Woodcarver's Tools",
    desc:
      "You're proficient with woodcarver's tools. Your proficiency bonus is added to any ability check you make while working raw wooden resources."
  };
}
function diceSet() {
  return {
    name: "Dice set",
    desc:
      "You're proficient with dice. Your proficiency bonus is added to any ability check you make while playing dice games."
  };
}
function playingCardSet() {
  return {
    name: "Playing card set",
    desc:
      "You're proficient with playing cards. Your proficiency bonus is added to any ability check you make while playing card games."
  };
}
function bagpipes() {
  return {
    name: "Bagpipes",
    desc:
      "You're proficient with playing the bagpipes. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function drum() {
  return {
    name: "Drum",
    desc:
      "You're proficient with playing the drum. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function dulcimer() {
  return {
    name: "Dulcimer",
    desc:
      "You're proficient with playing the dulcimer. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function flute() {
  return {
    name: "Flute",
    desc:
      "You're proficient with playing the flute. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function lute() {
  return {
    name: "Lute",
    desc:
      "You're proficient with playing the lute. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function lyre() {
  return {
    name: "Lyre",
    desc:
      "You're proficient with playing the lyre. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function horn() {
  return {
    name: "Horn",
    desc:
      "You're proficient with playing the horn. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function panFlute() {
  return {
    name: "Pan flute",
    desc:
      "You're proficient with playing the pan flute. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function shawm() {
  return {
    name: "Shawm",
    desc:
      "You're proficient with playing the shawm. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function viol() {
  return {
    name: "Viol",
    desc:
      "You're proficient with playing the viol. Your proficiency bonus is added to any ability check you make to play it."
  };
}
function navigatorsTools() {
  return {
    name: "Navigator's Tools",
    desc:
      "You can chart a ship's course and follow navigation charts. In addition, your proficiency bonus is added to any ability check you make to avoid getting lost at sea."
  };
}
function thievesTools() {
  return {
    name: "Thieve's Tools",
    desc:
      "You're proficient with thieve's tools. Your proficiency bonus is added to any ability check you make to disarm traps or open locks."
  };
}
function vehicles(x) {
  return {
    name: "Vehicles(" + x + ")",
    desc:
      "You're proficient with " +
      x +
      " vehicles. Your proficiency bonus is added to any ability check you make to operate or ride all " +
      x +
      " vehicles or mounts."
  };
}

const toolProficiency = {
  artisansTools: {
    alchemistsSupplies: alchemistsSupplies,
    brewersSupplies: brewersSupplies,
    calligraphersSupplies: calligraphersSupplies,
    carpentersTools: carpentersTools,
    cartographersTools: cartographersTools,
    cobblersTools: cobblersTools,
    cookUtensils: cookUtensils,
    glassblowersTools: glassblowersTools,
    jewelersTools: jewelersTools,
    leatherworkersTools: leatherworkersTools,
    masonsTools: masonsTools,
    paintersSupplies: paintersSupplies,
    pottersTools: pottersTools,
    smithsTools: smithsTools,
    tinkersTools: tinkersTools,
    weaversTools: weaversTools,
    woodcarversTools: woodcarversTools
  },
  gamingSets: { diceSet: diceSet, playingCardSet: playingCardSet },
  instruments: {
    drum: drum,
    bagpipes: bagpipes,
    dulcimer: dulcimer,
    flute: flute,
    lute: lute,
    lyre: lyre,
    horn: horn,
    panFlute: panFlute,
    shawm: shawm,
    viol: viol
  },
  navigatorsTools: navigatorsTools,
  thievesTools: thievesTools,
  vehicles: vehicles
};
