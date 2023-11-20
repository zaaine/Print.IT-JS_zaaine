
// console.log ("fichier activé")

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let position = 0;
let listSlides = slides.length;



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

// création de la variable Dot

function addDots (){
	const dot = document.querySelector(".dots")
	// console.log(dot)
	for ( let index = 0 ; index < slides.length ; index++) {
		let dots = document.createElement ("div");
		dots.setAttribute("class", "dot"); 
		dot.appendChild(dots)
		console.log(dots)
	}

}

addDots()

// création d'une fonction qui va ajouté une class list sur la slide en cours

function dotSelected () {
	const listDots = document.querySelectorAll(".dot"); 
	for ( let index = 0; index < listDots.length ; index ++) {
		const dot = listDots[index] ; 
	if (index == position){
		dot.classList.add ("dot_selected")
	}	else {
		dot.classList.remove("dot_selected")
	}
	}

}

dotSelected ()

