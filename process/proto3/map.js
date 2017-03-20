document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('Icons made by http://www.freepik.com. Freepik from www.flaticon.com is licensed by http://creativecommons.org/licenses/by/3.0/ Creative Commons BY 3.0 CC 3.0 BY');

    //var firebase = new Firebase("https://out-of-the-shadows.firebaseio.com");

    var go = document.getElementById("go");
    var loadingPage = document.getElementById("loadingPage");
    var mapPage = document.getElementById("mapPage");
    var reportPage = document.getElementById("reportPage");

    go.addEventListener("click", function(event) {
        loadingPage.style.display = "none";
        mapPage.style.opacity = 1;
    });
    console.log("checkpoint 1");

    var submitReport = document.getElementById("submitReport");

    submitReport.addEventListener("click", function(event) {
        reportPage.style.opacity = 1;
        mapPage.style.opacity = 0.2;
    });
    console.log("checkpoint 2");

    var submitForm = document.getElementById("submitForm");

    submitForm.addEventListener("click", function(event) {
        reportPage.style.display = "none";
        mapPage.style.opacity = 1;
    });

    submitForm.addEventListener("click", function(event) {
        if ("geolocation" in navigator) {
            console.log('geolocation is available');
            navigator.geolocation.getCurrentPosition(success);

        } else {
            console.log('geolocation IS NOT available');
        }
        event.preventDefault();
    });

    var date_format = '12'; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/


    var d = new Date();
    var hour = d.getHours(); /* Returns the hour (from 0-23) */
    var minutes = d.getMinutes(); /* Returns the minutes (from 0-59) */
    var result = hour;
    var ext = '';

    if (date_format == '12') {
        if (hour > 12) {
            ext = 'PM';
            hour = (hour - 12);

            if (hour < 10) {
                result = "0" + hour;
            } else if (hour == 12) {
                hour = "00";
                ext = 'AM';
            }
        } else if (hour < 12) {
            result = ((hour < 10) ? "0" + hour : hour);
            ext = 'AM';
        } else if (hour == 12) {
            ext = 'PM';
        }
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    result = result + ":" + minutes + ' ' + ext;

    function success(position) {
        console.log('Your current position is:' +
            '\nlatitude:  ' + position.coords.latitude +
            '\nlongitude: ' + position.coords.longitude +
            '\ntimestamp: ' + position.timestamp);

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var timestamp = position.timestamp;

        // Get a reference to the database service
        var firebaseRef = firebase.database().ref();
        var mainText = document.getElementById("desc");
        var messageText = mainText.value;

        var data = {
            description: messageText,
            timestamp: timestamp,
            lat: latitude,
            lng: longitude
        };

        var myLatlng = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            zoom: 16,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "A report was submitted at " + result + "  with description: "+ messageText 
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);


        // var circle = new google.maps.Circle({
        //   data: data,
        //   strokeColor: '#FF0000',
        //   strokeOpacity: 0.8,
        //   strokeWeight: 2,
        //   fillColor: '#FF0000',
        //   fillOpacity: 0.35
        // });
        //
        //  circle.setMap(map);

        firebaseRef.push().set(data);
        console.log("checkpoint 3");
        console.log(messageText, latitude, longitude, timestamp);

        return false;
    }



    //     map.data.setStyle(function(feature) {
    //         return {
    //             icon: getCircle()
    //         };
    //     });
    //
    //
    // function getCircle() {
    //     return {
    //         path: google.maps.SymbolPath.CIRCLE,
    //         fillColor: 'red',
    //         fillOpacity: .2,
    //         scale: Math.pow(2, magnitude) / 2,
    //         strokeColor: 'white',
    //         strokeWeight: .5
    //     };
    // }

    console.log("checkpoint 4");
    var catcall = document.getElementById('catcall');
    catcall.addEventListener('mousedown', function() {
        console.log('mousedown on catcall');
        catcall.style.backgroundColor = '#328c94';
    });
    catcall.addEventListener("dblclick", function() {
        catcall.style.backgroundColor = '#4cd4e1';
    });

    var rape = document.getElementById('rape');
    rape.addEventListener('mousedown', function() {
        console.log('mousedown on rape');
        rape.style.backgroundColor = '#328c94';
    });
    rape.addEventListener("dblclick", function() {
        rape.style.backgroundColor = '#4cd4e1';
    });

    var stalk = document.getElementById('stalk');
    stalk.addEventListener('mousedown', function() {
        console.log('mousedown on stalk');
        stalk.style.backgroundColor = '#328c94';
    });
    stalk.addEventListener("dblclick", function() {
        stalk.style.backgroundColor = '#4cd4e1';
    });

    var grope = document.getElementById('grope');
    grope.addEventListener('mousedown', function() {
        console.log('mousedown on grope');
        grope.style.backgroundColor = '#328c94';
    });
    grope.addEventListener("dblclick", function() {
        grope.style.backgroundColor = '#4cd4e1';
    });

    var pics = document.getElementById('pics');
    pics.addEventListener('mousedown', function() {
        console.log('mousedown on pics');
        pics.style.backgroundColor = '#328c94';
    });
    pics.addEventListener("dblclick", function() {
        pics.style.backgroundColor = '#4cd4e1';
    });

    var exposure = document.getElementById('exposure');
    exposure.addEventListener('mousedown', function() {
        console.log('mousedown on exposure');
        exposure.style.backgroundColor = '#328c94';
    });
    exposure.addEventListener("dblclick", function() {
        exposure.style.backgroundColor = '#4cd4e1';
    });

    var stare = document.getElementById('stare');
    stare.addEventListener('mousedown', function() {
        console.log('mousedown on stare');
        stare.style.backgroundColor = '#328c94';
    });
    stare.addEventListener("dblclick", function() {
        stare.style.backgroundColor = '#4cd4e1';
    });

    var invite = document.getElementById('invite');
    invite.addEventListener('mousedown', function() {
        console.log('mousedown on invite');
        invite.style.backgroundColor = '#328c94';
    });
    invite.addEventListener("dblclick", function() {
        invite.style.backgroundColor = '#4cd4e1';
    });
    console.log("checkpoint 5");
});

//
//     alert('Your report has been submitted at the location ' + latitude + ', ' + longitude + ' at time ' + timestamp + '.')};



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

// mapPage.style.display = "none";
// reportPage.style.display = "block";
// submit.addEventListener("click", function(event) {
//     reportPage.style.display = "none";
//     mapPage.style.display = "block";
// });


// document.f.onsubmit = processForm;
// // console.log('and here?')
//
// function processForm() {

// //     console.log('how about now?');
// //     //store user name in a variable
// //     var time = document.f.userTime.value;
// //     console.log('and now?');
// //     var date = document.f.userDate.value;
// //     console.log('maybe now?');
// //     var location = document.f.userLocation.value;
// //     console.log('cmon now?');
// //     alert('Report submitted for '  date  ' at '  time  ' at '  location  '. Thank you for sharing your story.');
// //
// //     console.log('why yes it did');
// //
// //     return false;
// // };
//
