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
* getPets should handle when bad existing pets are passed in and still add entries*