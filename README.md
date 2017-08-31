## Prompt that you will be creating the tests for!

Create a function called getPets that takes an array of people objects, and adds their dogs or cats if they have names to an array. Should also be able to take in an existing array of pets and add the new pets to them. If a person does not have a dog or cat, the value will be null.

```js
// people schema:
{
    name: 'John Jacobs',
    age: '32',
    dog: {},
    cat: null
}

// dog or cat schema
cat: {
    name: 'Fuzzball',
    breed: 'Siamese',
    age: 8
}
```

## What you'll be doing:
Two mock apps with a functon each have been created. One is the happy path app and function, everything should be fine! The other is a testable function that is more modular and a bit more robust. The *tests_answers* directory contains code to test both the happy path function and the testable function. You can run `npm run test` to see how your tests hold up or `npm run answers` to see the test results the answers produce for the happy path and testable functions.

React and Angular testing is not included in this practice repo

## Some ideas of what we should test our getPets on

* getPets should be a function
* getPets should throw without people argument
* getPets should return an array
* getPets should return an array with no items if nothing is passed in
* getPets should handle bad data
* getPets should add new pets to existing pet array
* getPets should not mutate passed arrays
* getPets should handle pets without names and not add entries
* getPets should handle badly formatted pets and not add entries
* getPets should handle badly formated people and not add entries
* getPets should keep existing pets in result array
* getPets should handle when existing pets aren't passed in
* getPets should handle when bad existing pets are passed in and still add entries