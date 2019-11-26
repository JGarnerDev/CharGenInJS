const statsRoll = require("../stats generation/statsRoll");
const classes = require("../class generation/classesMain");
let races = require("../race generation/racesMain");
races = races[0];

let stats = statsRoll(3);
let clss = classes[Math.floor(Math.random() * classes.length)];
let race = races[Math.floor(Math.random() * races.length)];

race.subrace = race.subraces[Math.floor(Math.random() * race.subraces.length)];
if (race.subrace === undefined){race.subrace = { name: "Standard" }}

let character = { stats, clss, race };




console.log(character);
