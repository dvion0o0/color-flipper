var btn = document.querySelector(".btn");

var color = document.querySelector(".color");

const colors = ["Red", "Blue", "Yellow", "Pink", "Purple", "Orange", "Coral", "Gold"];


btn.addEventListener("click", function(){
  const random = randomNumber();
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

function randomNumber(){
  return Math.floor(Math.random() * colors.length);
};