function calculateCosts() {

        //TODO

    //list
    var kilometers = document.getElementById("kilometers").value;
    var consumption = document.getElementById("consumption").value;
    var price = document.getElementById("price").value;
    var participants = document.getElementById("participants").value;
    
    //calc.
    var fuelCosts = (consumption / 100) * kilometers * price;
    var costPerParticipant = fuelCosts / participants;
    
    //final answer
    var answerDiv = document.getElementById("answerId");
    answerDiv.innerHTML = "Fuel costs per participant is " + costPerParticipant.toFixed(2) + " euros.";
}