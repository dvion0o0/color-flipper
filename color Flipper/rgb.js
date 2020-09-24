var btn = document.querySelector(".btn");

var color = document.querySelector(".color");


btn.addEventListener("click", function(){
document.body.style.background = randomNumber();
  color.textContent = randomNumber();
});

function randomNumber(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  
  return "rgb(" + r + "," + g + "," + b +")";
};