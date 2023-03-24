const generator = document.querySelector(".generate");
const hex = document.querySelector(".random-hex");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerText = "#" + randomColor;
  hex.style.color = "#" + randomColor;
  hex.style.borderColor = "#" + randomColor;
}

generator.addEventListener("click", generateColor);

generateColor();