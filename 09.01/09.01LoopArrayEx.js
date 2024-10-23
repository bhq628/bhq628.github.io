//Write a loop that writes all the array element values into the browser console. Each value should be displayed on a separate line.

// ERI KUIN PALAUTETTU VERSIO.
// TÄSSÄ ON MYÖS 4 MUUTA NIMEÄ MUKANA.


function loopArray() {
    // TODO
    let etunimet = ["Pekka", "Minna", "Heikki", "Anna", "Jukka", "Iida"];
    let etunimet2 = ["Mike", "Mary", "John", "Rosalin"];
    
    for (let i=0; i<etunimet.length; i++)
     {
        console.log(etunimet[i]);
    }

    for (let i=0; i<etunimet2.length; i++)
        {
           console.log(etunimet2[i]);
       }
    
}