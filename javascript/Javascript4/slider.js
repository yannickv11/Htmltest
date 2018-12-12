var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;

var slide = document.getElementById("slide");
slide.style.backgroundImage = "url('img/pl1.jpg')";

slide.addEventListener("click",function () {
    slide.style.backgroundImage = "url('img/pl"+ getpl()+ ".jpg')";
});

function getpl() {
if (teller >= plaatjes.length) {
    teller = 1;
} else {
    teller++
}
console.log(teller);
return teller;
}
    

