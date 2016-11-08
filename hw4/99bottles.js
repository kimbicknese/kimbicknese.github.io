/**
 * Created by kimberlybicknese on 10/24/16.
 */

// Create a script that counts down from 99 bottles to 0 bottles


function ninetyNineBottles() {

    // This function will run until the number reaches 0 using a for loop.

    function bottlesOfBeer(number) {

        // Start with this number, which will be defined by what number was passed through the function
        var bottles = number;

        // Common Verse
        var bottlesOfBeer1 = " bottles of beer on the wall, ", bottlesOfBeer2 = " bottles of" +
                " beer.",
            bottlesOfBeer3 = " bottles of beer on the wall.", takeOne = " Take one down and pass it" +
                " around, ";

        // Single Verse
        var bottlesOfBeerSingle1 = " bottle of beer on the wall, ", bottlesOfBeerSingle2 = " bottle of" +
                " beer.", bottlesOfBeerSingle3 =  " bottle of beer on the wall.",
            noMore = "no more bottles of beer on the wall";

        // No more bottles

        var noMoreBottles = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some" +
            " more, 99 bottles of beer on the wall.";

        if (number > 2) {

            return bottles + bottlesOfBeer1 + bottles + bottlesOfBeer2 + takeOne + --bottles +bottlesOfBeer3;

        } else if (number === 2) {

            return bottles + bottlesOfBeer1 + bottles + bottlesOfBeer2 + takeOne + --bottles + bottlesOfBeerSingle3;

        } else if (number === 1) {

            return bottles + bottlesOfBeerSingle1 + bottles + bottlesOfBeerSingle2 + takeOne + noMore;

        } else if (number === 0) {

            return noMoreBottles;

        }

    }

    // Now print the lyrics on to the index.html using appendChild

    for ( var i = 99; i >= 0; i--) {
        var li = document.createElement("li");
        var finishedLyrics = document.createTextNode(bottlesOfBeer(i));
        li.appendChild(finishedLyrics);
        document.getElementById("99bottles").appendChild(li);
    }
}

ninetyNineBottles();









