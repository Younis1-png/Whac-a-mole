const gridDisplay = document.getElementById("grid");
const mole = document.querySelector(".mole");
const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time_left");
const score = document.querySelector("#score");

let result = 0;

function randomSquare() {
  // remove the class name of mole
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  // Get a random square
  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = squares[randomNumber];
  //   console.log(randomPosition);

  // add to our random square the mole class
  randomSquare.classList.add("mole");
}

randomSquare();
