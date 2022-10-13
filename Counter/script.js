const counter = document.querySelector("#counting-number");
const main = document.querySelector("main");
const resetButton = document.querySelector("#reset-btn");

let countingNumber = 0;

main.addEventListener("click", function () {
  countingNumber++;
  main.style.setProperty("--progress", countingNumber + "%");
  counter.innerText = countingNumber;
});

document.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "Enter") {
    countingNumber++;
    main.style.setProperty("--progress", countingNumber + "%");
    counter.innerText = countingNumber; 
  }
});

resetButton.addEventListener("click", function () {
  countingNumber = 0;
  counter.innerText = countingNumber;
  if (countingNumber === 101) {
    resetBackground();
  }
});
