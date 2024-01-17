var boardBox = document.getElementsByClassName('myBox');
var red = "red";
var blue = "blue";
var white = "white";
var currentPlayer = "red"; // start with player 1

// set the initial background color of all boardBox elements to white
for (var i = 0; i < boardBox.length; i++) {
    boardBox[i].style.backgroundColor = white;
  }

//the code below ensures that an event listener is added to
//each of the myBox elements
for (var i = 0; i < boardBox.length; i++) {
    
    boardBox[i].addEventListener("click", function() {
        if (this.style.backgroundColor === "white") { //something wacky going on this line, basically omitting it will make the boxes clickable
        this.style.backgroundColor = currentPlayer;
        checkWin();
        currentPlayer = (currentPlayer === "red") ? "blue" : "red"; // switch players
        }
    });
  }
  
  function checkWin() {
    // check for horizontal wins
    for (var i = 0; i < boardBox.length; i += 3) {
      if (boardBox[i].style.backgroundColor === boardBox[i+1].style.backgroundColor 
          && boardBox[i+1].style.backgroundColor === boardBox[i+2].style.backgroundColor
          && boardBox[i].style.backgroundColor !== "white") {
            alert(currentPlayer + " wins!");
          
            return;
      }
    }

     // check for vertical wins
    for (var i = 0; i < 3; i++) {
    if (boardBox[i].style.backgroundColor === boardBox[i+3].style.backgroundColor 
        && boardBox[i+3].style.backgroundColor === boardBox[i+6].style.backgroundColor
        && boardBox[i].style.backgroundColor !== "white") {
          alert(currentPlayer + " wins!");
          
          return;
    }
    } //Be EXTREMELY CAREFUL of nesting functions and LOOPS.

    
        // check for diagonal wins. NOTE: diagonal has a funky way of reading the array arrangement as opposed to vert and hori
      if (boardBox[0].style.backgroundColor === boardBox[4].style.backgroundColor 
        && boardBox[4].style.backgroundColor === boardBox[8].style.backgroundColor
        && boardBox[0].style.backgroundColor !== "white") {
          alert(currentPlayer + " wins!");
          
          return;
    }

      if (boardBox[2].style.backgroundColor === boardBox[4].style.backgroundColor 
            && boardBox[4].style.backgroundColor === boardBox[6].style.backgroundColor
            && boardBox[2].style.backgroundColor !== "white") {
              alert(currentPlayer + " wins!");
              
              return;
          }
    
  
  }



function countColors() {
    var redCount = 0;
    var blueCount = 0;
    for (var i = 0; i < boardBox.length; i++) {
      if (boardBox[i].style.backgroundColor === "red") {
        redCount++;
      } else if (boardBox[i].style.backgroundColor === "blue") {
        blueCount++;
      }
    }
  
}

var resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {
    resetBoxes();
});

function resetBoxes() {
    for (var i = 0; i < boardBox.length; i++) {
      boardBox[i].style.backgroundColor = "white";
    }
    currentPlayer = "red"; // reset to player 1 after resetting the board
}

alert("Red squares: " + redCount);
alert("Blue squares: " + blueCount);