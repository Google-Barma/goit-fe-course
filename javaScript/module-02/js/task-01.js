"use strict";

const buttonRef = document.querySelector(".task-one__btn");

const logItems = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

buttonRef.addEventListener("click", () => {
  logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});
