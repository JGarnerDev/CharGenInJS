const statsRoll = require("../stats generation/statsRoll");
// Character Stats Generator. Function - statsRoll(x). Argument x is an optional number value that, if passed, will roll 3+x six-sided dice
//      and remove the x smallest dice rolls before returning the sum. If no argument is passed, each stat will be the sum of 3 rolls
//      of six-sided dice.

const classes = require("../class generation/classesMain");
// character class (object; a collection of properties associated with a randomly selected class)

let races = require("../race generation/racesMain");
races = races[0];

let stats = statsRoll(3);

let clss = classes[Math.floor(Math.random() * classes.length)];

let race = races[Math.floor(Math.random() * races.length)];

race.subrace = race.subraces[Math.floor(Math.random() * race.subraces.length)];
if (race.subrace === undefined){race.subrace = { name: "Standard" }}

let character = { stats, clss, race };



// console.log("STATS: ", character.stats.join(" "));
// console.log("CLASS: ", Object.values(character.clss).join(" / "));
// console.log("RACE: ", character.race.race + " (" + character.race.subrace.name + ")");

console.log(Object.values(character.clss).toString());
