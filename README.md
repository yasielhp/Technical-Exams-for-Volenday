# Technical exams

This repository contains two technical exercises in JavaScript. The first focuses on manipulating and accessing data in an object, and the second on calculating the average height from a set of data.

## Technical Exercise 1: Data Access on an Object
### Description
This exercise involves the creation of a `displayDetails` function that accepts an `actorInformation` object and a key as arguments. The function returns the value corresponding to the provided key of the object.

### Usage
To use this function, provide the `actorInformation` object with the `firstName`, `lastName`, and `movies` properties, followed by the key you wish to query.

````javascript
const actorInformation = {
  firstName: "Robert",
  lastName: "Downey",
  movies: [
    { name: "Iron Man 1", characterName: "Tony Stark" },
    // ... more movies
  ]
};

const firstName = displayDetails(actorInformation, 'firstName');
console.log(firstName); // Expected output: "Robert".
````

## Exam 2: Function to calculate the average height.

### Description
This exercise implements a function calcAvgHeight that calculates the average height of a set of persons. Each person is represented as an instance of a Person class, and the function handles an object containing multiple instances of this class.

### Usage
To use calcAvgHeight, first define the object with the persons and then call the function with this object as argument.

````javascript
const personas = {
  Matt: { altura: 174, peso: 69 },
  Jason: { altura: 190, peso: 103 }
};

const averageHeight = calcAvgHeight(personas);
console.log(averageHeight); // Expected output: 182
````

### Autor
Yasiel Hernández Portal - [@yasielhp](https://github.com/yasielhp/)