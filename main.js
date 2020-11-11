window.addEventListener('DOMContentLoaded', loadFunctions);

function loadFunctions() {
    getBurger();
    getGameBtn();
    gameStart();
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
    gameDiv.addEventListener('click', jump); //eventlistener for adding the jump to the jumper

    /**
     * Function for adding the jumping animation
     */
    function jump() {
        if (jumper.classList != 'animateJump') {
            jumper.classList.add('animateJump');
        }
        setTimeout(function () {
            jumper.classList.remove('animateJump');
        }, 500)


        console.log('jump')
    }
    /**
     * interval for checking if jumper misses the jump (death)
     */
    setInterval(() => {
        const jumperTop = parseInt(window.getComputedStyle(jumper).getPropertyValue('top')); //gets the top value for the jumper from the css (parseInt returns the value as an int, removes the rem)
        const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left')); //gets the left value for the obstacle from the css (parseInt returns the value as an int, removes the rem)

        if(obstacleLeft < 32 && obstacleLeft>-32 && jumperTop >=73 ) {
            console.log('dead')
            console.log(obstacleLeft)
            console.log(jumperTop)
            obstacle.style.animation = "none";
            obstacle.style.display = "none";   
        } else {
            counter++;
        }
    }, 20);

}

//#endregion Jumping game