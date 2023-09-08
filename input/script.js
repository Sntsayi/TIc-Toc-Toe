const allButton = document.querySelectorAll(".buttons");
const restartGame = document.querySelector(".ResetGame");
const whoTurn = document.querySelector(".textTurn");
const time = document.querySelector(".time");
const clock = document.querySelector(".clock");

// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
let checkDrawOrWinEmpty = ["", "", "", "", "", "", "", "", ""];
let x_o = ["X", "O"];
let currentPlayer = x_o[0];
whoTurn.innerHTML = `Player ${currentPlayer} ' s turn`;
initialPlayer();
resetGame(restartGame);

// initialPlayer
function initialPlayer() {
  allButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.innerHTML = currentPlayer;
      btn.disabled = true;
      logicWin();
      changePlayer();
    });
  });
}

//changePlayer
function changePlayer() {
  currentPlayer =
    currentPlayer == x_o[0]
      ? (currentPlayer = x_o[1])
      : (currentPlayer = x_o[0]);
  whoTurn.innerHTML = `Player ${currentPlayer} ' s turn.`;
}

let audioWin = new Audio("./Audio/win.mp3");
let audioDraw = new Audio("./Audio/draw.mp3");
//logic of win
function logicWin() {
  if (
    (allButton[0].innerHTML == currentPlayer &&
      allButton[1].innerHTML == currentPlayer &&
      allButton[2].innerHTML == currentPlayer) ||
    (allButton[3].innerHTML == currentPlayer &&
      allButton[4].innerHTML == currentPlayer &&
      allButton[5].innerHTML == currentPlayer) ||
    (allButton[6].innerHTML == currentPlayer &&
      allButton[7].innerHTML == currentPlayer &&
      allButton[8].innerHTML == currentPlayer) ||
    (allButton[0].innerHTML == currentPlayer &&
      allButton[3].innerHTML == currentPlayer &&
      allButton[6].innerHTML == currentPlayer) ||
    (allButton[1].innerHTML == currentPlayer &&
      allButton[4].innerHTML == currentPlayer &&
      allButton[7].innerHTML == currentPlayer) ||
    (allButton[2].innerHTML == currentPlayer &&
      allButton[5].innerHTML == currentPlayer &&
      allButton[8].innerHTML == currentPlayer) ||
    (allButton[0].innerHTML == currentPlayer &&
      allButton[4].innerHTML == currentPlayer &&
      allButton[8].innerHTML == currentPlayer) ||
    (allButton[2].innerHTML == currentPlayer &&
      allButton[4].innerHTML == currentPlayer &&
      allButton[6].innerHTML == currentPlayer)
  ) {
    audioWin.play();
    audioWin.loop;
    // alert(`Player ${currentPlayer} is winner`);
    swal({
      title: `Congratulations Player ${currentPlayer} 👏`,
      text: `Player ${currentPlayer} is winner.`,
      icon: "info",
    });

    restartGame.classList.remove("hidden");
    whoTurn.classList.add("hidden");
    for (let num in allButton) {
      allButton[num].disabled = true;
    }
  } else {
    if (
      allButton[0].innerHTML != checkDrawOrWinEmpty[0] &&
      allButton[1].innerHTML != checkDrawOrWinEmpty[1] &&
      allButton[2].innerHTML != checkDrawOrWinEmpty[2] &&
      allButton[3].innerHTML != checkDrawOrWinEmpty[3] &&
      allButton[4].innerHTML != checkDrawOrWinEmpty[4] &&
      allButton[5].innerHTML != checkDrawOrWinEmpty[5] &&
      allButton[6].innerHTML != checkDrawOrWinEmpty[6] &&
      allButton[7].innerHTML != checkDrawOrWinEmpty[7] &&
      allButton[8].innerHTML != checkDrawOrWinEmpty[8]
    ) {
      audioDraw.play();
      audioDraw.loop;
      // alert("GAME IS DRAW!!");
      swal({
        title: `Game Was Draw 😢`,
        text: `if you play again click button Play again .....Good Luck💓.`,
        icon: "info",
      });

      restartGame.classList.remove("hidden");
      whoTurn.classList.add("hidden");
      for (let num in allButton) {
        allButton[num].disabled = true;
      }
    }
  }
}
//resetButton
function resetGame(btn) {
  btn.addEventListener("click", () => {
    currentPlayer = x_o[0];
    whoTurn.innerHTML = `Player ${currentPlayer} ' s turn`;
    audioWin.pause();
    audioDraw.pause();
    for (let num in allButton) {
      allButton[num].innerHTML = "";
      allButton[num].disabled = false;
    }
    whoTurn.classList.remove("hidden");
  });
}

// //set TimeOut

// function timeOut() {
//   let timeNum = 10;
//   const myInterval = setInterval(() => {
//     time.innerHTML = timeNum;
//     timeNum--;
//     if (time.innerHTML == 0) {
//       clearInterval(myInterval);
//       if (currentPlayer == x_o[0]) {
//         alert(
//           `Player ${currentPlayer}: Your time is finished!!! YOU LOSE!. Player ${x_o[1]} is won!`
//         );
//       } else {
//         alert(
//           `Player ${currentPlayer}: Your time is finished!!! YOU LOSE!. Player ${x_o[0]} is won!`
//         );
//       }
//     }
//     // if (event.target.dataset.name === "btn") {
//     //   clearInterval(myInterval);
//     // }
//   }, 1000);
// }
