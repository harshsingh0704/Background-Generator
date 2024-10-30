var body = document.body;
var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");
var gradientHeading = document.querySelector("h3");
var btnGenerator = document.querySelector(".generator-button");
function setGradientBackground() {
    // Get the values from the color inputs
    const color1 = colorInput1.value;
    const color2 = colorInput2.value;
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    body.style.background = gradient;
    btnGenerator.style.background = gradient;
 
  gradientHeading.textContent = gradient + ";";
}

function generateRandomColors() {
 
  var randomColor1 = getRandomColor();
  var randomColor2 = getRandomColor();
  
  colorInput1.value = randomColor1;
  colorInput2.value = randomColor2;

  setGradientBackground();
}

  
 
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
colorInput1.addEventListener("input", setGradientBackground);
colorInput2.addEventListener("input", setGradientBackground);
btnGenerator.addEventListener("click", generateRandomColors);