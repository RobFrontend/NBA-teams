"use strict";

////////////////////////////////////////
//// SHOW ADDITIONAL IMG BY HOVER CENTER IMG

const imgCenter = document.querySelector(".img-center");
const imgAdd = document.querySelector(".img-add");

imgCenter.addEventListener("mouseover", function () {
  imgAdd.style.opacity = "1";
});

imgCenter.addEventListener("mouseleave", function () {
  imgAdd.style.opacity = "0";
});

/////////////////////////////////////////////
////// COMPARE HEIGHT //////////////

let heightYou = document.querySelector(".img-compare-you");
let heightPlayer = document.querySelector(".img-compare-player");
let heightInput = document.querySelector(".input-height");
const submitHeight = document.querySelector(".input-submit");
let heightAlert = document.querySelector(".alert-p");

submitHeight.addEventListener("click", function () {
  if (Number(heightInput.value) <= 250 && Number(heightInput.value) > 0) {
    heightYou.style.height = `${Number(heightInput.value) * 1.7}px`;
    heightYou.style.opacity = "1";
    heightAlert.textContent = "";
  } else {
    heightAlert.textContent = `250cm is maximum and you must type at least 1cm!`;
  }
});
////////////////////////////////////////////////
