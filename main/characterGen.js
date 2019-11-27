

// First: stats, classes, races, and backgrounds are imported...  

const statsRoll = require("../stats generation/statsRoll");
const classes = require("../class generation/classesMain");
let races = require("../race generation/racesMain");
races = races[0];
const backgrounds = require("../background generation/backgroundsMain");

// ... stats ('Abilities' in Dungeons and Dragons) are then generated...

let stats = statsRoll(3);

// ... then one class is selected randomly ...

let clss = classes[Math.floor(Math.random() * classes.length)];

// ... then one race is selected randomly ...

let race = races[Math.floor(Math.random() * races.length)];

// ... if the race has no subraces to offer, it will be assigned as "Standard" ...

if (typeof race.subraces !== 'object'){race.subraces = { name: "Standard" }}

// ... then one subrace is selected randomly ...

race.subrace = race.subraces[Math.floor(Math.random() * race.subraces.length)];


// ... then one background is selected randomly ...


let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];



console.log(Object.values(clss));







