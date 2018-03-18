function changeForward() {
  var mod = count%InAnim.length;
  selection[mod].marker.removeMarker();

  if(!InAnim[mod].reversed) {
    count++;
    InAnim[mod].reverse();
    InAnim[mod].play();
  }
}

function changeBack() {
  var mod = count%InAnim.length;
  selection[mod].marker.removeMarker();

  if(!InAnim[mod].reversed) {
    count--;
    InAnim[mod].reverse();
    InAnim[mod].play();
  }
}
