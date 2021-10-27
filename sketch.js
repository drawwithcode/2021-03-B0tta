let partita1;
let partita2;
let partita3;
let partita4;
let partita5;
let audio1;
let audio2;
let audio3;
let audio4;
let audio5;
let a1 = false;
let a2 = false;
let a3 = false;
let a4 = false;
let a5 = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(30);
}

function preload() {
  //caricamento immagini
  sfondo = loadImage("./assets/images/bg4.jpg");
  partita1 = loadImage("./assets/images/01.jpg");
  partita2 = loadImage("./assets/images/02.jpg");
  partita3 = loadImage("./assets/images/03.jpg");
  partita4 = loadImage("./assets/images/04.jpg");
  partita5 = loadImage("./assets/images/05.jpg");

  //caricamento audio
  audio1 = loadSound("./assets/audio/01.mp3");
  audio2 = loadSound("./assets/audio/02.mp3");
  audio3 = loadSound("./assets/audio/03.mp3");
  audio4 = loadSound("./assets/audio/04.mp3");
  audio5 = loadSound("./assets/audio/05.mp3");
}

function draw() {
  //posizionamento immagini
  image(sfondo, width / 2, height / 2, windowWidth, windowHeight);
  image(partita1, width / 11, (height / 4) * 3, 225, 150);
  image(partita2, (width / 11) * 3, (height / 4) * 3, 225, 150);
  image(partita3, (width / 11) * 5, (height / 4) * 3, 225, 150);
  image(partita4, (width / 11) * 7, (height / 4) * 3, 225, 150);
  image(partita5, (width / 11) * 9, (height / 4) * 3, 225, 150);

  //if mouse è su prima immagine
  if (
    mouseX > width / 11 - 112 &&
    mouseX < width / 11 + 112 &&
    mouseY > (height / 4) * 3 - 75 &&
    mouseY < (height / 4) * 3 + 75
  ) {
    play1();
    a1 = true;
  } else {
    a1 = false;
  }

  //if mouse è su seconda immagine
  if (
    mouseX > (width / 11) * 3 - 112 &&
    mouseX < (width / 11) * 3 + 112 &&
    mouseY > (height / 4) * 3 - 75 &&
    mouseY < (height / 4) * 3 + 75
  ) {
    play2();
    a2 = true;
  } else {
    a2 = false;
  }

  //if mouse è su terza immagine
  if (
    mouseX > (width / 11) * 5 - 112 &&
    mouseX < (width / 11) * 5 + 112 &&
    mouseY > (height / 4) * 3 - 75 &&
    mouseY < (height / 4) * 3 + 75
  ) {
    play3();
    a3 = true;
  } else {
    a3 = false;
  }

  //if mouse è su quarta immagine
  if (
    mouseX > (width / 11) * 7 - 112 &&
    mouseX < (width / 11) * 7 + 112 &&
    mouseY > (height / 4) * 3 - 75 &&
    mouseY < (height / 4) * 3 + 75
  ) {
    play4();
    a4 = true;
  } else {
    a4 = false;
  }

  //if mouse è su quinta immagine
  if (
    mouseX > (width / 11) * 9 - 112 &&
    mouseX < (width / 11) * 9 + 112 &&
    mouseY > (height / 4) * 3 - 75 &&
    mouseY < (height / 4) * 3 + 75
  ) {
    play5();
    a5 = true;
  } else {
    a5 = false;
  }
}

//funzione che riproduce audio1
function play1() {
  if (a1 && audio1.isPlaying() == false) {
    audio1.play();
  }
}

//funzione che riproduce audio2
function play2() {
  if (a2 && audio2.isPlaying() == false) {
    audio2.play();
  }
}

//funzione che riproduce audio3
function play3() {
  if (a3 && audio3.isPlaying() == false) {
    audio3.play();
  }
}

//funzione che riproduce audio4
function play4() {
  if (a4 && audio4.isPlaying() == false) {
    audio4.play();
  }
}

//funzione che riproduce audio5
function play5() {
  if (a5 && audio5.isPlaying() == false) {
    audio5.play();
  }
}
