var name1 = prompt("what is player 1's name?");

var name2 = prompt("what is player 2's name?");

document.querySelector(".player1").innerHTML = name1;

document.querySelector(".player2").innerHTML = name2;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImage1Source = "images/" + randomImage1

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1Source);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImage2Source = "images/" + randomImage2

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2Source);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = name1 + " Wins!"
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = name2 + " Wins!"
}

else {
 document.querySelector("h1").innerHTML = "It's a draw."
}
