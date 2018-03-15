$(function() {
  //  Intro Event Handlers
  $('#intro div.nav-buttons>i').click(navIntro);

  //  Selection Event Handlers
  var movementStrength = 5;
  $selection = $("#selection div#content");
  var height;
  var width;

  $selection.mousemove(function(e) {
    height = movementStrength / $selection.height();
    width = movementStrength / $selection.width();
    var pageX = (e.pageX - ($selection.width() / 2))
    var pageY = (e.pageY - ($selection.height() / 2))
    console.log("height:"+height+" width:"+width);
    console.log("pageX:"+pageX+" pageY:"+pageY);
    var newvalueX = -1*((width * (pageX * 1)) - 50);
    var newvalueY = -1*((height * (pageY * -1)) - 105);
    console.log("newvalueX"+newvalueX+" newvalueY"+newvalueY);
    $('#selection div#content').css("background-position", newvalueX + "%     " + newvalueY + "%");
  });
});