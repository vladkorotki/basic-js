const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');

  let turns = (2 ** disksNumber) - 1;
  let turnsinSecond = turnsSpeed / 3600;
  let seconds = Math.floor(turns / turnsinSecond);

  return {
    turns,
    seconds,
  };

};
