<<<<<<< HEAD
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

// let arr2=[
// ["apple","mushrom"],["cpotato", "litichi"],["pant", "tshirt"]

// ];
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//for making each button clickable we use eventlistner in it
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    // box.innerHTML="abcd";
    if (turn) {
      //player 0
      box.innerText = "O";
      turn = false;
    } else {
      //plauyer x
      box.innerText = "x";
      turn = true;
    }

    // for making box disable so that at one time one value only stoered into it
    box.disabled = true;

    WinnerCheck();
  });
});

// making disbled function so that more than one winner canoot be output
const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// for showing confittie effect on website
function showWinner(winner) {
  msg.innerText = `congratulation , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbox();

  
  showAnimation();
}

const jsConfetti = new JSConfetti();

function showAnimation() {
  jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
}

const WinnerCheck = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = ""; // Clears the text in the box
    msgContainer.classList.add("hide");
    enableBoxes();
  });
  turn = true;
});
=======
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

// let arr2=[
// ["apple","mushrom"],["potato", "litichi"],["pant", "tshirt"]

// ];
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//for making each button clickable we use eventlistner in it
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    // box.innerHTML="abcd";
    if (turn) {
      //player 0
      box.innerText = "O";
      turn = false;
    } else {
      //plauyer x
      box.innerText = "x";
      turn = true;
    }

    // for making box disable so that at one time one value only stoered into it
    box.disabled = true;

    WinnerCheck();
  });
});

// making disbled function so that more than one winner canoot be output
const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// for showing confittie effect on website
function showWinner(winner) {
  msg.innerText = `congratulation , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbox();

  
  showAnimation();
}

const jsConfetti = new JSConfetti();

function showAnimation() {
  jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
}

const WinnerCheck = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = ""; // Clears the text in the box
    msgContainer.classList.add("hide");
    enableBoxes();
  });
  turn = true;
});
>>>>>>> 89dc164a7283aa4d191050857b49a879acd18ea3
