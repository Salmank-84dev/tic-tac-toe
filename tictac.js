let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.classList.add("o-style");
      turn0 = false;
    } else {
      box.innerText = "X";
      box.classList.add("x-style");
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
};
const showWinner = (winner) => {
  msg.innerText = `Congrats, winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
        disableAllBoxes();
        return;
      }
    }
  }
};

const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);