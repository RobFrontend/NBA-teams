"use strict";

////////////////////////////////////////////
/* PLAYER NAME HOVER*/
// AND PLAYER OBJECT
/////////////////////////////////////////////////
const playerName = document.querySelector(".player-name");
const addPlayerName = document.querySelector(".add-player-name");

const lebronHover = document.querySelector(".img-render-lebron");
const lebron = {
  fullName: "LeBron James",
  height: 206,
  mvpNumber: 4,
};
lebronHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${lebron.fullName}`;
  lebronHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const davisHover = document.querySelector(".img-render-davis");
const davis = {
  fullName: "Anthony Davis",
  height: 208,
  mvpNumber: 0,
};
davisHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${davis.fullName}`;
  davisHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const magicHover = document.querySelector(".img-render-magic");
const magic = {
  fullName: "Earvin Johnson",
  height: 206,
  mvpNumber: 3,
};
const kareem = {
  fullName: "Kareem Abdul-Jabbar",
  height: 218,
  mvpNumber: 6,
};
magicHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  addPlayerName.style.opacity = "0.7";
  playerName.textContent = `${magic.fullName}`;
  addPlayerName.textContent = `${kareem.fullName}`;
  magicHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
    addPlayerName.style.opacity = "0";
  });
});

const kobeHover = document.querySelector(".img-render-kobe");
const kobe = {
  fullName: "Kobe Bryant",
  height: 198,
  mvpNumber: 4,
};
kobeHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${kobe.fullName}`;
  kobeHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const shaqHover = document.querySelector(".img-render-shaq");
const shaq = {
  fullName: "Shaquille O'Neal",
  height: 216,
  mvpNumber: 1,
};
shaqHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${shaq.fullName}`;
  shaqHover.addEventListener("mouseleave", function () {
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
