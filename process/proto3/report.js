// Javascript document
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    /* Initialize Firebase
    var config = {
      apiKey: "AIzaSyDP_CoE19cpx33Qj-4OS8agLhwWqU4dQjg",
      authDomain: "out-of-the-shadows.firebaseapp.com",
      databaseURL: "https://out-of-the-shadows.firebaseio.com",
      storageBucket: "out-of-the-shadows.appspot.com",
      messagingSenderId: "402671311503"
    };
    // Get a reference to the database service
    var database = firebase.database();
    firebase.initializeApp(config);*/
    document.f.onsubmit = processForm;
    console.log('and here?')

    function processForm() {
        console.log('how about now?');
        //store user name in a variable
        var time = document.f.userTime.value;
        console.log('and now?');
        var date = document.f.userDate.value;
        console.log('maybe now?');
        var location = document.f.userLocation.value;
        console.log('cmon now?');
        alert('Report submitted for ' + date + ' at ' + time + ' at ' + location + '. Thank you for sharing your story.');

        console.log('why yes it did');

        /* Public access to data
            {
              "rules": {
                ".read": true,
                ".write": true
              }
            }*/
        return false;
    };

    var rape = document.getElementById('rape');
    rape.addEventListener('mousedown', function () {
        console.log('mousedown on rape');
        rape.style.backgroundColor = '#328c94';
    });
    var stalk = document.getElementById('stalk');
    stalk.addEventListener('mousedown', function () {
        console.log('mousedown on stalk');
        stalk.style.backgroundColor = '#328c94';
    });
    var grope = document.getElementById('grope');
    grope.addEventListener('mousedown', function () {
        console.log('mousedown on grope');
        grope.style.backgroundColor = '#328c94';
    });
    var pics = document.getElementById('pics');
    pics.addEventListener('mousedown', function () {
        console.log('mousedown on pics');
        pics.style.backgroundColor = '#328c94';
    });
    var exposure = document.getElementById('exposure');
    exposure.addEventListener('mousedown', function () {
        console.log('mousedown on exposure');
        exposure.style.backgroundColor = '#328c94';
    });
    var stare = document.getElementById('stare');
    stare.addEventListener('mousedown', function () {
        console.log('mousedown on stare');
        stare.style.backgroundColor = '#328c94';
    });
    var invite = document.getElementById('invite');
    invite.addEventListener('mousedown', function () {
        console.log('mousedown on invite');
        invite.style.backgroundColor = '#328c94';
    });
    var other = document.getElementById('other');
    other.addEventListener('mousedown', function () {
        console.log('mousedown on other');
        other.style.backgroundColor = '#328c94';
    });
    var catcall = document.getElementById('catcall');
    catcall.addEventListener('mousedown', function () {
        console.log('mousedown on catcall');
        catcall.style.backgroundColor = '#328c94';
    });

    console.log('did it get here?');
});