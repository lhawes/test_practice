'use strict';

module.exports = {
    getPets: function (people, pets) {
        people.forEach((person) => {
            if (person.dog !== null) {
                pets.push(person.dog);
            }
            if (person.cat !== null) {
                pets.push(person.cat);
            }
        });
        return pets;
    }
};