/**
 * Created by kimberlybicknese on 10/24/16.
 */

var streetNumber = ["9402", "182", "4768", "90", "857", "1345", "778"];
var streetName = ["Oak Street", "Maple Street", "Maryland Rd.", "Mountain View Rd.", "Dill St."];
var cityName = ["Phoenix", "Arlington", "Williamsburg", "Edisville", "Douglas", "Yorkshire", "Rollington", "San" +
" Francisco"];
var stateName = ["Georgia", "Florida", "New York", "Virginia", "South Carolina", "Kansas", "California"];
var zipCode = ["09586", "76859", "00968", "14730", "46573", "86049", "36572", "12473", "40765"];

function Address() {
    var random1 = Math.floor((Math.random() * streetNumber.length));
    var random2 = Math.floor((Math.random() * streetName.length));
    var random3 = Math.floor((Math.random() * cityName.length));
    var random4 = Math.floor((Math.random() * stateName.length));
    var random5 = Math.floor((Math.random() * zipCode.length));


    console.log(streetNumber[random1] + " " + streetName[random2] + ", " + cityName[random3] + ", " + stateName[random4] + " " + zipCode[random5] );
}

Address();


