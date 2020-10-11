const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const compStyles = getComputedStyle(items);

let positionRight = 0;

rightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let positionRight = parseInt(compStyles.right);
  if (positionRight < 500) {
    items.style.right = `${positionRight + 100}px`;
  }
});

leftBtn.addEventListener("click", e => {
  e.preventDefault();
  let positionRight = parseInt(compStyles.right);
  if (positionRight > 0) {
    items.style.right = `${positionRight - 100}px`;
  }
});