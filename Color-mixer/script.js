changeColor();

function changeColor() {
  let redSlider = document.querySelector("#red").value;
  let greenSlider = document.querySelector("#green").value;
  let blueSlider = document.querySelector("#blue").value;

  /*let color = "rgb(" + redSlider + "," + greenSlider + "," + blueSlider + ")";*/
  let color = rgbToHex(parseInt(redSlider), parseInt(greenSlider), parseInt(blueSlider));

  document.body.style.backgroundColor = color;
  document.querySelector("#color-value").innerText = color;
}

function rgbToHex(redSlider, greenSlider, blueSlider) {
  let hexRed = redSlider.toString(16);
  let hexBlue = greenSlider.toString(16);
  let hexGreen = blueSlider.toString(16);

  prefixHex(hexRed);
  prefixHex(hexGreen);
  prefixHex(hexBlue);

  return "#" + prefixHex(hexRed) + prefixHex(hexBlue) + prefixHex(hexGreen);
}

function prefixHex(hex) {
  if (hex.length < 2) {
    return "0" + hex;
  } else {
    return hex;
  }
}

document.querySelector("#red").addEventListener("input", changeColor);
document.querySelector("#green").addEventListener("input", changeColor);
document.querySelector("#blue").addEventListener("input", changeColor);

document.querySelector("button").addEventListener("click", function() {
  const url ="https://dummy-apis.netlify.app/api/color";
  fetch(url)
  .then(response => response.json())
  .then(data => {

    let output = data.color;
    document.querySelector("#color-value").innerText = output;
    
    setColor(data.rgb);
      document.body.style.backgroundColor = data.color;
      document.querySelector("#color-value").innerHTML = " " + data.color;
  });
});

function setColor({ r, g, b }) {
  document.querySelector("#red").value = r;
  document.querySelector("#green").value = g;
  document.querySelector("#blue").value = b;
}

