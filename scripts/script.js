const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0; 
const listSlide = slides.length;






// Création des variables pour flèches gauche et droite du carrousel

const flecheDroiteCarrousel = document.querySelector(".arrow_right");

const flecheGaucheCarrousel = document.querySelector(".arrow_left");

// console log pour savoir quel bouton est click :
flecheDroiteCarrousel.addEventListener("click", (event) => {
  console.log("click fleche droite");
});

flecheGaucheCarrousel.addEventListener("click", (event) => {
  console.log("click fleche gauche");
});



// Création des points pour localisation des images du carrousel

// création de la variable 

let dot = document.querySelector(".dots");

for (let index = 0 ; index < slides.length; index++){
	// création des dots pour chaque slides
let dot = document.createElement("div"); 
dot.setAttribute ("class", "dot");
DOMStringList.appenchild(dot);

}









