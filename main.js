window.addEventListener('DOMContentLoaded', loadFunctions);

function loadFunctions() {
    getBurger();
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
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    navbar.classList.toggle('showBurgerNav');
    main.classList.toggle('blurEffects');
    footer.classList.toggle('blurEffects');
}
//#endregion Burger menu




