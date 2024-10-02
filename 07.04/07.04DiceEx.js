function getRandomInteger(min, max) {
    // Return randomizedNumber between 'min' and 'max'.
    let tulos;


    //Laskenta
    tulos = Math.floor((Math.random() * max) + min);
    
    // Tuloksem palautus kutuneelle funktiolle
    return tulos;
}

function rollTheDice() {
    // 1. Call the function getRandomInteger(min, max) with parameter values 1 and 6, and assign the return value of the function to the variable.
    let max = 6;
    let min = 1;
    let tulos = getRandomInteger(min, max);
    // 2. Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
    document.getElementById("dice").innerHTML = tulos;
}