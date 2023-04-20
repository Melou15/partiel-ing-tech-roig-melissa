/*Exo-4 Dans un fichier js (Reprendre le code de la classe Avion)
Écrire une fonction qui va additionner le nombre total de places 
contenu dans un tableau d'avions*/



get nbPlace() {
	return this._nbPlace;
}


function totalNbPlaces(zavions) {
  let total = 0;
  for (let i = 0; i < zavions.length; i++) {
    total += avions[i].nbPlace;
  }
  return total;
}

let zavions = [];


zavions.push(new Avion("Michel", "lAugustin", 56, 200, 12000, 700));
zavions.push(new Avion("Jose", "leMoustachu", 54, 300, 12000, 835));
zavions.push(new Avion("Patrick", "leCampeur", 87, 250, 12000, 923));
zavions.push(new Avion("JM", "lePilier", 93, 200, 12000, 534));
zavions.push(new Avion("Francois", "leFrancais", 83, 100, 12000, 279));


let placesTotal = totalNbPlaces(avions);
console.log("Il y a " + totalPlaces + "places dans tout les avions du tableau");


