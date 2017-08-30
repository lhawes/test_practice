'use strict';

module.exports = {
    getPets: function(people, pets = []) {
        if (Array.isArray(people) || Array.isArray(pets)) {
            throw new Error('people or existingPets is not an array');
        }

        people.forEach((person) => {
            if (person.dog && person.dog.name) {
                pets.push(person.dog);
            }
            if (person.cat && person.cat.name) {
                pets.push(person.cat);
            }
        });
        return pets;
    }
};