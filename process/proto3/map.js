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

    //-------- 12 hour timer --------
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
    // ---------- End 12 hour time function

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
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var icon = 'http://maps.google.com/mapfiles/kml/pal3/icon49.png';

        var marker = new google.maps.Marker({
            position: myLatlng,
            icon: icon,
        });

        var contentString = "A " + clicked + " report was submitted at " + result + "  with description: "+ messageText;

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
          });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);

        firebaseRef.push().set(data);
        console.log("checkpoint 3");
        console.log(messageText, latitude, longitude, timestamp);

        return false;

      }

    console.log("checkpoint 4");
    var catcall = document.getElementById('catcall');
    catcall.addEventListener('click', function() {
        console.log('click on catcall');
        catcall.style.backgroundColor = '#328c94';
    });
    catcall.addEventListener("dblclick", function() {
        catcall.style.backgroundColor = '#4cd4e1';
    });
  //   catcall.addEventListener("click", category);
  //   function category() {
  //   if (catcall.style.backgroundColor = '#328c94') {
  //       return catcall.value;
  //   } else {
  //     console.log(null);
  //   }
  // }

    var rape = document.getElementById('rape');
    rape.addEventListener('click', function() {
        console.log('click on rape');
        rape.style.backgroundColor = '#328c94';
    });
    rape.addEventListener("dblclick", function() {
        rape.style.backgroundColor = '#4cd4e1';
    });
    rape.addEventListener("click", category);
    function category() {
    if (rape.style.backgroundColor = '#328c94') {
      console.log('rape');
    } else {
      console.log(null);
    }
  }

    var stalk = document.getElementById('stalk');
    stalk.addEventListener('click', function() {
        console.log('click on stalk');
        stalk.style.backgroundColor = '#328c94';
    });
    stalk.addEventListener("dblclick", function() {
        stalk.style.backgroundColor = '#4cd4e1';
    });
    stalk.addEventListener("click", category);
    function category() {
    if (stalk.style.backgroundColor = '#328c94') {
      console.log('stalk');
    } else {
      console.log(null);
    }
  }

    var grope = document.getElementById('grope');
    grope.addEventListener('click', function() {
        console.log('click on grope');
        grope.style.backgroundColor = '#328c94';
    });
    grope.addEventListener("dblclick", function() {
        grope.style.backgroundColor = '#4cd4e1';
    });
    grope.addEventListener("click", category);
    function category() {
    if (grope.style.backgroundColor = '#328c94') {
      console.log('grope');
    } else {
      console.log(null);
    }
  }

    var pics = document.getElementById('pics');
    pics.addEventListener('click', function() {
        console.log('click on pics');
        pics.style.backgroundColor = '#328c94';
    });
    pics.addEventListener("dblclick", function() {
        pics.style.backgroundColor = '#4cd4e1';
    });
    pics.addEventListener("click", category);
    function category() {
    if (pics.style.backgroundColor = '#328c94') {
      console.log('pics');
    } else {
      console.log(null);
    }
  }

    var exposure = document.getElementById('exposure');
    exposure.addEventListener('click', function() {
        console.log('click on exposure');
        exposure.style.backgroundColor = '#328c94';
    });
    exposure.addEventListener("dblclick", function() {
        exposure.style.backgroundColor = '#4cd4e1';
    });
    exposure.addEventListener("click", category);
    function category() {
    if (exposure.style.backgroundColor = '#328c94') {
      console.log('exposure');
    } else {
      console.log(null);
    }
  }

    var stare = document.getElementById('stare');
    stare.addEventListener('click', function() {
        console.log('click on stare');
        stare.style.backgroundColor = '#328c94';
    });
    stare.addEventListener("dblclick", function() {
        stare.style.backgroundColor = '#4cd4e1';
    });
    stare.addEventListener("click", category);
    function category() {
    if (stare.style.backgroundColor = '#328c94') {
      console.log('stare');
    } else {
      console.log(null);
    }
  }

    var invite = document.getElementById('invite');
    invite.addEventListener('click', function() {
        console.log('click on invite');
        invite.style.backgroundColor = '#328c94';
        return invite;
    });
    invite.addEventListener("dblclick", function() {
        invite.style.backgroundColor = '#4cd4e1';
    });
  //   invite.addEventListener("click", category);
  //   function category() {
  //   if (invite.style.backgroundColor = '#328c94') {
  //     console.log('invite');
  //   } else {
  //     console.log(null);
  //   }
  // };
    console.log("checkpoint 5");


  });
