function grumpus () {
    console.log('leave me alone');
    console.log('leave me alone');
    console.log('leave me alone');
}

function greet(person) {
    console.log(`Hello, ${person}`)
}

function rant (message) {
    console.log((`${message}`).toUpperCase());
    console.log((`${message}`).toUpperCase());
    console.log((`${message}`).toUpperCase());
}

// a simple function that accepts two arguments
// takes the first arguement and repeats it as many times as the second argument 
function repeat (input, numTimes) {
    let result = '';
    for (i = 0; i < numTimes; i++) {
        result += input;
    }
    console.log(result)
}

function isSnakeEyes (num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log('Snake Eyes!')
    }else {
        console.log('Not Snake Eyes!')
    }
}

// a simple function (multiply) which accepts two numerical arguments 
// and returns their product.
function multiply (num1, num2) {
    return num1 * num2;
}

function isShortsWeather (temparature) {
    if (temparature >= 75) {
        return true;
    }else {
        return false;
    }
}

// a function called lastElement which accepts a single array argument.
// The function should return the last element of the array (without removing the element).
// If the array is empty, the function should return null.
// fOR EXAMPLE:
// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

function lastElement (array) {
    if (array.length === 0) {
        return null;
    }
    return array[array.length - 1];
}


// a function called capitalize that accepts a string argument 
// and returns a new string with the first letter capitalized (but the rest of the string unchanged). 
// For example: capitalize('eggplant') // "Eggplant"
 
function capitalize (str) {
    let newStr = (str[0].toUpperCase() + str.slice(1));
    return newStr;
}


// a function called sumArray which accepts a single argument: an array of numbers.  
// It should return the sum of all the numbers in the array.
function sumArray (array) {
    let total = 0;
    for (i = 0; i < array.length ; i++) {
        total += array[i]; 
    }
    return total;
}


// this function takes in one parameter (a number from 1-7) 
// and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  
// If the number is less than 1 or greater than 7, 
// the function should return null. 
function returnDay (num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    }else {
        let finalDay = days[num - 1];
        return finalDay;
    }
}