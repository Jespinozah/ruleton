const constants = require('./constants');



function getZone(element) {
  let temp= '';

  if (constants.AZONE.indexOf(element) >= 0) {
    temp = "A";
  }

  if (constants.BZONE.indexOf(element) >= 0) {
    temp = "B";
  }

  if (constants.CZONE.indexOf(element) >= 0) {
    temp = "C";
  }

  if (constants.DZONE.indexOf(element) >= 0) {
    temp = "D";
  }

  return temp;
}

module.exports.getZone = getZone;
