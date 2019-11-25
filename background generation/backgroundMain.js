const acolyte = {
  name: "Acolyte",
  details: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power. Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. The Gods of the Multiverse section contains a sample pantheon, from the Forgotten Realms setting. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny. ",
  skillProficiencies: [skillProficiency.insight, skillProficiency.religion],
  toolProficiencies: undefined,
  languages: {1: languages.any2Lang},
  equipment: [{1: equipment.holySymbol}, {1: equipment.prayerBook}, {5: equipment.StickOfIncense}, {1: equipment.vestments},{1: equipment.commonClothes}, {15: equipment.gold} ],
  feature: { "Shelter of the Faithful": "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple." },
  suggestedCharacteristics: [
    { "Personality Trait": ["I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.", "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.", "I see omens in every event and action. The gods try to speak to us, we just need to listen.", "Nothing can shake my optimistic attitude.", "I quote (or misquote) sacred texts and proverbs in almost every situation.", "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.", "	I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.", "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."] },
    { "Ideal": ["Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)", "Charity. I always try to help those in need, no matter what the personal cost. (Good)", "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)", "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)", "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)", "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)"] },
    { "Bond": ["I would die to recover an ancient relic of my faith that was lost long ago.", "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.", "I owe my life to the priest who took me in when my parents died.", "	Everything I do is for the common people.", "I will do anything to protect the temple where I served.", "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."] },
    { "Flaw": ["I judge others harshly, and myself even more severely.", "I put too much trust in those who wield power within my temple’s hierarchy.", "My piety sometimes leads me to blindly trust those that profess faith in my god.", "I am inflexible in my thinking.", "I am suspicious of strangers and expect the worst of them.", "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."] }
  ],
  variant: undefined
};
const charlatan = {
  name: "Charlatan",
  details: undefined,
  skillProficiencies: [skillProficiency.deception, skillProficiency.sleightOfHand ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "False Identity": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const criminal = {
  name: "Criminal",
  details: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
  skillProficiencies: [skillProficiency.deception, skillProficiency.stealth ],
  toolProficiencies: [toolProficiency.gamingSet, toolProficiency.thievesTools ],
  languages: {1: languages.thievesCant},
  equipment: [{1:equipment.crowbar}, {1:equipment.darkCommonClothes}, {15: equipment.gold}],
  feature: { "Criminal Contact": "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you." },
  suggestedCharacteristics: [
    { "Personality Trait": ["I always have a plan for what to do when things go wrong.", "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.", "The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.", "I would rather make a new friend than a new enemy.", "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.", "I don’t pay attention to the risks in a situation. Never tell me the odds.", "The best way to get me to do something is to tell me I can’t do it.", "I blow up at the slightest insult."] },
    { "Ideal": ["Honor. I don’t steal from others in the trade. (Lawful)", "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)", "Charity. I steal from the wealthy so that I can help people in need. (Good)", "Greed. I will do whatever it takes to become wealthy. (Evil)", "People. I’m loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)", "Redemption. There’s a spark of good in everyone. (Good)"] },
    { "Bond": ["I’m trying to pay off an old debt I owe to a generous benefactor.", "My ill-gotten gains go to support my family", "Something important was taken from me, and I aim to steal it back.", "I will become the greatest thief that ever lived.", "I’m guilty of a terrible crime. I hope I can redeem myself for it.", "Someone I loved died because of a mistake I made. That will never happen again."] },
    { "Flaw": [ "When I see something valuable, I can’t think about anything but how to steal it.", "When faced with a choice between money and my friends, I usually choose the money.", "If there’s a plan, I’ll forget it. If I don’t forget it, I’ll ignore it.", "I have a “tell” that reveals when I’m lying.", "I turn tail and run when things look bad.", "An innocent person is in prison for a crime that I committed. I’m okay with that."] }
  ],
  variant: { "Spy": "Although your capabilities are not much different from those of a burglar or smuggler, you learned and practiced them in a very different context: as an espionage agent. You might have been an officially sanctioned agent of the crown, or perhaps you sold the secrets you uncovered to the highest bidder." }
};
const entertainer = {
  name: "Entertainer",
  details: undefined,
  skillProficiencies: [skillProficiency.acrobatics, skillProficiency.performance ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "By Popular Demand": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const folkHero = {
  name: "FolkHero",
  details: "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
  skillProficiencies: [skillProficiency.animalHandling, skillProficiency.survival ],
  toolProficiencies: [toolProficiency.artisansTools, toolProficiency.vehiclesLand ],
  languages: {1: languages.a},
  equipment: [{1:equipment.artisansTools}, {1:equipment.shovel}, {1:equipment.ironPot}, {1:equipment.commonClothes}, {10: equipment.gold}],
  feature: { "Rustic Hospitality": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const gladiator = {
  name: "Gladiator",
  details: undefined,
  skillProficiencies: [skillProficiency.acrobatics, skillProficiency.performance ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "By Popular Demand": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const guildArtisan = {
  name: "Guild Artisan/Merchant",
  details: undefined,
  skillProficiencies: [skillProficiency.insight, skillProficiency.persuasion ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Guild Membership": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const hermit = {
  name: "Hermit",
  details: undefined,
  skillProficiencies: [skillProficiency.medicine, skillProficiency.religion ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Discovery": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const knight = {
  name: "Knight",
  details: undefined,
  skillProficiencies: [skillProficiency.history, skillProficiency.persuasion ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Retainers": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const noble = {
  name: "Noble",
  details: undefined,
  skillProficiencies: [skillProficiency.history, skillProficiency.persuasion ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Position of Privilege": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const outlander = {
  name: "Outlander",
  details: undefined,
  skillProficiencies: [skillProficiency.athletics, skillProficiency.survival ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Wanderer": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const pirate = {
  name: "Pirate",
  details: undefined,
  skillProficiencies: [skillProficiency.athletics, skillProficiency.perception ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Bad Reputation": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const sage = {
  name: "Sage",
  details: undefined,
  skillProficiencies: [skillProficiency.arcana, skillProficiency.history ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Researcher": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const sailor = {
  name: "Sailor",
  details: undefined,
  skillProficiencies: [skillProficiency.athletics, skillProficiency.perception],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Ship's Passage": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const soldier = {
  name: "Soldier",
  details: undefined,
  skillProficiencies: [skillProficiency.athletics, skillProficiency.intimidation ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "Military Rank": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};
const urchin = {
  name: "Urchin",
  details: undefined,
  skillProficiencies: [skillProficiency.sleightOfHand, skillProficiency.stealth ],
  toolProficiencies: [toolProficiency.a, toolProficiency.a ],
  languages: {1: languages.a},
  equipment: [{1:equipment.a}, {1:equipment.a}, {15: equipment.gold}],
  feature: { "City Secrets": undefined },
  suggestedCharacteristics: [
    { "Personality Trait": [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Ideal": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Bond": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] },
    { "Flaw": [undefined, undefined, undefined, undefined, undefined, undefined, undefined] }
  ],
  variant: { undefined: undefined }
};

const background = {
  acolyte: acolyte,
  charlatan: charlatan,
  criminal: criminal,
  entertainer: entertainer,
  folkHero: folkHero,
  gladiator: gladiator,
  guildArtisan: guildArtisan,
  hermit: hermit,
  knight: knight,
  noble: noble,
  outlander: outlander,
  pirate: pirate,
  sage: sage,
  sailor: sailor,
  soldier: soldier,
  urchin: urchin
};

module.exports = background;
