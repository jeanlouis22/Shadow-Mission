
const joueur = document.getElementById("joueur");
const ennemi = document.getElementById("ennemi");

let position = 100;
let positionEnnemi = 700;
let score = 0;

const affichageScore = document.getElementById("score");

// Déplacement du joueur
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


// Tir du joueur
document.addEventListener("keydown", function(event){

    if(event.code === "Space"){

        let balle = document.createElement("div");
        balle.className = "balle";

        balle.style.left = position + 50 + "px";
        balle.style.bottom = "50px";

        document.getElementById("jeu").appendChild(balle);


        let mouvement = setInterval(function(){

            balle.style.left = balle.offsetLeft + 10 + "px";


            // Collision avec l'ennemi
            if (
                balle.offsetLeft < ennemi.offsetLeft + 50 &&
                balle.offsetLeft + 10 > ennemi.offsetLeft
            ){

                ennemi.style.display = "none";
score += 10;
affichageScore.textContent = score;
                balle.remove();
                clearInterval(mouvement);


                setTimeout(function(){

                    ennemi.style.display = "block";
                    positionEnnemi = 700;
                    ennemi.style.left = positionEnnemi + "px";

                },2000);
            }


            // Supprimer la balle quand elle sort de l'écran
            if(balle.offsetLeft > 800){

                balle.remove();
                clearInterval(mouvement);

            }


        },50);

    }

});


// Mouvement de l'ennemi
setInterval(function(){

    positionEnnemi -= 2;

    ennemi.style.left = positionEnnemi + "px";


    if(positionEnnemi < 100){

        positionEnnemi = 700;

    }

},50);
// Commandes téléphone

document.getElementById("droite").addEventListener("touchstart", function(){
    position += 20;

    if(position > 760){
        position = 760;
    }

    joueur.style.left = position + "px";
});


document.getElementById("gauche").addEventListener("touchstart", function(){
    position -= 20;

    if(position < 0){
        position = 0;
    }

    joueur.style.left = position + "px";
});


document.getElementById("tirer").addEventListener("touchstart", function(){

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

});
