const disco_btn = document.getElementById("disco_btn");

// background.style.backgroundColor = "white";

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const disco_changer = () => {
  const rnd_col = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  const rand_num = random(100);
  disco_btn.style.backgroundColor = rnd_col;
  disco_btn.style.padding = `${rand_num}px`;
};

disco_btn.addEventListener("click", disco_changer);
