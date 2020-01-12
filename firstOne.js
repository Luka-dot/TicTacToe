const boxs = document.querySelectorAll('.box');
const numOfBoxes = 9;
let tempArr =[];
//console.log(boxs);
let clickCounter = 0;
let model = {

};
const pvpButton = document.getElementById('PvP');
const pveButton = document.getElementById('PvE');

PvP.addEventListener('click', startPvpGame);
PvE.addEventListener('click', startPveGame);

function hideButtons() {
  let buttons = document.getElementById('buttonsP');
  return buttons.style.display = "none"
};

// PvP game function
function startPvpGame() {
  console.log('PvP game started');
  hideButtons();

  boxs.forEach(box => {
    box.addEventListener('click', () =>  playGame(box))   // box.addEventListener('click', () =>  playGame(box))
  })

  function play(key) {
    playGame(key);       // playGame(key)
  };

// plr vs Plr game
  const playGame = function(box) {

    if (winnerCheck() === true) {
        return console.log('game is over');
    }
     else if (isEven(clickCounter) === true ) {
        if  (reply_click(box) === false ) {
            return console.log('already selected');
        }
    boxs.onclick = box.className = "symbol x" ;
    box.onclick = box.innerText = "x";
    checkingValue();
    if (winnerCheck() === true) {
        return view.displayMessage('player x WON');
    }
    clickCounter ++;

    } else {
        if  (reply_click(box) === false ) {
            return console.log('already selected');
        }
        boxs.onclick = box.className = "symbol o" ;
        box.onclick = box.innerText = "o";
        checkingValue();

         if (winnerCheck() === true) {
            return view.displayMessage('player o WON');
        }
        clickCounter ++;
        if (tieGameCheck() === true) {
            return view.displayMessage('game is tied')
        }
    }
    console.log('no of clicks ' + clickCounter);
};

// iterating thru DIV to get values for object
function checkingValue() {
  for (let i = 0; i < numOfBoxes; i++) {
      let divValue = document.getElementById(i).innerHTML;
      if (divValue === 'o') {
          model[i]= 'o';
      } if (divValue ==='x') {
          model[i] = 'x';
      }
  }
};

// check for field already selected
function reply_click(box)  {
  box = box.innerText;
  console.log(box);
  if (box === 'o' || box === 'x') {
  return false
  } else  {
      return true;
  }
};

// Is Odd or Even function used to alternate picks between X and o
function isEven(value) {
  if (value%2 == 0)
  return false;
else
  return true;
};

// to check for winner
function winnerCheck() {

  for (key in model) {
        if (model[0] ==='x' && model[1] ==='x' && model[2] ==='x') {
            return true;
        } if (model[3] ==='x' && model[4] ==='x' && model[5] ==='x') {
            return true;
        } if (model[6] ==='x' && model[7] ==='x' && model[8] ==='x') {
            return true;
        } if (model[0] ==='x' && model[3] ==='x' && model[6] ==='x') {
            return true;
        } if (model[1] ==='x' && model[4] ==='x' && model[7] ==='x') {
            return true;
        } if (model[2] ==='x' && model[5] ==='x' && model[8] ==='x') {
            return true;
        } if (model[0] ==='x' && model[4] ==='x' && model[8] ==='x') {
            return true;
        } if (model[2] ==='x' && model[4] ==='x' && model[6] ==='x') {
            return true;
        }
        if (model[0] ==='o' && model[1] ==='o' && model[2] ==='o') {
            return true;
        } if (model[3] ==='o' && model[4] ==='o' && model[5] ==='o') {
            return true;
        } if (model[6] ==='o' && model[7] ==='o' && model[8] ==='o') {
            return true;
        } if (model[0] ==='o' && model[3] ==='o' && model[6] ==='o') {
            return true;
        } if (model[1] ==='o' && model[4] ==='o' && model[7] ==='o') {
            return true;
        } if (model[2] ==='o' && model[5] ==='o' && model[8] ==='o') {
            return true;
        } if (model[0] ==='o' && model[4] ==='o' && model[8] ==='o') {
            return true;
        } if (model[2] ==='o' && model[4] ==='o' && model[6] ==='o') {
            return true;

        } else {
            return false;
        }
    }
};

function tieGameCheck() {
    if (winnerCheck() === false && clickCounter > 8) {
        return true
    }
}

var view = {
  displayMessage : function(msg) {
      let messageArea = document.getElementById('messageArea');
      messageArea.innerHTML = msg;
  }
};
view.displayMessage('player vs player');
};

