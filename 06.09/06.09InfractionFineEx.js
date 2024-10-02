function tellInfractionFine() {
	//TODO	
    //Luetaan data-arvot tekstilaatikoista:
    let drivingspeed = document.getElementById("drivingSpeed").ariaValueMax;
    let speedlimit = document.getElementById("speedLimit").ariaValueMax;

    
    //Suoritetaan laskenta:

    let excessSpeed = drivingspeed - speedlimit;
    let outputText = "";

    // Suoritetaan päätökssenteko siitä, millainen sakko
    // annetaan jos oli ylinopeutta;

    if (excessSpeed < 0 ) {
        outputText = "No speeding, no fine"

    } else if ( (speedlimit >= 10 && speedlimit <= 60) && excessSpeed <= 15)
        outputText = "Infraction fine is XX euros.";
     {
        outputText = "Infraction fine is 85 euros.";
    } else if ( (speedlimit >= 10 && speedlimit <= 60) && 
                excessSpeed > 15 && excessSpeed <= 20) {} 

    } else if (speedlimit >= 70 && speedlimit <= 120) && 
               excessSpeed > 15 && excessSpeed <= 20) {
    
    } else (excessSpeed > 20) {
        outputText = "Income-based unit fine.";
    }
}