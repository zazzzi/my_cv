window.addEventListener('DOMContentLoaded', loadFunctions);

function loadFunctions() {
    getBurger();
    getGameBtn();

}


//#region Burger menu

/**
 * gets the button for the burger menu
 */
function getBurger() {
    const burger = document.querySelector('#burger');
    burger.addEventListener('click', openBurger);
}

/**
 * opens the burger menu over the DOM, and blurs the background 
 */
function openBurger() {
    const navbar = document.querySelector('#innerBurger');
    const burger = document.querySelector('#burger');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    navbar.classList.toggle('showBurgerNav');
    main.classList.toggle('blurEffects');
    footer.classList.toggle('blurEffects');
}
//#endregion Burger menu

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

        /**
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