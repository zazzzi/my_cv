window.addEventListener('DOMContentLoaded', loadFunctions);

function loadFunctions() {
    getBurger();

    /*
     *only runs the appearing text on the index page 
     */
    if (window.location.href.indexOf('/') > 0) {
        textAppear();
    }
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



//#region Appearing text

/**
 * function to make text appear on the DOM as if its being type out.
 */
function textAppear() {
    let i = 0;
    const textToBeInjected = 'Hi. I am Front End Developer in learning.'
    const speed = 60;

    writingText();


    /**
     * Function to inject the text as in if being typed
     * The if statement in this function adds the content of textToBeInjected to the h2 element. 
     * To get the effect of the text being typed, the character with the value of (i) is chosen to be printed, the function then adds 1 to i and runs again. 
     */
    function writingText() {
        if (i < textToBeInjected.length) {
            document.getElementById('textField').innerHTML += textToBeInjected.charAt(i); // charAt(i) is used to choose the symbol with the value i from the string textToBeInjected
            i++
            setTimeout(writingText, speed);
        }
    }
}

//#endregion Appearing text
