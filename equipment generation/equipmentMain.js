var backgroundEquipment = require("../main/characterGen");

var characterEquipment = {};

function copper(x) {
  equipment.copper += x;
}
function silver(x) {
  equipment.silver += x;
}
function electrum(x) {
  equipment.electrum += x;
}
function gold(x) {
  equipment.gold += x;
}
function platinum(x) {
  equipment.platinum += x;
}

const equipment = {
  currency: {
    copper: copper,
    silver: silver,
    electrum: electrum,
    gold: gold,
    platinum: platinum
  }
};

module.exports = equipment;
