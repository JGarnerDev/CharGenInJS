function copper(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { copper: q };
}
function silver(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { silver: q };
}
function electrum(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { electrum: q };
}
function gold(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { gold: q };
}
function platinum(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { platinum: q };
}

var currency = {
  copper: copper,
  silver: silver,
  electrum: electrum,
  gold: gold,
  platinum: platinum
};

module.exports = currency;
