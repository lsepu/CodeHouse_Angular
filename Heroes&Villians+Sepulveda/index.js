var Heroe = /** @class */ (function () {
    function Heroe(name, universe, age, villians) {
        var _this = this;
        this.name = name;
        this.universe = universe;
        this.age = age;
        this.villians = villians;
        this.getHeroeInfo = function () {
            return "Name: " + _this.name + "\nUniverse: " + _this.universe + "\nAge: " + _this.age + "\n";
        };
        this.getVillians = function () {
            return _this.villians;
        };
        this.addVillian = function (villian) {
            _this.villians.push(villian);
        };
    }
    return Heroe;
}());
var joker = {
    name: 'Jack Napier',
    crimes: 120
};
var batman = new Heroe("Bruce banner", "DC", 40, [joker]);
console.log(batman.getHeroeInfo());
var penguin = {
    name: 'Oswald Cobblepot',
    crimes: 80
};
batman.addVillian(penguin);
console.log(batman.getVillians());
