'use strict';

module.exports = {
    happy: [
        {
            name: 'John Jacobs',
            age: '32',
            dog: {
                name: 'George',
                breed: 'Lab',
                age: 3
            },
            cat: {
                name: 'Fuzzball',
                breed: 'Siamese',
                age: 8
            }
        },
        {
            name: 'Cynthia Crow',
            age: '22',
            dog: null,
            cat: {
                name: 'Stray',
                breed: null,
                age: null
            }
        },
        {
            name: 'Roland Rubio',
            age: 77,
            dog: null,
            cat: null
        }
    ],
    namelessPets: [{
            name: 'John Jacobs',
            age: '32',
            dog: {
                name: null,
                breed: 'Lab',
                age: 3
            },
            cat: {
                name: null,
                breed: 'Siamese',
                age: 8
            }
    }],
    badFormatPets: [{
            name: 'John Jacobs',
            age: '32',
            dog: ['fred', 'fred2'],
            cat: {
                status: 'none'
            }
        }],
    badData: 'not an array of people objects',
};