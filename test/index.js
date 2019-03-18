import { assert } from 'chai';
import trob from '../src';

const fixtures = {
  user: {
    id: 1,
    name: 'John'
  },
  users: [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Dan'
    }
  ]
};

const addFamilyName = u => ({
  ...u,
  name: `${u.name} Doe`
});

describe('Safe Function Transform - trob', () => {
  it('should transform an object', () => {
    const result = trob(fixtures.user, addFamilyName);

    assert(result.name === 'John Doe', 'Return value is invalid.');
  });

  it('should transform an array of objects', () => {
    const result = trob(fixtures.users, addFamilyName);

    assert(Array.isArray(result), 'Return value should be an array.');
    assert(result[0].name === 'John Doe', 'Return value is invalid.');
    assert(result[1].name === 'Dan Doe', 'Return value is invalid.');
  });
});
