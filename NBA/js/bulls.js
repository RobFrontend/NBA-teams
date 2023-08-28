"use strict";
////////////////////////////////////////////
/* PLAYER NAME HOVER*/
// AND PLAYER OBJECT
/////////////////////////////////////////////////
const playerName = document.querySelector(".player-name");
const addPlayerName = document.querySelector(".add-player-name");

const roseHover = document.querySelector(".img-render-rose");
const rose = {
  fullName: "Derrick Rose",
  height: 188,
  mvpNumber: 1,
};
roseHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${rose.fullName}`;
  roseHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const pippenHover = document.querySelector(".img-render-pippen");
const pippen = {
  fullName: "Scottie Pippen",
  height: 203,
  mvpNumber: 0,
};
pippenHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${pippen.fullName}`;
  pippenHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const jordanHover = document.querySelector(".img-render-jordan");
const jordan = {
  fullName: "Michael Jordan",
  height: 198,
  mvpNumber: 5,
};
const rodman = {
  fullName: "Dennis Rodman",
  height: 201,
  mvpNumber: 0,
};
jordanHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  addPlayerName.style.opacity = "0.7";
  playerName.textContent = `${jordan.fullName}`;
  addPlayerName.textContent = `${rodman.fullName}`;
  jordanHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
    addPlayerName.style.opacity = "0";
  });
});

const derozanHover = document.querySelector(".img-render-derozan");
const derozan = {
  fullName: "DeMar Derozan",
  height: 198,
  mvpNumber: 0,
};
derozanHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${derozan.fullName}`;
  derozanHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const lavineHover = document.querySelector(".img-render-lavine");
const lavine = {
  fullName: "Zach Lavine",
  height: 196,
  mvpNumber: 0,
};
lavineHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${lavine.fullName}`;
  lavineHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});
/////////////////////////////////////////////////
///// HEIGHT COMPARE BULLS PLAYERS///////////////
// ALL PLAYERS AND BUTTONS RESETS (THERE CAN BE ONLY ONE PLAYER IMG TO COMPARE) //
let compPlayers = document.querySelectorAll(".img-compare-player");
let btnPlayers = document.querySelectorAll(".btn-choose-compare");
btnPlayers.forEach((btnPLayer) => {
  btnPLayer.addEventListener("click", function () {
    compPlayers.forEach((compPlayer) => {
      compPlayer.classList.add("img-hidden");
    });
  });
});
// BULLS PLAYERS BTNS
const compJordan = document.querySelector(".img-compare-jordan");
const btnJordan = document.querySelector(".btn-choose-jordan");
compJordan.style.height = `${jordan.height * 1.7 + 3}px`;
btnJordan.addEventListener("click", function () {
  compJordan.classList.remove("img-hidden");
});

const compDerozan = document.querySelector(".img-compare-derozan");
compDerozan.style.height = `${derozan.height * 1.7 + 3}px`;
const btnDerozan = document.querySelector(".btn-choose-derozan");
btnDerozan.addEventListener("click", function () {
  compDerozan.classList.remove("img-hidden");
});

const compLavine = document.querySelector(".img-compare-lavine");
compLavine.style.height = `${lavine.height * 1.7 + 3}px`;
const btnLavine = document.querySelector(".btn-choose-lavine");
btnLavine.addEventListener("click", function () {
  compLavine.classList.remove("img-hidden");
});

const compRose = document.querySelector(".img-compare-rose");
compRose.style.height = `${rose.height * 1.7 + 3}px`;
const btnRose = document.querySelector(".btn-choose-rose");
btnRose.addEventListener("click", function () {
  compRose.classList.remove("img-hidden");
});

const compPippen = document.querySelector(".img-compare-pippen");
compPippen.style.height = `${pippen.height * 1.7 + 3}px`;
const btnPippen = document.querySelector(".btn-choose-pippen");
btnPippen.addEventListener("click", function () {
  compPippen.classList.remove("img-hidden");
});

