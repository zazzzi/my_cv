window.addEventListener(onload, loadFunctions());

function loadFunctions() {
    console.log('Im sorry Dave, Im afraid i cant do that.');
    getBurger();
}


/**
 * Burger menu
 */
function getBurger() {
    const burger = document.querySelector('#burger');

    burger.addEventListener('click', openBurger);
}

function openBurger() {
    const navbar = document.querySelector('#innerBurger');
    const burger = document.querySelector('#burger');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer')

    navbar.classList.toggle("showBurgerNav");
    burger.classList.toggle("closedBurgerNav");
    main.classList.toggle('blurEffects');
    footer.classList.toggle('blurEffects')
}
