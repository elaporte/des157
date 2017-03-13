document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('Icons made by http://www.freepik.com. Freepik from www.flaticon.com is licensed by http://creativecommons.org/licenses/by/3.0/ Creative Commons BY 3.0 CC 3.0 BY');

    var go = document.getElementById("go");
    var start = document.getElementById("start");
    var mapPage = document.getElementById('mapPage');
    go.addEventListener("click", function(event) {
        start.style.display = "none";
        mapPage.style.display = "block";
    });





    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.font = "32px Futura";
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillText('911', 75, 85);
    ctx.fill();

    if ("geolocation" in navigator) {
        console.log('geolocation is available');
        navigator.geolocation.getCurrentPosition(success);

    } else {
        console.log('geolocation IS NOT available');
    }

    function success(position) {
        console.log('Your current position is:' +
            '\nlatitude:  ' + position.coords.latitude +
            '\nlongitude: ' + position.coords.longitude +
            '\ntimestamp: ' + position.timestamp);

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // var img = new Image();
        // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    };
});
