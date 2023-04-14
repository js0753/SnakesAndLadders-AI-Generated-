let playerPosition = 1; // starting position of the player

function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6
    document.getElementById("dice-roll").innerHTML = "You rolled a " + diceRoll;
    movePlayer(diceRoll);
    }
    
    function movePlayer(numSpaces) {
    let newPosition = playerPosition + numSpaces;
    let currentSquare = document.getElementById("square-" + playerPosition);
    let newSquare = document.getElementById("square-" + newPosition);
    
    currentSquare.classList.remove("player"); // remove player from current square
    newSquare.classList.add("player"); // add player to new square
    
    playerPosition = newPosition; // update player's position
    
    if (newPosition === 3 || newPosition === 8 || newPosition === 13) {
    displayMathProblem();
    }
    }
    
    function displayMathProblem() {
    // code to display a math problem with 4 answer choices and a timer
    }