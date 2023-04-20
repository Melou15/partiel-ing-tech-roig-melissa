/* Exo-2 Dans un fichier js (Reprendre le code de la classe Avion)
Pour chaque attribut, écrire les getters et les setters de la classe avion*/

/* Getters */
get Marque() {
	return this._Marque;
}

get Modele() {
	return this._Modele;
}

get longueur() {
	return this._longueur;
}

get nbPlace() {
	return this._nbPlace;
}

get Reservoir() {
	return this._Reservoir;
}

get vitesse() {
	return this._vitesse;
}

/*Setters*/ 

set marque(Marque) {
	this._Marque = Marque;
}

set Modele(Modele) {
	this._Modele = Modele;
}

set longueur(longueur) {
	this._longueur = longueur;
}

set nbPlace(nbPlace) {
	this._nbPlace = nbPlace;
}

set Reservoir(Reservoir) {
	this._Reservoir = Reservoir;
}

set vitesse(vitesse) {
	this._vitesse = vitesse;
}