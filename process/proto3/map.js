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
    var submitForm = document.getElementById("submitForm");
    var submitReport = document.getElementById("submitReport");

    submitReport.addEventListener("click", function(event) {
        reportPage.style.opacity = 1;
        mapPage.style.opacity = 1;
    });

    submitForm.addEventListener("click", function(event) {
        if ("geolocation" in navigator) {
            console.log('geolocation is available');
            navigator.geolocation.getCurrentPosition(success);
        } else {
            console.log('geolocation IS NOT available');
        }
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
        alert('Your report has been submitted at the location ' + latitude + ', ' + longitude + ' at time ' + timestamp + '.')

        return false;
    };

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

    // var other = document.getElementById('other');
    // other.addEventListener('mousedown', function () {
    //     console.log('mousedown on other');
    //     other.style.backgroundColor = '#328c94';
    // });
    // other.addEventListener("dblclick", function() {
    //   other.style.backgroundColor = '#4cd4e1';
    // });

});
