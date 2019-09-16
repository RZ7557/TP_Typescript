class Personne{
    numero : number = 0;
    nom : string ="!";
    prenom : string = "!";
    age : number = 0;
    

    incrementerAge(){
        this.age++;
    }
}

let p1 : Personne  = new Personne();
p1.nom = 'Rachid';
p1.prenom = 'zine';
p1.age =33;
p1.incrementerAge();
console.log(p1);