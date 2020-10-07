const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let teamName = '';
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        for (let char of members[i]) {
          if (char !== ' ') {
            teamName += char.toUpperCase();
            break;
          } else {
            continue;
          }
        }
      } else {
        continue;
      }
    }
    teamName = teamName.split('').sort();
    teamName = teamName.join('');
    return teamName;
  } else {
    return false;
  }
};
