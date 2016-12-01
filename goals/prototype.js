/**
 * Created by kimberlybicknese on 11/29/16.
 */

/*function University(name, nickname, city) {
    this.name = name;
    this.nickname = nickname;
    this.city = city;
}

var VSU = new University("Valdosta State University", "VSU", "Valdosta");

console.log("%s %s %s", VSU.name, VSU.nickname, VSU.city);

University.prototype.affiliation = "NCAA";

console.log(VSU.affiliation);*/

function dog(breed, weight, color) {
    this.breed = breed;
    this.weight = weight;
    this.color = color;
    this.description = function() {
        return "This dog is a " + breed + " that is " + weight + "lbs and has a " + color + " coat.";
    }
}

var dog1 = new dog("German Shepherd", 75, "Black and Tan");

console.log("%s, %slbs, %s", dog1.breed, dog1.weight, dog1.color);

dog.prototype.age = "9 years";

console.log(dog1.description());

