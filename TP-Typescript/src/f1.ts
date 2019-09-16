//var x : number;
//x="abc";
//x=8;
//console.log(x);
let valeurs : number[] = [2, 45, 3, 8];
let sum : number = 0;
let moy : number =0;
for(let v of valeurs) {
	sum = sum + v;
}

moy = sum /(valeurs.length);
let message : string  = `la moyenne du tableau ${valeurs} vaut ${moy}`;
//console.log(sum);
console.log(message);