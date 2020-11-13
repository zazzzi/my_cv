window.addEventListener('DOMContentLoaded', loadFunctions);

function loadFunctions() {
    getBurger();
    textAppear();
    getCovidBtn();

}


//#region Appearing text

/**
 * function to make text appear on the DOM as if its being type out.
 */
function textAppear() {
    let i = 0;
    const textToBeInjected = 'Hi. I am Front End Developer in learning.'
    const speed = 70;

    writingText();


    /**
     * Function to inject the text as in if being typed
     * The if statement in this function adds the content of textToBeInjected to the h2 element. 
     * To get the effect of the text being typed, the character with the value of (i) is chosen to be printed, the function then adds 1 to i and runs again with a timeout. 
     */
    function writingText() {
        if (i < textToBeInjected.length) {
            document.getElementById('textField').innerHTML += textToBeInjected.charAt(i); // charAt(i) is used to pick the symbol with the placement corresponding to the value of i from the string textToBeInjected
            i++
            setTimeout(writingText, speed);
        }
    }
}

//#endregion Appearing text

//#region Covid 

/**
 * gets the button for the picture toggle
 */
function getCovidBtn(){
    const covidBtn = document.getElementById('covidBtn');
    covidBtn.addEventListener('click', toggleCovid)
}
/**
 * removes class hidden from one of the pictures and adds it to the other.
 */
function toggleCovid(){
    const zazziNoCovid = document.getElementById('zazziNoCovid');
    const zazziCovid = document.getElementById('zazziCovid');
    
    zazziCovid.classList.toggle('hidden'); 
    zazziNoCovid.classList.toggle('hidden'); 
}

//#endregion Covid