
window.addEventListener('DOMContentLoaded', loadFunctions);

function loadFunctions() {
    getGameBtn();
}


//#region Jumping game

/**
 * gets the Start button to start the game. 
 */
function getGameBtn() {
    const gameBtn = document.getElementById('gameBtn');
    gameBtn.addEventListener('click', gameStart);
}
/**
 * The main game function, here is were the whole game is
 * defines the different elements 
 */
function gameStart() {
    const jumper = document.getElementById('jumper');
    const obstacle = document.getElementById('obstacle');
    const gameDiv = document.getElementById('game');
    let counter = 0; //counter for score
    obstacle.classList.add('animateObstacle'); //adds the movment animation for the obstacle
    gameDiv.addEventListener('click', jump); //eventlistener for adding the jump to the jumper

    /**
     * Function for adding the jumping animation
     * (if animateJump is already on classlist, don't add class)
     * then setTimeout and removes the class every 500ms
     */
    function jump() {
        if (jumper.classList != 'animateJump') {
            jumper.classList.add('animateJump');
        }
        setTimeout(function () {
            jumper.classList.remove('animateJump');
        }, 500)
    }
    /*
     * interval for checking if jumper misses the jump (death)
     */
    const dead = setInterval(() => {
        const jumperTop = parseInt(window.getComputedStyle(jumper).getPropertyValue('top')); //gets the top value for the jumper from the css (parseInt returns the value as an int, removes the px)
        const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left')); //gets the left value for the obstacle from the css (parseInt returns the value as an int, removes the px)

        /*
         * runs and interval and checks the jumpers top value and obstacle left value to check for death.
         * if dead clears the interval and removes the obstacle animation
         * if player is not dead adds score to the counter and continues interval
         */
        if (obstacleLeft < 32 && obstacleLeft > -32 && jumperTop >= 73) {
            obstacle.classList.remove('animateObstacle');
            counter = 0;
            clearInterval(dead);
        } else {
            counter++;
            document.getElementById('score').innerHTML = counter;
        }
    }, 50);

}

//#endregion Jumping game