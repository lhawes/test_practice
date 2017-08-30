'use strict';

const owners = require('../data').happy;
const oldPets = [{
    name: 'Alexander',
    breed: 'Persian',
    age: 4
}];

function getPets (people, existingPets) {

    people.forEach((person) => {
        if (person.dog === null) {
            existingPets.push(person.dog);
        }
        if (person.cat === null) {
            existingPets.push(person.cat);
        }
    });
    return existingPets;
}

console.log(getPets(owners, oldPets));