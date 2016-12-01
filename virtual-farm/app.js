var farm = [];

function FarmAnimal(name, species, image, sound) {
    this.name = name;
    this.name = species;
    this.image = image;
    this.sound = function() {
        console.log("the %s, named %s, makes the \'%s\' sound", species, name, sound);
    };
}

function Chicken(name) {
    FarmAnimal.call(this, name, Chicken.prototype.species, Chicken.prototype.image, Chicken.prototype.sound);
}
Chicken.prototype = new FarmAnimal();
Chicken.prototype.species = "Chicken";
Chicken.prototype.sound = "what the cluck?";
Chicken.prototype.image = "";

function Rooster(name) {
    FarmAnimal.call(this, name, Rooster.prototype.species, Rooster.prototype.image, Rooster.prototype.sound);
}
Rooster.prototype = new FarmAnimal();
Rooster.prototype.species = "Chicken";
Rooster.prototype.sound = "cockadoodledooo";
Rooster.prototype.image = "";

var rooster1 = new Rooster("the chosen one");
rooster1.sound();
