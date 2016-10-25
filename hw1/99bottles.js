/**
 * Created by kimberlybicknese on 10/24/16.
 */

// Create a script that counts down from 99 bottles to 0 bottles

var bottles = 99;

for ( var i = 99; i > 0; i--) {
    console.log( bottles + " bottles of beer on the wall, " + bottles + " bottles of beer." + " Take one down and" +
        " pass" +
        " it around, " + --bottles + " bottles of beer on the wall.");
    if (bottles === 1) {
        console.log( bottles + " bottle of beer on the wall, " + bottles + " bottle of beer." + " Take one down and" +
            " pass" +
            " it around, no more bottles of beer on the wall." + "No more bottles of beer on the wall, no more" +
        " bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        break;
    }
}


