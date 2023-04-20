/*Exo-3 Dans un fichier js (Reprendre le code de la classe Avion)
Écrire un code qui permet de créer un tableau 
qui va stocker 5 avions et afficher leur nom*/

/*class Avion {
  constructeur(Marque, Modele, longueur, nbPlace, Reservoir, vitesse)*/

 get Modele() {
    return this._Modele;
  }

let zavions = [];


zavions.push(new Avion("Michel", "lAugustin", 56, 200, 12000, 700));
zavions.push(new Avion("Jose", "leMoustachu", 54, 300, 12000, 835));
zavions.push(new Avion("Patrick", "leCampeur", 87, 250, 12000, 923));
zavions.push(new Avion("JM", "lePilier", 93, 200, 12000, 534));
zavions.push(new Avion("Francois", "leFrancais", 83, 100, 12000, 279));

for (let i = 0; i < zavions.length; i++) {
  console.log(zavions[i].Modele);
}
