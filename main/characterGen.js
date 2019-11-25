var statsRoll = require("../stats generation/statsRoll");
// Character Stats Generator. Function - statsRoll(x). Argument x is an optional number value that, if passed, will roll 3+x six-sided dice
//      and remove the x smallest dice rolls before returning the sum. If no argument is passed, each stat will be the sum of 3 rolls
//      of six-sided dice.

var classes = require("../class generation/classMain");
// character class (object; a collection of properties associated with a randomly selected class)

let charStats = statsRoll();

let charClass = classes[Math.floor(Math.random() * 12)];

let character = [charStats, charClass];

console.log("Stats: " + character[0].join(" ") + "       Class: " + character[1].name + " (" + character[1].description + ")")
