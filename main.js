// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

function makeComputer(type, color, weight, price) {
  return {
    type: type,
    color: color,
    weight: weight,
    price: price
  }
}

var computers = [];
var laptop = makeComputer('Laptop', 'Black', '5kg', 3700);
var desktop = makeComputer('Desktop', 'Black', '10kg', 2800);
computers.push(laptop, desktop);

/**
  ==== Solution description ====
  Computers have different attributes like type, color, weight, and price.
  @var computers is used as a container to hold the two objects (laptop and desktop).
  Using the factory function @function makeComputer(), two objects were created
  and pushed to the @var computers array.  
*/

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  return 'Type: ' + computer['type'] + '\n' +
         'Color: ' + computer['color'] + '\n' +
         'Weight: ' + computer['weight'] + '\n' +
         'Price: $'+ computer['price'];
}

/**
  ==== Solution description ====
  @function displayComputer(), accepts a single parameter (Object) and returns
  a String that presents the Object properties, which in this case the computer.   
*/


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

function uppercaseAll(arrayOfStrings) {
    if (Array.isArray(arrayOfStrings)) {
        return map(arrayOfStrings, function(str, index) {
            return str.toUpperCase();
        });
    }
    return 'Invalid input';
}

/**
  ==== Solution description ====
  @function uppercaseAll() accepts a single @param arrayOfStrings and
  checks if its an array or not. In case its not an array it will return
  an invalid input message, else it will utilize the @function map(coll, function)
  to create a new array, iterate through the strings of @param coll and use @param
  function to modify the values and push them to the new array.    
*/


//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
    if (Array.isArray(arrayOfObjects)) {
        return filter(arrayOfObjects, function(value, key) {
            if (value.population > 500000000) {
                return value;
            }
        });
    }
    return 'Invalid input';
}

/**
  ==== Solution description ====
  @function highestPopulation() accepts a single @param arrayOfObjects and
  checks if its an array or not. In case its not an array it will return
  an invalid input message, else it will utilize the @function filter(coll, predicate)
  to create a new array, iterate through the objects inside @param coll and use @param
  predicate to filter the values and push the ones that are valied to the new array.    
*/

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

function halveAll(numbers) {
    if (Array.isArray(numbers)) {
        return map(numbers, function(number, index) {
            return number / 2;
        })
    }
    return 'Invalid input';
}

/**
  ==== Solution description ====
  @function halveAll() accepts a single @param numbers and
  checks if its an array or not. In case its not an array it will return
  an invalid input message, else it will utilize the @function map(coll, function)
  to create a new array, iterate through the values inside @param coll and use @param
  function to modify (in this case divide the value by 2) the values and push the
  ones that are valied to the new array.    
*/

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/

function values(obj) {
  if(typeof obj === 'object'){
    var output = [];
    each(obj, function(value, key) {
      output.push(value);
    });

    return output;
  }
  return 'Invalid input';
}

/**
  ==== Solution description ====
  @function values() accepts a single @param objct and
  checks if its an object or not. In case its not an object it will return
  an invalid input message, else it will create a new array for the output, 
  utilize the @function each(coll, function) iterate through the values inside
  @param coll and use @param function to push values to the output array.    
*/

//Good Luck :))
