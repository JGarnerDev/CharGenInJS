var character = {
  stats: undefined,
  clss: undefined,
  race: undefined,
  subrace: undefined,
  background: undefined,
  skills: undefined,
};
//  Procedure:
//      - Import and define the elements involved in character construction 
//          (a collection of stats, classes, races, skills, backgrounds, feats, spells, and items) 
//      - Randomly assign the values that are fundamental to the character
//          (abilities, class, race, subrace, and background)
//      - Randomly assign the circumstantial and/or derivative values nested in these fundamental values
//          (class features, racial features, subracial features, background features, skills (and how abilities improve them), 
//          feats (and their effects on character composition), spells, and equipment)
//      - Collect and organize, then represent this in an accessible way! 

//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

//  1. Stats, classes, races, skills, and backgrounds are imported...

const statsRoll = require("../stats generation/statsRoll");
const classes = require("../class generation/classesMain");
let races = require("../race generation/racesMain");
const backgrounds = require("../background generation/backgroundsMain");
const skills = require("../skills generation/skillsMain")

//      1a. 'Races' is reassigned to the value of it's own first index
//              (this is because races from outside the Player's Handbook will be options in the future)

races = races[0];

//----------------------------------------------------------------------------------------------------------------------------------

//  2. Stats ('Abilities' in Dungeons and Dragons) are the return value the 'statsRoll' function...

//      2a. Passing no argument through the 'statsRoll' function generates each stat from the sum of 'rolling' three six-sided dice.

//      2b. Passing a number ('x') as an argument generates each stat from the sum of rolling 'x' six-sided dice
//              with 'x-3' of the lowest dice deducted from that sum. x = 2 seems to work well.

character.stats = statsRoll();

//----------------------------------------------------------------------------------------------------------------------------------

//  3. One class is selected and assigned randomly ...

character.clss = classes[Math.floor(Math.random() * classes.length)];

//----------------------------------------------------------------------------------------------------------------------------------

//  4. Then one race is selected and assigned randomly ...

character.race = races[Math.floor(Math.random() * races.length)];

//      4a. If the race has no subraces object(s) to offer, one with only the "name" key with the value of "Standard" will be made

if (character.race.subraces.length === 0) {
  character.race.subraces.push({ name: "Standard" });
}

//----------------------------------------------------------------------------------------------------------------------------------

//  5. Then one subrace is selected and assigned randomly from the race's subrace(s) ...

character.subrace =
  character.race.subraces[
    Math.floor(Math.random() * character.race.subraces.length)
  ];

//----------------------------------------------------------------------------------------------------------------------------------

//  6. Then one background is selected and assigned randomly ...

character.background =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

//----------------------------------------------------------------------------------------------------------------------------------

//  7. The list of skills are made as a value of the character, since all characters may use any skill

character.skills = skills

//----------------------------------------------------------------------------------------------------------------------------------

// (To be continued! Test it out with variables in the console.log below)






console.log(character);
console.log(character.stats.join(' '));
console.log(character.race);
console.log(character.race.details);
console.log(character.subrace);
// console.log(character.race);
