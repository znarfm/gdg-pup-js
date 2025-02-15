// your code starts here
function incrementCount() {
  counter++;
  counterText.textContent = counter;
}

function decrementCount() {
  if (counter > 0) counter--;
  counterText.textContent = counter;
}

const counterText = document.querySelector("#counter-text");
const addBtn = document.querySelector("#button-add");
const minusBtn = document.querySelector("#button-subtract");

let counter = 0;

addBtn.addEventListener("click", incrementCount);
minusBtn.addEventListener("click", decrementCount);
