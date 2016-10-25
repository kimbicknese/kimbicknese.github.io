/**
 * Created by kimberlybicknese on 10/19/16.
 */


/*

This function will continuosly generate random company names in the sentence when clicking the
"create new startup" button.

*/

function displayStartup() {

    // create array for startup companies

    var startupX = ["Uber", "Google", "Amazon", "Twitter", "Facebook", "Clutch", "Classpass", "BarkBox", "Pinterest", "Instagram", "Apple", "Waze", "HelloFresh", "Blue Apron", "Plated", "Yelp"];
    var startupY = ["kittens", "puppies", "hipsters", "gamers", "geeks", "dogs", "cats", "artists", "engineers", "scientists", "poodles", "parents", "kids", "doctors"];

    // Variables will randomly choose one name out of each array

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    // Create string for the output and print to the h1

    document.getElementById("XforY").innerHTML = "A startup that is like " + startupX[random1] + ", but for " + startupY[random2] + ".";
}

// Clicking on a button will place the madlib saying in the h1 tag

document.getElementById("button").onclick = displayStartup;

// Clicking on "favorite" will save the saying into a favorites bucket

var favoriteStartups = [];
document.getElementById("favoriteList").innerHTML = favoriteStartups;

function saveStartup() {
    favoriteStartups.push(document.getElementById("XforY").innerHTML);
    var favoriteFinalString = favoriteStartups.join("<br>");
    document.getElementById("favoriteList").innerHTML = favoriteFinalString;
}

document.getElementById("favorite").onclick = saveStartup;

// Clicking on "show favorites" will toggle on or off all of your favorite madlibs sayings in a div that is
// initially hidden

function showFavorites() {
    document.getElementById("favoriteList").classList.toggle("show");
    document.getElementById("showFavorites").classList.toggle("toggle");
}

document.getElementById("showFavorites").onclick = showFavorites;








