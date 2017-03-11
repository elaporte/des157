document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //variables for header and tip
    var sos = document.getElementById('sos');
    var sosTip = document.getElementById('sosTip');
    var tipTimer;

    sos.addEventListener ('mouseover', function(){
      console.log('mouseover on sos');
      tipTimer = setTimeout(showSosTip, 1000);
    });

    sos.addEventListener ('mouseout', function(){
      console.log('mouseout on sos');
      clearTimeout(tipTimer);
      sosTip.style.opacity = 0;
    });

    function showSosTip(){
      console.log('showing msg');
      sosTip.style.opacity = 1;
      sosTip.style.transition = 'all .3s';
    }

    //variables for images
    var ajam = document.getElementById('ajam');
    var ajamTip = document.getElementById('ajamTip');
    var bday = document.getElementById('bday');
    var bdayTip = document.getElementById('bdayTip');
    var memday = document.getElementById('memday');
    var memdayTip = document.getElementById('memdayTip');
    var grad = document.getElementById('grad');
    var gradTip = document.getElementById('gradTip');
    var ajamTimer;
    var bdayTimer;
    var memdayTimer;
    var gradTimer;

    ajam.addEventListener ('mouseover', function(){
      console.log('mouseover on ajam');
      ajamTimer = setTimeout(showAjamTip, 1000);
    });

    ajam.addEventListener ('mouseout', function(){
      console.log('mouseout on ajam');
      clearTimeout(ajamTimer);
      ajamTip.style.opacity = 0;
    });

    function showAjamTip(){
      console.log('showing msg');
      ajamTip.style.opacity = 1;
      ajamTip.style.transition = 'all .3s';
    }

    bday.addEventListener ('mouseover', function(){
      console.log('mouseover on bday');
      bdayTimer = setTimeout(showBdayTip, 1000);
    });

    bday.addEventListener ('mouseout', function(){
      console.log('mouseout on bday');
      clearTimeout(bdayTimer);
      bdayTip.style.opacity = 0;
    });

    function showBdayTip(){
      console.log('showing msg');
      bdayTip.style.opacity = 1;
      bdayTip.style.transition = 'all .3s';
    }

    memday.addEventListener ('mouseover', function(){
      console.log('mouseover on memday');
      memdayTimer = setTimeout(showMemdayTip, 1000);
    });

    memday.addEventListener ('mouseout', function(){
      console.log('mouseout on memday');
      clearTimeout(memdayTimer);
      memdayTip.style.opacity = 0;
    });

    function showMemdayTip(){
      console.log('showing msg');
      memdayTip.style.opacity = 1;
      memdayTip.style.transition = 'all .3s';
    }

    grad.addEventListener ('mouseover', function(){
      console.log('mouseover on grad');
      gradTimer = setTimeout(showGradTip, 1000);
    });

    grad.addEventListener ('mouseout', function(){
      console.log('mouseout on grad');
      clearTimeout(gradTimer);
      gradTip.style.opacity = 0;
    });

    function showGradTip(){
      console.log('showing msg');
      gradTip.style.opacity = 1;
      gradTip.style.transition = 'all .3s';
    }

    //variables for graduation timer countdown
    var today = new Date();
    var graduation = new Date(2017,5,17);
    var countdown = Math.abs(graduation.getTime()-today.getTime());
    var difference = Math.ceil(countdown/(1000*3600*24));
    var days = document.getElementById("days");
    var daysTip = document.getElementById("daysTip");
    var tipTimer;

    days.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showDaysTip, 1000);
    });

    days.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        daysTip.style.opacity = 0;
    });

    function showDaysTip() {
        daysTip.style.opacity = 1.0;
        daysTip.style.transition = 'all .3s';
    }

    days.innerHTML = difference + " DAYS UNTIL GRADUATION";
});
