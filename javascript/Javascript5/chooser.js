fotos = document.getElementById("fotos");
createPicsHolders();
createPlImages()
function createPicsHolders() {

    for (var i = 0; i <9 ; i++) {

        pictureholder = document.createElement("div");
        pictureholder.className = "picture-holder";
        pictureholder.id = "picture-holder-" + i;
        fotos.appendChild(pictureholder);
    }
}
function createPlImages() {
 pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i <pictureHolders.length ; i++) {
        favoriet = document.createElement("div");
        favoriet.className ="favoriet";
        favoriet.id = "favoriet_" + (i+1);
        plPlaatje = document.createElement("img");
        plPlaatje.src = "img/plch" + (i+1) + ".jpg";
        plPlaatje.id = (i+1);
        plPlaatje.addEventListener("click" , function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(plPlaatje);
    }
}

function maakFavoriet(id) {
    console.log("maak mij favoriet  het gaant oom speler..." + id);
    notsofavoriet = document.getElementsByClassName("favoriet");
    for (var i = 0; i <notsofavoriet.length ; i++) {
        notsofavoriet[i].style.backgroundImage = "none" ;
    }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/hartje2.jpg')";
}