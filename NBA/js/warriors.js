"use strict";

/* PLAYER NAME HOVER*/
/////////////////////////////////////////////////
const playerName = document.querySelector(".player-name");
const addPlayerName = document.querySelector(".add-player-name");

const klayHover = document.querySelector(".img-render-klay");
const klay = {
  fullName: "Klay Thompson",
  height: 198,
  mvpNumber: 0,
};
klayHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${klay.fullName}`;
  klayHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const andreHover = document.querySelector(".img-render-andre");
const andre = {
  fullName: "Andre Iguodala",
  height: 198,
  mvpNumber: 0,
};
andreHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${andre.fullName}`;
  andreHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const curryHover = document.querySelector(".img-render-curry");
const curry = {
  fullName: "Stephen Curry",
  height: 191,
  mvpNumber: 2,
};
const wilt = {
  fullName: "Wilt Chamberlain",
  height: 216,
  mvpNumber: 4,
};
curryHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  addPlayerName.style.opacity = "0.7";
  playerName.textContent = `${curry.fullName}`;
  addPlayerName.textContent = `${wilt.fullName}`;
  curryHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
    addPlayerName.style.opacity = "0";
  });
});

const greenHover = document.querySelector(".img-render-green");
const green = {
  fullName: "Draymond Green",
  height: 198,
  mvpNumber: 0,
};
greenHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${green.fullName}`;
  greenHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const durantHover = document.querySelector(".img-render-durant");
const durant = {
  fullName: "Kevin Durant",
  height: 208,
  mvpNumber: 1,
};
durantHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${durant.fullName}`;
  durantHover.addEventListener("mouseleave", function () {
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
// WARRIORS PLAYERS BTNS
const compCurry = document.querySelector(".img-compare-curry");
const btnCurry = document.querySelector(".btn-choose-curry");
compCurry.style.height = `${curry.height * 1.7 + 3}px`;
btnCurry.addEventListener("click", function () {
  compCurry.classList.remove("img-hidden");
});

const compAndre = document.querySelector(".img-compare-andre");
compAndre.style.height = `${andre.height * 1.7 + 3}px`;
const btnAndre = document.querySelector(".btn-choose-andre");
btnAndre.addEventListener("click", function () {
  compAndre.classList.remove("img-hidden");
});

const compKlay = document.querySelector(".img-compare-klay");
compKlay.style.height = `${klay.height * 1.7 + 3}px`;
const btnKlay = document.querySelector(".btn-choose-klay");
btnKlay.addEventListener("click", function () {
  compKlay.classList.remove("img-hidden");
});

const compGreen = document.querySelector(".img-compare-green");
compGreen.style.height = `${green.height * 1.7 + 3}px`;
const btnGreen = document.querySelector(".btn-choose-green");
btnGreen.addEventListener("click", function () {
  compGreen.classList.remove("img-hidden");
});

const compDurant = document.querySelector(".img-compare-durant");
compDurant.style.height = `${durant.height * 1.7 + 3}px`;
const btnDurant = document.querySelector(".btn-choose-durant");
btnDurant.addEventListener("click", function () {
  compDurant.classList.remove("img-hidden");
});

const compWilt = document.querySelector(".img-compare-wilt");
compWilt.style.height = `${wilt.height * 1.7 + 3}px`;
const btnWilt = document.querySelector(".btn-choose-wilt");
btnWilt.addEventListener("click", function () {
  compWilt.classList.remove("img-hidden");
});
///////////////////////////////////////////////////
