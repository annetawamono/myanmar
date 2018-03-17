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
  var InAnim = [], OutAnim = [], selection = "yangon", count = 0;

  const element = document.querySelector('#content h1#title-1');
  charming(element);

  const element2 = document.querySelector('#content h1#title-2');
  charming(element);

  var titleInAnim = anime.timeline({
    autoplay: false
  });

  titleInAnim.add({
    targets: '#content h1#title-1',
    top: ['30%','40%'],
    easing: 'easeInOutQuart'
  }).add({
    targets: '#content h1#title-1>span',
    rotateY: [-45,0],
    opacity: [0,1],
    offset: '-=600',
    easing: 'easeInCubic',
    elasticity: 100,
    delay: function(el, i, l) { return i * 50; }
  });

  InAnim.push(titleInAnim);

  var title2InAnim = anime.timeline({
    autoplay: false
  });

  title2InAnim.add({
    targets: '#content h1#title-2',
    top: ['30%','40%'],
    easing: 'easeInOutQuart'
  }).add({
    targets: '#content h1#title-2>span',
    rotateY: [-45,0],
    opacity: [0,1],
    offset: '-=600',
    easing: 'easeInCubic',
    elasticity: 100,
    delay: function(el, i, l) { return i * 50; }
  });

  InAnim.push(title2InAnim);

  $('#map-nav .fa-arrow-circle-o-right').click(function() {
    // console.log(InAnim[0]);
    // if (InAnim[0].reversed) {
    //   InAnim[0].reverse();
    // }
    // InAnim[0].play();
  });

  $('#map-nav .fa-arrow-circle-o-left').click(function() {
    // console.log(InAnim[0]);
    // if (!InAnim[0].reversed) {
    //   InAnim[0].reverse();
    // }
    //   InAnim[0].play();
  });
});
