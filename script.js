var mymap = L.map('mapid').setView([38.6562, -90.3052], 12);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);

var marker1 = L.marker([38.6369, -90.2943]).addTo(mymap);
var marker2 = L.marker([38.6403, -90.2937]).addTo(mymap);
var marker3 = L.marker([38.6393, -90.2945]).addTo(mymap);
var marker4 = L.marker([38.6373, -90.2681]).addTo(mymap);
var marker5 = L.marker([38.6247, -90.1848]).addTo(mymap);
var marker6 = L.marker([38.6337, -90.2007]).addTo(mymap);
var marker7 = L.marker([38.6128, -90.2594]).addTo(mymap);
var marker8 = L.marker([38.6287, -90.2706]).addTo(mymap);
var marker9 = L.marker([38.6226, -90.1928]).addTo(mymap);
var marker10 = L.marker([38.6258, -90.1896]).addTo(mymap);

marker1.bindPopup("<b>Welcome!</b><br>Saint Louis Zoo.").openPopup();
marker2.bindPopup("<b>Welcome!</b><br>Art Hill.").openPopup();
marker3.bindPopup("<b>Welcome!</b><br>Art Museum.").openPopup();
marker4.bindPopup("<b>Welcome!</b><br>Steinberg Skating Rink.").openPopup();
marker5.bindPopup("<b>Welcome!</b><br>Saint Louis Arch.").openPopup();
marker6.bindPopup("<b>Welcome!</b><br>City Museum.").openPopup();
marker7.bindPopup("<b>Welcome!</b><br>Botanical Garden.").openPopup();
marker8.bindPopup("<b>Welcome!</b><br>Saint Louis Science Center.").openPopup();
marker9.bindPopup("<b>Welcome!</b><br>Busch Stadium.").openPopup();
marker10.bindPopup("<b>Welcome!</b><br>Old Courthouse.").openPopup();
