let elt = document.getElementById("main");
let newElm = document.createElement("div")
let mel = document.getElementById('bouton');
mel.addEventListener('click', function(){
	mel.innerHTML = "ET C'EST RÉUSSI !";
	elt.style = "color:blue";
});
