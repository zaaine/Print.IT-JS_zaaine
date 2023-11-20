
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

containCarrousel(position);
addDots();
dotSelected();

// Création des variables pour flèches gauche et droite du carrousel

const flecheDroiteCarrousel = document.querySelector(".arrow_right");
const flecheGaucheCarrousel = document.querySelector(".arrow_left");

// // console log pour savoir quel bouton est click :
// flecheDroiteCarrousel.addEventListener("click", (event) => {
//   console.log("click fleche droite");
// });

// flecheGaucheCarrousel.addEventListener("click", (event) => {
//   console.log("click fleche gauche");
// });

// création du mode navigation carroussel
flecheDroiteCarrousel.addEventListener("click", () => {
  if (position == 0) {
    position = listSlides - 1;
  } else {
    position--;
  }
  containCarrousel(position);
});

flecheGaucheCarrousel.addEventListener("click", () => {
  if (position == listSlides - 1) {
    position = 0;
  } else {
    position++;
  }

  containCarrousel(position);
});

// Création des points pour localisation des images du carrousel

// création de la variable

function addDots() {
  const dots = document.querySelector(".dots");

  for (let index = 0; index < slides.length; index++) {
    // création des dots pour chaque slides
    const dot = document.createElement("div");
    let dots = document.querySelector(".dots");
    dot.setAttribute("class", "dot");
    dots.appenchild(dot);
    // console.log(dot.length);
  }
}


// localisation dots

function dotSelected() {
  const listDots = document.querySelector(".dot");
  for (let index = 0; index < listDots.length; index++) {
    const dot = listDots(index);
    if (index == position) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}

// création du contenu navigation dans carrousel

function containCarrousel(position) {
  const element = listSlides(position);
//   console.log(element);
  const img = document.querySelector(".banner-img");
  img.setAttribute("src", "/assets/images/slideshow/" + element.image);

  const tagLines = document.querySelector(".banner-txt");
  tagLines.innerHTML = element.tagLine;

  dotSelected();
}
;