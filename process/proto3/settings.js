document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('Icons made by http://www.freepik.com. Freepik from www.flaticon.com is licensed by http://creativecommons.org/licenses/by/3.0/ Creative Commons BY 3.0 CC 3.0 BY');

    var alertRadius1 = document.getElementById('alertRadius1');
    var alertRadius5 = document.getElementById('alertRadius5');
    var alertRadius10 = document.getElementById('alertRadius10');
    var reportTime1 = document.getElementById('reportTime1');
    var reportTime24 = document.getElementById('reportTime24');
    var reportTime48 = document.getElementById('reportTime48');

    alertRadius1.addEventListener('mousedown', function () {
        console.log('mousedown on invite');
        alertRadius1.style.backgroundColor = '#328c94';
        alertRadius1.style.color = '#fff';
        alertRadius5.style.backgroundColor = '#fff';
        alertRadius5.style.color = '#4cd4e1';
        alertRadius10.style.backgroundColor = '#fff';
        alertRadius10.style.color = '#4cd4e1';
    });
    alertRadius5.addEventListener('mousedown', function () {
        console.log('mousedown on invite');
        alertRadius1.style.backgroundColor = '#fff';
        alertRadius1.style.color = '#4cd4e1';
        alertRadius5.style.backgroundColor = '#328c94';
        alertRadius5.style.color = '#fff';
        alertRadius10.style.backgroundColor = '#fff';
        alertRadius10.style.color = '#4cd4e1';
    });
    alertRadius10.addEventListener('mousedown', function () {
        console.log('mousedown on invite');
        alertRadius1.style.backgroundColor = '#fff';
        alertRadius1.style.color = '#4cd4e1';
        alertRadius5.style.backgroundColor = '#fff';
        alertRadius5.style.color = '#4cd4e1';
        alertRadius10.style.backgroundColor = '#328c94';
        alertRadius10.style.color = '#fff';
    });

    reportTime1.addEventListener('mousedown', function () {
        console.log('mousedown on invite');
        reportTime1.style.backgroundColor = '#328c94';
        reportTime1.style.color = '#fff';
        reportTime24.style.backgroundColor = '#fff';
        reportTime24.style.color = '#4cd4e1';
        reportTime48.style.backgroundColor = '#fff';
        reportTime48.style.color = '#4cd4e1';
    });
    reportTime24.addEventListener('mousedown', function () {
        console.log('mousedown on invite');
        reportTime1.style.backgroundColor = '#fff';
        reportTime1.style.color = '#4cd4e1';
        reportTime24.style.backgroundColor = '#328c94';
        reportTime24.style.color = '#fff';
        reportTime48.style.backgroundColor = '#fff';
        reportTime48.style.color = '#4cd4e1';
    });
    reportTime48.addEventListener('mousedown', function () {
        console.log('mousedown on invite');
        reportTime1.style.backgroundColor = '#fff';
        reportTime1.style.color = '#4cd4e1';
        reportTime24.style.backgroundColor = '#fff';
        reportTime24.style.color = '#4cd4e1';
        reportTime48.style.backgroundColor = '#328c94';
        reportTime48.style.color = '#fff';
    });
});
