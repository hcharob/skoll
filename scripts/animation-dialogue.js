 /**
  *
  * La fonction fait apparaître les lettres une à la fois avec une boucle.
  *
  */

const texte = "En voilà un bien mauvais joueur ~"; /* Le texte */
let i = 0;

function machineEcrire() {
  if (i < texte.length) {
    document.getElementById("dialogue_texte").innerHTML += texte.charAt(i); /* Ajoute les caractère à l'élément */
    i++;
    setTimeout(machineEcrire, 90); /* Vitesse de l'écriture, 90ms/s */
  }
}

/**
  *
  * La fonction met le texte vide lorsqu'on qu'on clique et active la fonction
  *
  */
function startTyping() {
  i = 0; /* Rénitialise le compteur */
  document.getElementById("dialogue_texte").innerHTML = ""; /* Enlève le texte */
  machineEcrire(); /* Appelle la fonction */
}