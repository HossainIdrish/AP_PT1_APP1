  // Create Leaflet map
var mymap = L.map('mapid').setView([38.6562, -90.3052], 12);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(mymap);

// Define markers and bind popups
var markers = [
    [38.6369, -90.2943, "Saint Louis Zoo"],
    [38.6403, -90.2937, "Art Hill"],
    [38.6393, -90.2945, "Art Museum"],
    [38.6373, -90.2681, "Steinberg Skating Rink"],
    [38.6247, -90.1848, "Saint Louis Arch"],
    [38.6337, -90.2007, "City Museum"],
    [38.6128, -90.2594, "Botanical Garden"],
    [38.6287, -90.2706, "Saint Louis Science Center"],
    [38.6226, -90.1928, "Busch Stadium"],
    [38.6258, -90.1896, "Old Courthouse"]
];

markers.forEach(function(marker) {
    L.marker([marker[0], marker[1]]).addTo(mymap).bindPopup("<b>Welcome!</b><br>I am " + marker[2] + ".");
});

// Adding GeoJSON layer from the provided URL
fetch('https://raw.githubusercontent.com/HossainIdrish/Project1_App1/main/tl_2019_29510_roads.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(mymap);
    })
    .catch(error => {
        console.error('Error fetching GeoJSON data:', error);
    });

// Add Search Control
var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
}).on('markgeocode', function(e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest()
    ]).addTo(mymap);
    mymap.fitBounds(poly.getBounds());
}).addTo(mymap);
