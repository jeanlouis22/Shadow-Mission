const joueur = document.getElementById("joueur");

let position = 100;

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        position += 20;
    }

    if (event.key === "ArrowLeft") {
        position -= 20;
    }

    if (position < 0) {
        position = 0;
    }

    if (position > 760) {
        position = 760;
    }

    joueur.style.left = position + "px";

});
