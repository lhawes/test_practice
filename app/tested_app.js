'use strict';

const owners = require('../data').happy;
const oldPets = [{
    name: 'Alexander',
    breed: 'Persian',
    age: 4
}];

const getPets = require('testable_function').getPets;

console.log(getPets(owners, oldPets));