const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
// const resetCount = document.querySelector(".reset");

buttons.addEventListener("click", (e) => {
  if(e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if(e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if(e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
  if(e.target.classList.contains("max")) {
    count.innerHTML = 999;
    setColor();
  }
  if(e.target.classList.contains("min")) {
    count.innerHTML = -999;
    setColor();
  }
  if(count.innerHTML === "1000") {
    count.innerHTML = "Max Number";
    count.style.color = "red";
  }
})

function setColor() {
  if(count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "white";
  }
}

// add.addEventListener("click", () => {
//   count.innerHTML++;
// })

// subtract.addEventListener("click", () => {
//   count.innerHTML--;
// })

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// })