//Crédit à Barney Codes pour le tutoriel

let particles = [];
let img;
const num = 800;

const noiseScale = 0.01; //change le parcours, contrôle l'échelle de buit

/**
  *
  * Fonction qui fait l'image en background
  * 
  * 
  */
function preload() {
  img = loadImage('../images/jeu_background3.png');
}

/**
  *
  * Fonction qui initialise les particules et ajouter leur style
  * 
  * 
  */
function setup() {
  createCanvas(windowWidth, windowHeight);
  // initialisation des particules
  for (let i = 0; i < num; i++) {
    // place des vecteurs à un endroit au hasard dans le canvas
    particles.push(createVector(random(width), random(height)));
  }
  //couleurs des particules
  stroke("#495A42");
  strokeWeight(3);
}

/**
  *
  * Fonction qui dessigne le canva et détermine le mouvement des particules
  * 
  * 
  */
function draw() {
  //dessine un rectangle,
  image(img, 0, 0, width, height);
  //dessine et place les particules sur le canvas
  for (let i = 0; i < num; i++) { 
    let p = particles[i]; //assigne le p à une particule i dans le tableau
    point(p.x, p.y); //dessine le point à la position actuelle de p
    let n = noise(p.x * noiseScale, p.y * noiseScale); //génère une valeur de bruit de Perlin pour la position de p
    let a = TAU * n; // converti la valeur de bruit en un angle en multipliant TAU, TAU = 2* pi
    p.x += cos(a); // Met à jour la coordonnée x de p en ajoutant le cosinus de l'angle a
    p.y += sin(a); // Met à jour la coordonnée y de p en ajoutant le cosinus de l'angle a
    if (!onScreen(p)) { //Si la particule est hors de l'écran
      p.x = random(width); //Met la coordonnée x à une valeur aléatoire
      p.y = random(height); //Met la coordonnée y à une valeur aléatoire
    }
  }
}

/**
  *
  * Fonction qui change la direction des particules avec le clic de la souris
  * 
  * 
  */
function mouseReleased() {
  noiseSeed(millis());
}

/**
  *
  * Fonction qui change la taille du canvas selon la taille de la fenêtre
  * 
  * 
  */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/**
  *
  * Fonction qui remet les points sur la canva lorsqu'ils sortent de l'écran
  * 
  * 
  */
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
