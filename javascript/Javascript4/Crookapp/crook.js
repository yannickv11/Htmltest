var plaatjes = [1,2,3,4];
var teller = 0;

var slidecrook = document.getElementById("slidecrook");
slidecrook.style.backgroundImage = "url('imgcr/crookh1.jpg')";


 slidecrook.addEventListener("click",function () {
     slidecrook.style.backgroundImage = "url('imgcr/crookh"+ getcrookh()+ ".jpg')";
 });

 function getcrookh() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
 }


var plaatjes = [1,2,3,4];
var teller = 0;

var slidecrook2 = document.getElementById("slidecrook2");
slidecrook2.style.backgroundImage = "url('imgcr2/crookn1.jpg')";


slidecrook2.addEventListener("click",function () {
    slidecrook2.style.backgroundImage = "url('imgcr2/crookn"+ getcrookn()+ ".jpg')";
});

function getcrookn() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}


var plaatjes = [1,2,3,4];
var teller = 0;

var slidecrook3 = document.getElementById("slidecrook3");
slidecrook3.style.backgroundImage = "url('imgcr3/crookm1.jpg')";


slidecrook3.addEventListener("click",function () {
    slidecrook3.style.backgroundImage = "url('imgcr3/crookm"+ getcrookm()+ ".jpg')";
});

function getcrookm() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;
}

