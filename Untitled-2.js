// Récupération du bouton et de la pop-up
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

// Récupération de la croix de fermeture
var span = document.getElementsByClassName("close")[0];

// Quand l'utilisateur clique sur le bouton, afficher la pop-up
btn.onclick = function() {
  modal.style.display = "block";
}

// Quand l'utilisateur clique sur la croix de fermeture, fermer la pop-up
span.onclick = function() {
  modal.style.display = "none";
}

// Quand l'utilisateur clique en dehors de la pop-up, fermer la pop-up
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
