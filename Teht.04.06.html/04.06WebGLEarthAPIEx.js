var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Â© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
   // todo
   earth.setView([60.201334, 24.934075]); 
   earth.setZoom(13);

}

function showCoords() {
   // todo

}