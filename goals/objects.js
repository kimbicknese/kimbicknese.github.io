/**
 * Created by kimberlybicknese on 11/1/16.
 */


var gators = {
    school: "University of Florida",
    enrollment: 38000,
    location: "Gainsville, FL",
    hasFootballTeam: true,
    sports: ["basketball", "wrestling", "track"],
    admissionStats:{
        applicants: 10000,
        admitted: 1000,
        gradRate: .89
    }
}

for ( var prop in gators ) {
    if (prop !== "admissionStats") {
        console.log("%s for Gators:", prop, gators[prop]);
    } else {
        for ( var stat in gators[prop] ) {
            console.log("%s for Gators:", stat, gators[prop][stat]);
        }
    }
}

console.log(gators.school);
gators.enrollment = 37000;
console.log(gators.enrollment);
console.log(gators.admissionStats.applicants);

// Cloning Objects

var myGators = {};
Object.assign(myGators, gators);
myGators.enrollment = 23583290;
console.log(gators.enrollment);
console.log(myGators.enrollment);

// Merging Objects

var o1 = { a:1 };
var o2 = { b:2 };

var obj = {};
Object.assign(obj, o1,o2);
console.log(obj);

var Car = function(make,model,doors,color,year,value) {
    this.make = make;
    this.model = model;
    this.doors = doors;
    this.color = color;
    this.year = year;
    this.value = value;
    this.honk = function () {
        console.log("the %s goes beep beep", this.make);
    }
}

var maserati = new Car("maserati", "Ghibli", 2, "blue", 2016, 150000);
var acura = new Car("acura", "TL", 4, "red", 2017, 120000);

console.log(maserati.year);
console.log(acura.year);
acura.honk();

//


var Monkey = function(name, species) {
    this.name = name;
    this.species = species;
    this.foodsEaten = [];
    this.eatSomething = function(food) {
        this.foodsEaten.push(food);
    };
    this.introduce = function() {
        console.log("Hello, my name is %s and I am a %s. I have eaten a %s.", this.name, this.species, this.foodsEaten.join(", "));
    }
}

var orangutan = new Monkey("Bob", "orangutan");
orangutan.eatSomething("banana");
orangutan.introduce();
