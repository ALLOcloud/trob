/* eslint-disable no-console */
const trob = require('../lib').default;

const user = {
  id: 1,
  name: 'John'
};

const users = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Dan'
  }
];

const addFamilyName = (obj) => {
  const u = obj;
  u.name = `${u.name} Doe`;
  return u;
};

const trobdUser = trob(user, addFamilyName);
const trobdUsers = trob(users, addFamilyName);

console.log("trob'd user:", trobdUser);
console.log("trob'd users:", trobdUsers);
