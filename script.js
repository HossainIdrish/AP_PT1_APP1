var mymap = L.map('mapid').setView([38.6562, -90.3052], 12);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);


// Points of Interest Markers
var marker1 = L.marker([38.6369, -90.2943]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Saint Louis Zoo.");
var marker2 = L.marker([38.6403, -90.2937]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Art Hill.");
var marker3 = L.marker([38.6393, -90.2945]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Art Museum.");
var marker4 = L.marker([38.6373, -90.2681]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Steinberg Skating Rink.");
var marker5 = L.marker([38.6247, -90.1848]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Saint Louis Arch.");
var marker6 = L.marker([38.6337, -90.2007]).addTo(mymap).bindPopup("<b>Welcome!</b><br>City Museum.");
var marker7 = L.marker([38.6128, -90.2594]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Botanical Garden.");
var marker8 = L.marker([38.6287, -90.2706]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Saint Louis Science Center.");
var marker9 = L.marker([38.6226, -90.1928]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Busch Stadium.");
var marker10 = L.marker([38.6258, -90.1896]).addTo(mymap).bindPopup("<b>Welcome!</b><br>Old Courthouse.");

