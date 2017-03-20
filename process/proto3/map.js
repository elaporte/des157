document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('Icons made by http://www.freepik.com. Freepik from www.flaticon.com is licensed by http://creativecommons.org/licenses/by/3.0/ Creative Commons BY 3.0 CC 3.0 BY');

    var go = document.getElementById("go");
    var loadingPage = document.getElementById("loadingPage");
    var mapPage = document.getElementById("mapPage");
    var reportPage = document.getElementById("reportPage");

    go.addEventListener("click", function(event) {
        loadingPage.style.display = "none";
        mapPage.style.opacity = 1;
    });

    // var reportPage = document.getElementById("reportPage");
    var submitReport = document.getElementById("submitReport");
    //console.log(submitReport.className);

    submitReport.addEventListener("click", function(event) {
        reportPage.style.opacity = 1;
        mapPage.style.opacity = 0.2;
    });

var mainText = document.getElementById("desc");
    var submitForm = document.getElementById("submitForm");

    submitForm.addEventListener("click", submitClick());

function submitClick() {
      // Get a reference to the database service
      var firebaseRef = firebase.database().ref();

      var messageText = mainText.value;

firebaseRef.push().set(messageText);
    }

// ---------- spencer's code --------------
    submitForm.addEventListener("click", function(event) {
        if ("geolocation" in navigator) {
            console.log('geolocation is available');
            navigator.geolocation.getCurrentPosition(success);

        } else {
            console.log('geolocation IS NOT available');
        }
        event.preventDefault();
    });

    function success(position) {
        console.log('Your current position is:' +
            '\nlatitude:  ' + position.coords.latitude +
            '\nlongitude: ' + position.coords.longitude +
            '\ntimestamp: ' + position.timestamp);
        // console.log('Your current position is:');
        // console.log(`Latitude : ${position.coords.latitude}`);
        // console.log(`Longitude: ${position.coords.longitude}`);
        // console.log(`More or less ${position.coords.accuracy} meters.`);

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var timestamp = position.timestamp;

        alert('Your report has been submitted at the location ' + latitude + ', ' + longitude + ' at time ' + timestamp + '.')};



        // function writeUserData(lat, lon, time) {
        //   var latitude = position.coords.latitude;
        //   var longitude = position.coords.longitude;
        //   var timestamp = position.timestamp;
        //     firebase.database().ref('report').set({
        //         lat: latitude,
        //         lon: longitude,
        //         time: timestamp
        //     });
        // }
        // var userReportRef = firebase.database().ref('report/');
        // userReportRef.on('value', function(snapshot) {
        //     updateUserReport(postElement, snapshot.val());
        // });
        //
        // var newRef = {
        //   lat: latitude,
        //   lon: longitude,
        //   time: timestamp
        // };
        //
        // var newPostKey = firebase.database().ref.child('report').push().key;
        // // var newRef = firebase.database.ref).child('report').push();
        // var updates = {};
        // updates['/report/' + newPostKey] = newRef;
        //
        // return firebase.database().ref().updates(updates);
    // window.onload = function () { initialize() };



});
