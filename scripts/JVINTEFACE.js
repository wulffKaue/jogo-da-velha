let message = document.getElementById("messagewinner");

document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  soundPosition();
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      soundWin();
      message.innerHTML = `Jogador ${playerTime} venceu!`;
      message.style.visibility = "visible";
    }, 10);
  }
  updateSquares(position);
}

function updateSquares(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function soundPosition() {
  let soundPosition = new Audio("imagens/sounds/positionSound.mp3");

  soundPosition.currentTime = 0;
  soundPosition.play();
}

function soundWin() {
  let soundWin = new Audio("imagens/sounds/soundWin.mp3");

  soundWin.currentTime = 0;
  soundWin.play();
}

function soundReset() {
  let soundReset = new Audio("imagens/sounds/soundReset.wav");

  soundReset.currentTime = 0;
  soundReset.play();
}
