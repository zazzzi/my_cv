//#region Jumping game

function getGameBtn() {
    const gameBtn = document.getElementById('gameBtn');
    gameBtn.addEventListener('click', gameStart);
}
/**
 * The main game function, here is were the whole game is
 */
function gameStart() {
    const jumper = document.getElementById('jumper');
    const obstacle = document.getElementById('obstacle');
    const gameDiv = document.getElementById('game');
    let counter = 0;
    obstacle.classList.add('animateObstacle');
    gameDiv.addEventListener('click', jump); //eventlistener for adding the jump to the jumper

    /**
     * Function for adding the jumping animation
     * if animateJump is already on classlist, cant add list 
     * then sets timeout and removes the class every 500ms
     */
    function jump() {
        if (jumper.classList != 'animateJump') {
            jumper.classList.add('animateJump');
        }
        setTimeout(function () {
            jumper.classList.remove('animateJump');
        }, 500)
    }
    /**
     * interval for checking if jumper misses the jump (death)
     */
    const dead = setInterval(() => {
        const jumperTop = parseInt(window.getComputedStyle(jumper).getPropertyValue('top')); //gets the top value for the jumper from the css (parseInt returns the value as an int, removes the rem)
        const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left')); //gets the left value for the obstacle from the css (parseInt returns the value as an int, removes the rem)

        /*
         * runs and interval and checks the jumpers top value and obstacle left value to check for death.
         * if dead clears the interval and removes the obstacle animation
         * if player is not dead adds score to the counter and continues interval
         */
        if (obstacleLeft < 32 && obstacleLeft > -32 && jumperTop >= 73) {
            console.log('dead');
            console.log(obstacleLeft);
            console.log(jumperTop);
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