function changeBG() {
  // color randomizer from https://stackoverflow.com/a/5365036
  let randomColor =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = randomColor;
}

const colorBtn = document.getElementById("colorButton");
colorBtn.addEventListener("click", changeBG);
