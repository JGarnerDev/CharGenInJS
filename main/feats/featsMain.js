function alert(){
    return {
        name: "Alert",
        desc: "You are always on the lookout for danger.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function athlete(){
    return {
        name: "Athlete",
        desc: "You have undergone extensive physical training.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function actor(){
    return {
        name: "Actor",
        desc: "You are skilled at mimicry and dramatics.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function charger(){
    return {
        name: "Charger",
        desc: "Charging the enemy is one of your favored tactics.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function crossbowExpert(){
    return {
        name: "Crossbow Expert",
        desc: "You have become excedingly deadly with the crossbow.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function defensiveDuelist(){
    return {
        name: "Defensive Duelist",
        desc: "You have learned the art of parrying.",
        prerequisites: [dex(13)],
        benefits:[[,],[,]]

    }
}
function dualWielder(){
    return {
        name: "Dual Wielder",
        desc: "You master fighting with two weapons.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function dungeonDelver(){
    return {
        name: "Dungeon Delver",
        desc: "You become alert to the hidden traps and secret doors found in many dungeons.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function durable(){
    return {
        name: "Durable",
        desc: "You have become hardy and resilient.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function elementalAdept(){
    return {
        name: "Elemental Adept",
        desc: "Your command over an elemental magic is exceptional.",
        prerequisites: [spellcaster],
        benefits:[[,],[,]]

    }
}
function grappler(){
    return {
        name: "Grappler",
        desc: "You’ve developed the skills necessary to hold your own in close-quarters grappling.",
        prerequisites: [str(13)],
        benefits:[[,],[,]]

    }
}
function greatWeaponMaster(){
    return {
        name: "Great Weapon Master",
        desc: "You’ve learned to put the weight of a weapon to you advantage, letting its momentum em power your strikes.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function healer(){
    return {
        name: "Healer",
        desc: "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function heavilyArmored(){
    return {
        name: "Heavily Armored",
        desc: "You have trained to master the use of heavy armor.",
        prerequisites: [mediumArmorProficiency],
        benefits:[[,],[,]]

    }
}
function heavyArmorMaster(){
    return {
        name: "Heavy Armor Master",
        desc: "You can use your arm or to deflect strikes that would kill others.",
        prerequisites: [heavyArmorProficiency],
        benefits:[[,],[,]]

    }
}
function inspiringLeader(){
    return {
        name: "Inspiring Leader",
        desc: "You are a natural leader, and those by your side grow stronger in your presence.",
        prerequisites: [cha(13)],
        benefits:[[,],[,]]

    }
}
function keenMind(){
    return {
        name: "Keen Mind",
        desc: "You have a mind that can track time, direction, and detail with uncanny precision.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function lightlyArmored(){
    return {
        name: "Lightly Armored",
        desc: "You have trained to master the use of light armor.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function linguist(){
    return {
        name: "Linguist",
        desc: "You have studied languages and codes.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function lucky(){
    return {
        name: "Lucky",
        desc: "You have inexplicable luck that seems to kick in at just the right moment.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function mageSlayer(){
    return {
        name: "Mage Slayer",
        desc: "You have practiced techniques useful in melee combat against spellcasters.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function magicInitiate(){
    return {
        name: "Magic Initiate",
        desc: "You have learned fundamental magic of a magical order.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function martialAdept(){
    return {
        name: "Martial Adept",
        desc: "You have martial training that allows you to perform special com bat maneuvers. ",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function mediumArmorMaster(){
    return {
        name: "Medium Armor Master",
        desc: "You have practiced moving in medium armor",
        prerequisites: [mediumArmorProficiency],
        benefits:[[,],[,]]

    }
}
function mobile(){
    return {
        name: "Mobile",
        desc: "You are exceptionally speedy and agile.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function moderatelyArmored(){
    return {
        name: "Moderately Armored",
        desc: "You have trained to master the use of medium armor and shields.",
        prerequisites: [lightArmorProficiency],
        benefits:[[,],[,]]

    }
}
function mountedCombatant(){
    return {
        name: "Mounted Combatant",
        desc: "You are a dangerous foe to face while mounted.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function observant(){
    return {
        name: "Observant",
        desc: "You are quick to notice details of your environment.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function polearmMaster(){
    return {
        name: "Polearm Master",
        desc: "You can keep your enemies at bay with reach weapons.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function resilient(){
    return {
        name: "Resilient",
        desc: "You have strengthened yourself in an ability.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function ritualCaster(){
    return {
        name: "Ritual Caster",
        desc: "You have learned a number of spells that you can cast as rituals.",
        prerequisites: [int(13), wis(13)], //// OR 
        benefits:[[,],[,]]

    }
}
function savageAttacker(){
    return {
        name: "Savage Attacker",
        desc: "Your attacks have an uncanny ability to wound.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function sentinel(){
    return {
        name: "Sentinel",
        desc: "You have mastered techniques to take advantage of every drop in any enemy’s guard.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function sharpshooter(){
    return {
        name: "Sharpshooter",
        desc: "You have mastered ranged weapons and can make shots that others find im possible.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function shieldMaster(){
    return {
        name: "Shield Master",
        desc: "You use shields not just for protection but also for offense.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function skilled(){
    return {
        name: "Skilled",
        desc: "You are more skilled than most.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function skulker(){
    return {
        name: "Skulker",
        desc: "You are expert at slinking through shadows.",
        prerequisites: [dex(13)],
        benefits:[[,],[,]]

    }
}
function spellSniper(){
    return {
        name: "Spell Sniper",
        desc: "You have learned techniques to enhance your attacks with certain kinds of spells.",
        prerequisites: [spellcaster],
        benefits:[[,],[,]]

    }
}
function tavernBrawler(){
    return {
        name: "Tavern Brawler",
        desc: "You are accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function tough(){
    return {
        name: "Tough",
        desc: "You are unusually hard to take down.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}
function warCaster(){
    return {
        name: "War Caster",
        desc: "You have practiced casting spells in the midst of combat.",
        prerequisites: [spellcaster],
        benefits:[[,],[,]]

    }
}
function weaponMaster(){
    return {
        name: "Weapon Master",
        desc: "You have practiced extensively with a variety of weapons.",
        prerequisites: [],
        benefits:[[,],[,]]

    }
}

const feats = {
  alert: alert,
  athlete: athlete,
  actor: actor,
  charger: charger,
  crossbowExpert: crossbowExpert,
  defensiveDuelist: defensiveDuelist,
  dualWielder: dualWielder,
  dungeonDelver: dungeonDelver,
  durable: durable,
  elementalAdept: elementalAdept,
  grappler: grappler,
  greatWeaponMaster: greatWeaponMaster,
  healer: healer,
  heavilyArmored: heavilyArmored,
  heavyArmorMaster: heavyArmorMaster,
  inspiringLeader: inspiringLeader,
  keenMind: keenMind,
  lightlyArmored: lightlyArmored,
  linguist: linguist,
  lucky: lucky,
  mageSlayer: mageSlayer,
  magicInitiate: magicInitiate,
  martialAdept: martialAdept,
  mediumArmorMaster: mediumArmorMaster,
  mobile: mobile,
  moderatelyArmored: moderatelyArmored,
  mountedCombatant: mountedCombatant,
  observant: observant,
  polearmMaster: polearmMaster,
  resilient: resilient,
  ritualCaster: ritualCaster,
  savageAttacker: savageAttacker,
  sentinel: sentinel,
  sharpshooter: sharpshooter,
  shieldMaster: shieldMaster,
  skilled: skilled,
  skulker: skulker,
  spellSniper: spellSniper,
  tavernBrawler: tavernBrawler,
  tough: tough,
  warCaster: warCaster,
  weaponMaster: weaponMaster
};
