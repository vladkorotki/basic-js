const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'string' && parseFloat(sampleActivity) !== NaN && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= 15 && sampleActivity !== 'undefined' && sampleActivity !== undefined) {
    let A = Math.log2(MODERN_ACTIVITY / parseFloat(sampleActivity));
    let K = 0.693 / HALF_LIFE_PERIOD;
    let number = Math.ceil(A / K);

    return number;
  } else {
    return false;
    throw new CustomError('Not implemented');
  }

};


