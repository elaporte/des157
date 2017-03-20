function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.5382363,
            lng: -121.7476284
        },
        zoom: 12,
        styles: [{
            featureType: 'poi',
            stylers: [{
                visibility: 'on'
            }] // Turn off points of interest.
        }, {
            featureType: 'transit.station',
            stylers: [{
                visibility: 'on'
            }] // Turn off bus stations, train stations, etc.
        }],
    });
}
