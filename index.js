var randomNumber1 = Math.floor(Math.random() * 6) + 1; // outputs a random number from 1 - 6

var imageSource = "/images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // outputs a random number from 1 - 6

var imageSource0 = "/images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource0);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
} //player1 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
} //player2 wins
else {
    document.querySelector("h1").textContent = "Draw!";
} //draw 