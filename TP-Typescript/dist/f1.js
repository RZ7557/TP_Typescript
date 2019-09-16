"use strict";
//var x : number;
//x="abc";
//x=8;
//console.log(x);
var valeurs = [2, 45, 3, 8];
var sum = 0;
var moy = 0;
for (var _i = 0, valeurs_1 = valeurs; _i < valeurs_1.length; _i++) {
    var v = valeurs_1[_i];
    sum = sum + v;
}
moy = sum / (valeurs.length);
var message = "la moyenne du tableau " + valeurs + " vaut " + moy;
//console.log(sum);
console.log(message);
