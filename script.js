let n = document.querySelector('.btn-no')
n.addEventListener('mouseover', movebtn)

//Bouge le Bouton de haut à droite
function movebtn() {
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;

    n.style.right = i + 'px';
    n.style.top = j + 'px';

}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Ouvre la modal 
 btn.onclick = function() {
 modal.style.display = "block";
}

// Fermeture
span.onclick = function() {
modal.style.display = "none";
}

//fonction fermeture de la modal
window.onclick = function(event) {
    if (event.target == modal) {
         modal.style.display = "none";
        }
}