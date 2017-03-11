document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var map = L.map('map').setView([38.53769, -121.76877], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic21nYW56ZXIiLCJhIjoiY2l6ZWk1ZjZxMjU3MDMzcXBvemZsdmJnbyJ9.6m8Vaso24T-LH_i6Oi-y2w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'your.mapbox.project.id',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(map);

    var popup = L.popup()
    .setLatLng([38.53972, -121.74956])
    .setContent("Cmon over, I'm right here")
    .openOn(map);

});
