/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    array.forEach(callback);
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var totalValue = 0;

    // .. do something with each element of args
    args.forEach(function(value, idx, list) {
      totalValue += args[idx];
    });

    return totalValue;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var addedNum = 0;
    var averageNum;

    // .. do something with each element of args
    args.forEach(function(value, idx, list) {
      addedNum += value;

      if (idx === (list.length - 1)) {
         averageNum = addedNum / (list.length);
      }
    });

    return averageNum;

}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var maxNum = 0;

    // .. do something with each element of args
    args.forEach(function(value,idx,list) {
      if (value > maxNum) {
         maxNum = value;
      }
    });

    return maxNum;

}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var longest = "";

    // .. do something with each element of args
    args.forEach(function(value,idx,list) {
      if (value.length > longest.length) {
         longest = value;
      }
    });

    return longest;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

function sortFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.sort();
}

// .concat()

function concatFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.concat("Ayyy");
}

// .indexOf()

function indexOfFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.indexOf("Ayyy");
}

console.assert(indexOfFunction("Words", "Are", "Awesome") === -1);

// .split()

function splitFunction(string){
  // parse arguments into an array
  return string.split(",");
}

// .join()

function joinFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.join(" ");
}

console.assert(joinFunction("Words", "Are", "Awesome") === "Words Are Awesome");

// .pop()

function popFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.pop();
}

console.assert(popFunction("Words", "Are", "Awesome") === "Awesome");

// .push()

function pushFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.push("Cool");
}

console.assert(pushFunction("Words", "Are", "Awesome") === 4);

// .slice()

function sliceFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args;
}

// .splice()
function spliceFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.splice(2, 1);
}

// .shift()

function shiftFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.shift();
}

console.assert(shiftFunction("Words", "Are", "Really", "Fun") === "Words");

// .unshift()

function unshiftFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.unshift("Hey, ");
}

console.assert(unshiftFunction("Words", "Are", "Really", "Fun") === 5);

// .filter()

function biggerThanTen(value) {
  return value >= 10;
}

function filterFunction(){
  // parse arguments into an array
  var args = [].slice.call(arguments);
  return args.filter(biggerThanTen);
}

console.assert(filterFunction(1,4,17,12,20,8).length === 3);

// .map()

var testNums = [1.4, 5.9, 8.7];
function floors(nums) {
  return nums.map(Math.floor);
}
