const numberGenerator = document.querySelector(".randomNumber");
const button = document.querySelector(".buttons button");

const generateNumber = () => {
  const random = Math.floor(Math.random() * 100);
  numberGenerator.innerHTML = random;
}

button.addEventListener("click", generateNumber);
generateNumber();

// button.addEventListener("click", () => {
//   const random = Math.floor(Math.random() * 100);
//   numberGenerator.innerHTML = random;
// });