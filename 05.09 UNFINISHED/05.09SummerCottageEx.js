function calculateRent() {
	var rent = document.getElementById("rent").value;
	var participants = document.getElementById("participants").value;
	
	var rentPerParticipant = rent / participants;
	
	var answerDiv = document.getElementById("answerDiv");
	answerDiv.innerHTML = "Rent per participant: " + rentPerParticipant.toFixed(2) + " euros";
}