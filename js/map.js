function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(21.748551, 96.162655),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
