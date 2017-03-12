document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('Icons made by http://www.freepik.com. Freepik from www.flaticon.com is licensed by http://creativecommons.org/licenses/by/3.0/ Creative Commons BY 3.0 CC 3.0 BY');

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,75,50,0,2*Math.PI);
    ctx.fillStyle = 'red';
    ctx.font = "32px Futura";
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillText('911',75,85);
    ctx.fill();
});
