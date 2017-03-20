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
        reportPage.style.display = 'block';
        mapPage.style.opacity = 0.2;
    });
    console.log("checkpoint 2");

    var submitForm = document.getElementById("submitForm");

    submitForm.addEventListener("click", function(event) {
        window.alert("Thank you for sharing your story");
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

            console.log("checkpoint 4");

            // });
            var catcall = document.getElementById('catcall').addEventListener("click", catcall);
            var rape = document.getElementById('rape').addEventListener("click", rape);
            var stalk = document.getElementById('stalk').addEventListener("click", stalk);
            var grope = document.getElementById('grope').addEventListener("click", grope);
            var pics = document.getElementById('pics').addEventListener("click", pics);
            var exposure = document.getElementById('exposure').addEventListener("click", exposure);
            var stare = document.getElementById('stare').addEventListener("click", stare);
            var invite = document.getElementById('invite').addEventListener("click", invite);

            var categorySelected = '';

            $(document).ready(function(){
                $("[class=button2]").css("background-color", "#4cd4e1");
                categorySelected = 'none';
            });
            function catcall() {
            	$("[id=catcall]").css("background-color", "#328c94");
              categorySelected = 'catcalling';
            }
            function rape() {
            	$("[id=rape]").css("background-color", "#328c94");
              categorySelected = 'rape';
            }
            function stalk() {
            	$("[id=stalk]").css("background-color", "#328c94");
              categorySelected = 'stalking';
            }
            function grope() {
              $("[id=grope]").css("background-color", "#328c94");
              categorySelected = 'groping/touching';
            }
            function pics() {
            	$("[id=pics]").css("background-color", "#328c94");
              categorySelected = 'taking pictures';
            }
            function exposure() {
            	$("[id=exposure]").css("background-color", "#328c94");
              categorySelected = 'indecent exposure';
            }
            function stare() {
            	$("[id=stare]").css("background-color", "#328c94");
              categorySelected = 'staring';
            }
            function invite() {
            	$("[id=invite]").css("background-color", "#328c94");
              categorySelected = 'sexual invites';
            }

            console.log("checkpoint 5");

    function success(position) {
        console.log('Your current position is:' +
            '\nlatitude:  ' + position.coords.latitude +
            '\nlongitude: ' + position.coords.longitude +
            '\ntimestamp: ' + position.timestamp +
            '\ncategory:  ' + categorySelected);

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
            lng: longitude,
            category: categorySelected
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

        var contentString = "A report was submitted here at " + result +
        "\nDescription: "+ messageText +
        "\nCategory: " + categorySelected;

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
        console.log(messageText, latitude, longitude, timestamp, categorySelected);

        return false;

      }
      // var category = document.getElementsByClassName('button2');
      // category.addEventListener("click", clicked);

  });
