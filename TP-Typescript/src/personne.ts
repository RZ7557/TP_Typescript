class Personne{
    numero : number ;
    prenom : string ;
    nom : string ;
    age : number ;
    
    constructor(numero: number = 0, prenom : string = "?" , nom : string = "?", age : number = 0){
        this.numero =numero;
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;

    }

    incrementerAge(){
        this.age++;
    }
}

let p0 = new Personne(2, 'ramzi', 'hammed', 30);
console.log(p0);
let p1 : Personne  = new Personne();
p1.nom = 'Rachid';
p1.prenom = 'zine';
p1.age =33;
p1.incrementerAge();
console.log(p1);