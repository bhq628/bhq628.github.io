// Define a function (1.) 
function maximumKelareimbursement(length) {
    let kelaKorvaus; 

    //Päätkösen teko lääkärinvastaanoton ajan perusteella:
    if (length <= 10) {
        kelaKorvaus = 8.00;
    } else if (length <= 20) {
        kelaKorvaus = 11.00;
    } else if (length <= 30) {
        kelaKorvaus = 13.50;
    } else if (length <= 45) {
        kelaKorvaus = 16.50;
    } else {
        kelaKorvaus = 21.00;
    }
    
    // Palautetaan castaus kutsuneella pääohjelmalle:
    return kelaKorvaus;
}

// Defne a function (2.) 
function customerHasToPay(doctorsFee, kelaKorvaus, officeFee) {

    let asiakasMaksaa;
    asiakasMaksaa = doctorsFee - kelaKorvaus;
    if (asiakasMaksaa <= 0) {
        asiakasMaksaa = 0;

    }
    asiakasMaksaa = asiakasMaksaa + officeFee;
    return asiakasMaksaa;
}
	
// Define a function (3.) 
function calculate() {
    // Read values from the input fields
     let length = Number(document.getElementById("length").value);
     let doctorsFee = Number(document.getElementById("doctorsFee").value);

     let officeFee = 15.90;

    // Laskenta:
    // Call the function (1.) which calculates Kela reimbursement
    let kelaKorvaus = maximumKelareimbursement(length); 
    
    // Call the function (2.) which calculates amount left for the customer to pay
    let asiakasMaksaa = customerHasToPay(doctorsFee, kelaKorvaus, officeFee);
    

    //Tulostus
    // Write the answer on the page, to the answer div, as content of the div (Doctors////s fee)
let outputText = "Doctor\'s Fee is " + doctorsFee.toFixed(2) + "euros";

outputText = outputText + "<br>Kela reimbursement is " + kelaKorvaus.toFixed(2) + "euros.";

outputText = outputText + "<br>Office fee is " + kelaKorvaus.toFixed(2) + "euros.";

outputText = outputText + "<br>Customer needs to pay " + asiakasMaksaa.toFixed(2) + "euros.";

document.getElementById("answer").innerHTML = outputText;



    
    
    
}