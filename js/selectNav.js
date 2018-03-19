function changeForward() {
  var mod = count%InAnim.length;
  selection[mod].marker.removeMarker();

  if(!InAnim[mod].reversed) {
    count++;
    InAnim[mod].reverse();
    InAnim[mod].play();
    $(".sub").removeClass('active');
    $(selection[count%selection.length].sub).addClass('active');
  }
}

function changeBack() {
  var mod = count%InAnim.length;
  selection[mod].marker.removeMarker();

  if(!InAnim[mod].reversed) {
    count--;
    InAnim[mod].reverse();
    InAnim[mod].play();
    $(".sub").removeClass('active');
    $(selection[count%selection.length].sub).addClass('active');
  }
}
