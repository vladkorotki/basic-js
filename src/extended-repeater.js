const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // let repeatString = (options.repeatTimes) ? options.repeatTimes : 1;
  // let repeatSubString = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  // let string = (typeof str === 'string') ? str : toString(str);
  // let subString = (typeof options.addition === 'string') ? options.addition : toString(options.addition);

  // let subStringSeparator = (options.additionSeparator) ? options.additionSeparator : '|';
  // let stringSeparator = (options.separator) ? options.separator : '+';

  let subString = '';

  let string = '';
  options.additionSeparator = (options.additionSeparator) ? options.additionSeparator : '|';
  options.separator = (options.separator) ? options.separator : '+';
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes > 0) {
      let k = options.addition + options.additionSeparator;
      for (i = 0; i < options.additionRepeatTimes; i++) {
        if (i < options.additionRepeatTimes - 1) {
          subString += k;
        } else {
          subString += options.addition;
        }
      }
    } else {
      subString = options.addition;
    }
  }



  str = str + subString;
  if (options.repeatTimes > 0) {

    let s = str + options.separator;
    for (j = 0; j < options.repeatTimes; j++) {
      if (j < options.repeatTimes - 1) {
        string += s;
      } else {
        string += str;
      }
    }
  } else {
    string = str;
  }

  return string;
};
