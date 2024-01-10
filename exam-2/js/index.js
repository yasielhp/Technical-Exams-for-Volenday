/**
* NAME: Juan Dela Cruz
*/

//Write a function calcAvgHeight which calculates average person height. The function takes only one argument, which is an object whose properties are instances of a person class created with the following function:

function Person(h, w) {
  this.height = h;
  this.weight = w;
}

//Given an object data, return the calculated average height. If there are no persons in the data object, return null and console the output.

/**
For example, the following call should return (174+190)/2=182:

calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});
*/

function calcAvgHeight(data) {

  if (Object.keys(data).length === 0) {
    console.log("There are no people in the data.");
    return null;
  }

  let totalHeight = 0;
  let count = 0;

  for (let person in data) {
    totalHeight += data[person].height;
    count++;
  }

  return totalHeight / count;
}