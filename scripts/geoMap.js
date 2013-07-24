// set up the page

var mapCanvas = document.getElementById('map_canvas');

// draw the google map, or not

  
var positionDenied = function() {
  alert("Unable to retrieve your location");
};
  
var revealPosition = function(position) {
  
  var markerTitle = "You are here";

  var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  var myOptions = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var map = new google.maps.Map(mapCanvas, myOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: markerTitle
  });

}

// test for geolocation support, provide geolocation settings, determine location of the user's device


  if (!"geolocation" in navigator) {
    alert("No geolocation available!");
  }
  
  var geoSettings = {
  enableHighAccuracy: false,
  maximumAge        : 30000,
  timeout           : 20000
  };
  
  navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
