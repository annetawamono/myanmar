$(function() {
  //  Intro Event Handlers
  $('#intro div.nav-buttons>i').click(navIntro);

  //  Selection Event Handlers
  var movementStrength = 10;
  $selection = $("#selection div#content");
  var height;
  var width;

  $selection.mousemove(function(e) {
    height = movementStrength / $selection.height();
    width = movementStrength / $selection.width();
    var pageX = (e.pageX - ($selection.width() / 2));
    var pageY = (e.pageY - ($selection.height() / 2));
    var newvalueX = -1*((width * (pageX * 1)) - 50);
    var newvalueY = -1*((height * (pageY * -1)) - 105);
    $('#selection div#content').css("background-position", newvalueX + "%     " + newvalueY + "%");
  });

  //  Selection Title Anim
  const element = document.querySelector('#content h1');
  charming(element);

  var titleAnim = anime({
    targets: '#content h1#title-1>span',
    rotateZ: [-180,180],
    // opacity: 1,
    easing: 'easeInCubic',
    delay: function(el, i, l) { return i * 100; },
    autoplay: false
  });

  $('#content h1').click(titleAnim.play);
});
