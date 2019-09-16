"use strict";
var Personne = /** @class */ (function () {
    function Personne(numero, prenom, nom, age) {
        if (numero === void 0) { numero = 0; }
        if (prenom === void 0) { prenom = ""; }
        if (nom === void 0) { nom = ""; }
        if (age === void 0) { age = 0; }
        this.numero = numero;
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    Personne.prototype.incrementerAge = function () {
        this.age++;
    };
    return Personne;
}());
var p0 = new Personne(2, 'ramzi', 'hammed', 30);
console.log(p0);
var p1 = new Personne();
p1.nom = 'kamel';
p1.prenom = 'zine';
p1.age = 33;
p1.incrementerAge();
console.log(p1);