const compRodman = document.querySelector(".img-compare-rodman");
compRodman.style.height = `${rodman.height * 1.7 + 3}px`;
const btnRodman = document.querySelector(".btn-choose-rodman");
btnRodman.addEventListener("click", function () {
  compRodman.classList.remove("img-hidden");
});
///////////////////////////////////////////////////
// GUESS THE PLAYER
const imgPLayers = document.querySelector(".img-guess");

const guessRodman = document.querySelector(".img-guess-rodman");
const heightRodman = document.querySelector(".guess-height-rodman");
const tipRodman = document.querySelector(".guess-height-rodman");
tipRodman.textContent = rodman.height + "cm";

const guessLavine = document.querySelector(".img-guess-lavine");
const heightLavine = document.querySelector(".guess-height-lavine");
const tipLavine = document.querySelector(".guess-height-lavine");
tipLavine.textContent = lavine.height + "cm";

const guessRose = document.querySelector(".img-guess-rose");
const heightRose = document.querySelector(".guess-height-rose");
const tipRose = document.querySelector(".guess-height-rose");
tipRose.textContent = rose.height + "cm";

const guessJordan = document.querySelector(".img-guess-jordan");
const heightJordan = document.querySelector(".guess-height-jordan");
const tipJordan = document.querySelector(".guess-height-jordan");
tipJordan.textContent = jordan.height + "cm";

const guessPlayer = document.querySelector(".guess-name");
const btnGuess = document.querySelector(".input-submit-guess");

const guessAlert = document.querySelector(".alert-guess");
const guessEndText = document.querySelector(".guess-endtext");

const guessScore = document.querySelector(".guess-score");
const guessHighScore = document.querySelector(".guess-highscore");
const btnAgain = document.querySelector(".btn-again");
let trials = 4;
let score = 0;
guessScore.textContent = trials;
guessHighScore.textContent = score;

btnGuess.addEventListener("click", function () {
  if (trials === 0) {
    trials = 0;
    guessScore.textContent = `${trials}`;
    guessEndText.textContent = `You lost!`;
  } else if (score !== 4) {
    if (guessPlayer.value === "Dennis Rodman") {
      guessRodman.style.filter = "brightness(1)";
      guessAlert.textContent = "Dennis the menace!";
      heightRodman.style.opacity = "0";
      score++;
      guessHighScore.textContent = `${score}`;
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else if (guessPlayer.value === "Derrick Rose") {
      guessRose.style.filter = "brightness(1)";
      guessAlert.textContent = "Too big, too strong, too fast, too good!";
      heightRose.style.opacity = "0";
      score++;
      guessHighScore.textContent = `${score}`;
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else if (guessPlayer.value === "Michael Jordan") {
      guessJordan.style.filter = "brightness(1)";
      guessAlert.textContent = "The G.O.A.T himself!";
      heightJordan.style.opacity = "0";
      score++;
      guessHighScore.textContent = `${score}`;
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else if (guessPlayer.value === "Zach Lavine") {
      guessLavine.style.filter = "brightness(1)";
      guessAlert.textContent = "Show time!";
      heightLavine.style.opacity = "0";
      score++;
      guessHighScore.textContent = `${score}`;
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else {
      guessAlert.textContent = "Wrong!";
      trials--;
      guessScore.textContent = `${trials}`;
      if (trials === 0) {
        trials = 0;
        guessScore.textContent = `${trials}`;
        guessEndText.textContent = `You lost!`;
      }
    }
  }
});

btnAgain.addEventListener("click", function () {
  trials = 4;
  guessScore.textContent = `${trials}`;
  score = 0;
  guessHighScore.textContent = `${score}`;
  guessRodman.style.filter = "brightness(0)";
  guessRose.style.filter = "brightness(0)";
  guessJordan.style.filter = "brightness(0)";
  guessLavine.style.filter = "brightness(0)";
  heightRodman.style.opacity = "1";
  heightRose.style.opacity = "1";
  heightJordan.style.opacity = "1";
  heightLavine.style.opacity = "1";
  guessAlert.textContent = "Guess!";
  guessPlayer.value = "";
  guessEndText.textContent = "";
});
////////////////////////////////////////////////////////
