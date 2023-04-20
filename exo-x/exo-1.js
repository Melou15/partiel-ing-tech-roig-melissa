/* Dans un fichier js 
Écrire une classe Avion qui a comme attribut :
Marque, Modele, longueur, nbPlace, Reservoir, vitesse
Utiliser le constructeur afin d'instancier 
un objet de type Avions*/

class Avion {
  constructeur(Marque, Modele, longueur, nbPlace, Reservoir, vitesse) {
    this.Marque = Marque;
    this.Modele = Modele;
    this.longueur = longueur;
    this.nbPlace = nbPlace;
    this.Reservoir = Reservoir;
    this.vitesse = vitesse;
  }
}

let Avions = new Avion("Boeing", "Boeing 737", 31.09, 138, 26025, 935);
