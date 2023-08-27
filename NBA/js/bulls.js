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
