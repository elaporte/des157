// Javascript document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDP_CoE19cpx33Qj-4OS8agLhwWqU4dQjg",
        authDomain: "out-of-the-shadows.firebaseapp.com",
        databaseURL: "https://out-of-the-shadows.firebaseio.com",
        storageBucket: "out-of-the-shadows.appspot.com",
        messagingSenderId: "402671311503"
      };
      // Get a reference to the database service
      var database = firebase.database();
      firebase.initializeApp(config);

    var cat = addEventListener.getElementsByClassName('cat');
    cat.addEventListener('click', function(){
      cat.style.backgroundColor = "#328c94";
    });

    console.log('still working');
    return false;

// Public access to data
    {
      "rules": {
        ".read": true,
        ".write": true
      }
    }
});
