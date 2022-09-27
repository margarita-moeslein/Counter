let num = document.querySelector("#num").innerText;
let main = document.querySelector("main");
let btn = document.querySelector("button");
let count = 0;

main.onclick = function () {
  count += 1;
  let size = count + "%";
  document.querySelector("#num").innerText = count;
  main.style.backgroundSize = size;
};
btn.onclick = function () {
  document.querySelector("#num").innerText = 0;
  count = 0;
  main.style.backgroundSize = 0;
};

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    count += 1;
    let size = count + "%";
    document.querySelector("#num").innerText = count;
    main.style.backgroundSize = size;
  } else if (event.code === "Enter") {
    count += 1;
    let size = count + "%";
    document.querySelector("#num").innerText = count;
    main.style.backgroundSize = size;
  }
});