// PvE game function
function startPveGame() {
  console.log('PvE game started');
  hideButtons();
  boxs.forEach(box => {
    box.addEventListener('click', () =>  playGameCpu(box))   // box.addEventListener('click', () =>  playGame(box))
})

function play(key) {
    // key.style.border = 'red';   // testing it here
    playGameCpu(key);       // playGame(key)
};

//  CPU picks
function reply_clickCpu(x)  {
    box = document.getElementById(x).innerText;
    // console.log(box);
    if (box === 'o' || box === 'x') {
    return false
    } else  {
        return true;
    }
};

// CPU pick part of the program.
function randomPick() {
    if (isEven(clickCounter) == true ) {
    let rPick = Math.floor(Math.random()*9);
    console.log(rPick);
    let box = (document.getElementById(rPick).innerText);
    if (reply_clickCpu(rPick) === false) {
        return randomPick();
    }
    //console.log( rPick + ' value check ' + reply_clickCpu(rPick))
    document.getElementById(rPick).className = "box o";
    document.getElementById(rPick).innerText = "o";
    checkingValue();
        clickCounter ++;
        if (winnerCheck() === true) {
            return view.displayMessage('You WON');  // x won
        }

    }
    console.log('no of clicks ' + clickCounter);
};

// to play against computer
const playGameCpu = function(box) {

    if (winnerCheck() === true) {
        return view.displayMessage('game is over');
    } else if (isEven(clickCounter) == false ) {
        if  (reply_click(box) === false ) {
            return view.displayMessage('already selected');
        }
    boxs.onclick = box.className = "symbol x" ;
    box.onclick = box.innerText = "x";
    checkingValue();
    clickCounter ++;
    if (tieGameCheck() === true) {
        return view.displayMessage('game is tie')
    }
    else if (winnerCheck() === true) {
        return view.displayMessage('You WON');  // x player

    } else {
        randomPick();
        if (winnerCheck() === true) {
            return view.displayMessage('Computer WON'); // o WON
        }
    }
}
    console.log('no of clicks ' + clickCounter);
};


// iterating thru DIV to get values for object
function checkingValue() {
    for (let i = 0; i < numOfBoxes; i++) {
        let divValue = document.getElementById(i).innerHTML;
        if (divValue === 'o') {
            model[i]= 'o';
        } if (divValue ==='x') {
            model[i] = 'x';
        }
    }
};

// check for field already selected
function reply_click(box)  {
    box = box.innerText;
    console.log(box);
    if (box === 'o' || box === 'x') {
    return false
    } else  {
        return true;
    }
};

// Is Odd or Even function used to alternate picks between X and o
function isEven(value) {
    if (value%2 == 0)
    return false;
else
    return true;
};

// to check for winner
function winnerCheck() {

    for (key in model) {
        if (model[0] ==='x' && model[1] ==='x' && model[2] ==='x') {
            return true;
        } if (model[3] ==='x' && model[4] ==='x' && model[5] ==='x') {
            return true;
        } if (model[6] ==='x' && model[7] ==='x' && model[8] ==='x') {
            return true;
        } if (model[0] ==='x' && model[3] ==='x' && model[6] ==='x') {
            return true;
        } if (model[1] ==='x' && model[4] ==='x' && model[7] ==='x') {
            return true;
        } if (model[2] ==='x' && model[5] ==='x' && model[8] ==='x') {
            return true;
        } if (model[0] ==='x' && model[4] ==='x' && model[8] ==='x') {
            return true;
        } if (model[2] ==='x' && model[4] ==='x' && model[6] ==='x') {
            return true;
        }
        if (model[0] ==='o' && model[1] ==='o' && model[2] ==='o') {
            return true;
        } if (model[3] ==='o' && model[4] ==='o' && model[5] ==='o') {
            return true;
        } if (model[6] ==='o' && model[7] ==='o' && model[8] ==='o') {
            return true;
        } if (model[0] ==='o' && model[3] ==='o' && model[6] ==='o') {
            return true;
        } if (model[1] ==='o' && model[4] ==='o' && model[7] ==='o') {
            return true;
        } if (model[2] ==='o' && model[5] ==='o' && model[8] ==='o') {
            return true;
        } if (model[0] ==='o' && model[4] ==='o' && model[8] ==='o') {
            return true;
        } if (model[2] ==='o' && model[4] ==='o' && model[6] ==='o') {
            return true;

        } else {
            return false;
        }
    }
};

function tieGameCheck() {
    if (winnerCheck() === false && clickCounter > 8) {
        return true
    }
}

var view = {
    displayMessage : function(msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    }
};
view.displayMessage('you vs computer');
};
