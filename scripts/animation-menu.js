 //Crédit à Codegrid pour le tutoriel
 
 /**
  *
  * La fonction fait apparaître ou cache le menu selon la valeur "data-open"
  * 
  * 
  */

 // Attend que la page charge
document.addEventListener("DOMContentLoaded", () => {
  // Créé l'objet qui sera utiliser pour faire apparaître ou cacher le menu
    const revealerNav = window.revealer({
      revealElementSelector: ".nav-js",
      options: {
         // Le déclencheur CSS qui déclenche l'apparition ou non du menu
        anchorSelector: ".nav-btn-js",
      },
    });

     // Ajouter un écouteur d'événements pour le clic sur l'élément déclencheur
    const actionBtn = document.querySelector(".nav-btn-js");
    actionBtn.addEventListener("click", () => {
      
     // Si le menu est caché, on l'ouvre et on met "data open" à true
     // Sinon, on le cache et "data-open" devient false
      if (!revealerNav.isRevealed()) {
        revealerNav.reveal();
        actionBtn.setAttribute("data-open", true);
      } else {
        revealerNav.hide();
        actionBtn.setAttribute("data-open", false);
      }
    });
  });