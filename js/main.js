const images = [
    {
      image: 'img/01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];


// mi prendo le posizioni delle frecce e del contenitore delle slides
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const positionSlides = document.getElementById("position_slides");

// contatore per mettere la classe actine (display block) e farla vedere
let visibile;

for (let i = 0; i < images.length; i++ ) {

  //quando creo le slides, se è la prima rendila visibile
  if (i == 0) {
    visibile = 'active';
  } else {
    visibile = '';
  }

  //creo le slides
  positionSlides.innerHTML += `
      <div class="slide ${visibile}">
        <img src="./${images[i].image}" alt="">
      </div>
      <div class="testi text-end me-3 ${visibile}">
        <h1>${images[i].title}</h1>
        <p>${images[i].text}</p>
      </div>`

}
//prendo tutte le slides e tutti i testi 
const slides = document.getElementsByClassName("slide");
const testi = document.getElementsByClassName("testi");

// indice
let index = 0;

next.addEventListener('click', function() {
  
  //prima rimuovo la classe active dalle immagini e dai testi
  slides[index].classList.remove('active');
  testi[index].classList.remove('active');
  //incremento l'indice se è minore della lunghezza di tutti gli elementi (essendo "indice" metto meno 1 o se no sforerebbe) 
  //oppure se se arrivo alla fine delle slide lo rimetto a 0
  if (index < (slides.length -1)) {
    index++;
  } else {
    index = 0;
  }
  // con il nuovo indice aggiungo la classe active per renderli visibili (display block)
  slides[index].classList.add('active');
  testi[index].classList.add('active');
  
})

//come next ma al contrario
prev.addEventListener('click', function() {
  
  slides[index].classList.remove('active');
  testi[index].classList.remove('active');
  if (index == 0) {
    index = (slides.length - 1);
  } else {
    index--;
  }
  slides[index].classList.add('active');
  testi[index].classList.add('active');
  
})