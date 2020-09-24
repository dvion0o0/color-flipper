var btn = document.querySelector(".btn");

var color = document.querySelector(".color");

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function(){
let hexColor = "#";

for(var i = 0; i < 6; i++){
    hexColor += colors[randomNumber()];
}

document.body.style.backgroundColor = hexColor;

color.textContent = hexColor;

});



function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}