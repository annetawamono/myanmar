var Marker = function(lat, long) {
  this.marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, long),
    animation: google.maps.Animation.DROP
  });
  this.defaultPos = new google.maps.LatLng(21.748551, 96.162655);
}

Marker.prototype.addMarker = function() {
  this.marker.setMap(map);
  map.setZoom(5);
  map.setCenter(this.defaultPos);
};

Marker.prototype.removeMarker = function() {
  this.marker.setMap(null);
};

Marker.prototype.setClick = function() {
  let mark = this.marker;
  google.maps.event.addListener(mark, 'click', function() {
    map.setZoom(12);
    map.setCenter(mark.getPosition());
  })
};
