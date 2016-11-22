/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/

 // Consumer Finance Data -> http://data.consumerfinance.gov/api/views.json
  // Alternate Data -> https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD

/*var URL;
$('#getDataButton').on('click', function() {
    URL = 'http://data.consumerfinance.gov/api/views.json';
    $.get(URL, function(r) {
        //	We	get	the	data	back	from	the	request	in	the	parameter	we	pass	in	the	function
        console.log(r);
    });
});*/

/*

 - Sign up for openweathermap.org and generate an API key.
 - User either $.ajax or $.get to pull weather current data .
 for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
 - Print the temperature in console.
 - Bonus 1: add a form prompting user for the city and state.
 - Bonus 2: convert answer from kelvin to fahrenheit.

 */



var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "5fcdf44e69c6cf5d5d43734b0e3a01a3";
var imperialUnit = "&units=imperial";


function getWeather(location) {
    var URL = weatherURL + location + "&appid=" + apiKey + imperialUnit;
    $.get(URL, function(r) {
        console.log(r.main.temp + " fahrenheit");
    })
}
$("#submit").on("click", function() {
    getWeather($("#city").val());
})




