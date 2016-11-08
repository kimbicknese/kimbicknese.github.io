/**
 * Created by kimberlybicknese on 10/25/16.
 */

/* Using the Math.floor and Math.random helpers */

console.log(Math.floor(Math.random()  *  (100 - 50 + 1) + 50));

/* Function parameters & arguments */

function boom(name) {
    console.log("%s says 'boom goes the dynamite'", name);
}

boom("Kim");


// Find out which number is the largest number.

// Write a function that will take in the array and return the largest number.

var randomList = [49,358,502,40,567,589,1037,12,340,0,-34];

function sortedNumbers(array) {
    var sortedList = array.sort(function(a,b){
        return a > b;
    });
    console.log(sortedList);
    var high = sortedList[sortedList.length-1];
    return high;
}

console.log(primed(sortedNumbers(randomList)));

function primed(val) {
    for ( var j = 2; j < val; j++ ) {
        if(val % j == 0) {
            return false;
        }
    }
    return true;
}