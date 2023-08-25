"use strict";
let sercetNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

// add evnet listener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ number";
  } else if (guess === sercetNumber) {
    document.querySelector(".message").textContent = "🎉 correct Number";
    document.querySelector(".number").textContent = sercetNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //  guess is to high
  } else if (guess > sercetNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 number too high";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "🎮 Game Over";
      document.querySelector("body").style.backgroundColor = "#970303";
    }

    // guess is low
  } else if (guess < sercetNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 number too low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "🎮 Game Over";
      document.querySelector("body").style.backgroundColor = "#970303";
    }
  }
});

// reset the game
document.querySelector(".again").addEventListener("click", function () {
  sercetNumber = Math.trunc(Math.random() * 20) + 1;
  // highScore = 0;
  score = 20;
  document.querySelector(".message").textContent = "⌚ Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
