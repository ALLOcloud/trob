# Safe Function Transform (aka. trob)

[![npm version](https://badge.fury.io/js/trob.svg)](https://badge.fury.io/js/trob) [![Build Status](https://travis-ci.org/allocloud/trob.svg?branch=master)](https://travis-ci.org/allocloud/trob) [![dependencies Status](https://david-dm.org/allocloud/trob/status.svg)](https://david-dm.org/allocloud/trob) [![devDependencies Status](https://david-dm.org/allocloud/trob/dev-status.svg)](https://david-dm.org/allocloud/trob?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A small utility function to run a function on either an array of objects or an object without knowing the argument type before.

This is needed for us because we run almost the same logic on both our `user` and `users` GraphQL's resolvers and thus we can leverage code re-use easily without having to write the same `trob` logic every time.

## Installation

Simply run the following to add `trob` into your project:

```bash
$ yarn add trob

# Or if you prefer NPM:
$ npm install trob
```

## Example

Imagine you have either an user object, or an array of user objects. Now you want to run the exactly same function on them because they share the same interface. For example, you'd like to update the user's name by adding its last name. Here's where `trob` comes to the rescue.

```js
// ES6
import trob from "trob";

// ES5
const trob = require("trob");

// CommonJS
const trob = require("trob").default;

// Fixtures
const user = { id: 1, firstName: "John" };
const users = [...user, { id: 2, firstName: "Dan" }];

// Transform function
const addLastName = u => ({ ...u, lastName: "Doe", fullName: `${u.name} Doe` });

// NOW LET'S TROB DO THE MAGIC.
const trobdUser = trob(user, addLastName);
const trobdUsers = trob(users, addLastName);

// Results: It rocks! :3
assert(trobdUser.lastName === "Doe");
assert(trobdUser.fullName === "John Doe");
assert(trobdUsers[1].lastName === "Doe");
assert(trobdUsers[1].fullName === "Dan Doe");
```

See the [`examples/`](./examples) folder for more examples.

## License

MIT © OpenS SPRL, ALLOcloud
