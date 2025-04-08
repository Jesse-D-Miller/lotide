# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jessemiller/lotide`

**Require it:**

`const _ = require('@jessemiller/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: takes an array and returns the 0th element.
- `tail(...)`: takes an array and returns all elements after the 0th. 
- `middle(...)`: takes an array and returns middle element(s).
- `assertArraysEqual(...)`: takes two arrays and asserts if they are equal or not.
- `assertEqual(...)`: takes two primitive values and checks if they are strictly equal.
- `assertObjectsEqual(...)`: checks objects (shallow check) and asserts if they are equal or not.
- `countLetters(...)`: takes a string of letters and returns the number of each letter in the string.
- `countOnly(...)`: takes an array and an object. counts the number of elements in the array associated with true values in the passed object.
- `eqArrays(...)`: takes 2 arrays and checks if they are strictly equal.
- `findKey(...)`: takes an object and a callback function and returns the first property in the object which meets the callback function criteria.
- `findKeyByValue(...)`: takes an object and a value as an input and returns the first key in the object with that value
- `letterPositions(...)`: takes a string as an input and outputs an object with key value pairs of the letters and indices of the letters
- `map(...)`:map function takes an array and a callback function as arguments. It returns a new array that contains the results of calling the callback function on each element of the original array.
- `takeUntil(...)`: takes an array as an arguement and a callback function. returns an array of all elements up UNIl (non-inclusive) the callback functions emement is encountered in the array.
- `without(...)`: takes in source array and array of items to remove.
- `eqObjects(...)`: checks if two objects are equal.