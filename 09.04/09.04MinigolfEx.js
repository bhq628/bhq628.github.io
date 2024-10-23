// Create an array with minigolf results of eight players 
let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    // Sort the array
    minigolf.sort();

    // Assign (tallenna) the smallest result of to a variable
   let mingolfResult = minigolf[0];

    // Assign the index of last array item to an variable
    let lastIndex = minigolf.length-1;


    // Assign the biggest result to a variable
    let maxGolfResult = minigolf[minigolf.length-1];


    // Write the answer on the page, to the answer div, as content of the div
    let output ="The smallest result is " + mingolfResult + " (winner)" + ".";
    output = output + "<br>The biggest result is " + maxGolfResult + ".";

    document.getElementById("answer").innerHTML = output;

}