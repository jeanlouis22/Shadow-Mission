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
document.addEventListener("keydown", function(event){

    if(event.key === " "){
        let balle = document.createElement("div");
        balle.className = "balle";

        balle.style.left = position + 50 + "px";
        balle.style.bottom = "50px";

        document.getElementById("jeu").appendChild(balle);

        let mouvement = setInterval(function(){
            balle.style.left = balle.offsetLeft + 10 + "px";

            if(balle.offsetLeft > 800){
                balle.remove();
                clearInterval(mouvement);
            }

        },50);
    }

});
let ennemi = document.getElementById("ennemi");

let positionEnnemi = 700;

setInterval(function(){

    positionEnnemi -= 2;

    ennemi.style.left = positionEnnemi + "px";

    if(positionEnnemi < 100){
        positionEnnemi = 700;
    }

},50);
