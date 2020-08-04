'use strict';

import users from './users.js';

const getSortedUniqueSkills = users => {
  let uniqueSkills = [];
  const allSkills = users.reduce(function (userSkills, user) {
    userSkills.push(...user.skills);

    return userSkills;
  }, []);

  allSkills.forEach(skill => {
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
  });
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
