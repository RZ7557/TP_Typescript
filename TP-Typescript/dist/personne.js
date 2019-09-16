"use strict";
var Personne = /** @class */ (function () {
    function Personne() {
        this.numero = 0;
        this.nom = "!";
        this.prenom = "!";
        this.age = 0;
    }
    Personne.prototype.incrementerAge = function () {
        this.age++;
    };
    return Personne;
}());
var p1 = new Personne();
p1.nom = 'Rachid';
p1.prenom = 'zine';
p1.age = 33;
p1.incrementerAge();
console.log(p1);
