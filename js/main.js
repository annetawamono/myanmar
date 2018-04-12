selection = [
  {name: "yangon", marker: new Marker(16.786208, 96.152039), sub: "#sub-1", gallery: "#yg-gallery"},
  {name: "kalaw", marker: new Marker(20.624008, 96.569014), sub: "#sub-2", gallery: "#kw-gallery"},
  {name: "maymyo", marker: new Marker(21.993679, 96.469474), sub: "#sub-3", gallery: "#mm-gallery"}
];
var count = 0;

$(function() {
  // Loading photos
  $containers = $("#gallery div.row>div");
  $containers.imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  });

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

  const element = document.querySelector('#content h1#title-1');
  charming(element);

  const element2 = document.querySelector('#content h1#title-2');
  charming(element2);

  const element3 = document.querySelector('#content h1#title-3');
  charming(element3);

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
    offset: '-=900',
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
    offset: '-=900',
    easing: 'easeInCubic',
    elasticity: 100,
    delay: function(el, i, l) { return i * 50; }
  });

  InAnim.push(title2InAnim);

  var title3InAnim = anime.timeline({
    autoplay: false
  });

  title3InAnim.add({
    targets: '#content h1#title-3',
    top: ['30%','40%'],
    easing: 'easeInOutQuart'
  }).add({
    targets: '#content h1#title-3>span',
    rotateY: [-45,0],
    opacity: [0,1],
    offset: '-=900',
    easing: 'easeInCubic',
    elasticity: 100,
    delay: function(el, i, l) { return i * 50; }
  });

  InAnim.push(title3InAnim);

  InAnim[0].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      InAnim[count%InAnim.length].play();
      anim.reversed = false;
      selection[count%InAnim.length].marker.addMarker();
    }
  }

  InAnim[1].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      InAnim[count%InAnim.length].play();
      anim.reversed = false;
      selection[count%InAnim.length].marker.addMarker();
    }
  }

  InAnim[2].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      InAnim[count%InAnim.length].play();
      anim.reversed = false;
      selection[count%InAnim.length].marker.addMarker();
    }
  }

  for (var i = 0; i < selection.length; i++) {
    // console.log(selection[i].marker);
    selection[i].marker.setClick();
  }

  $('#map-nav .fa-arrow-circle-o-right').click(changeForward);

  $('#map-nav .fa-arrow-circle-o-left').click(changeBack);

  // Gallery Animations
  var galleryAnim = [];

  var gallery1Anim = anime.timeline({
    autoplay: false
  });

  gallery1Anim.add({
    targets: '#yg-gallery img',
    scale: [0, 1],
    opacity: [0,1],
    easing: 'linear',
    elasticity: 100,
    duration: 500,
    delay: function(el, i, l) { return i * 50; }
  });

  galleryAnim.push(gallery1Anim);

  galleryAnim[0].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      let $fade = $('#back-to-map');
      $('#gallery').animate({
          width: 'toggle',
        }, 500, function() {
          $fade.fadeTo("fast", 0, function(){
            $(this).addClass('hidden');
            let $map = $('#see-images');
            $map.removeClass('hidden');
            $map.fadeTo("fast", 1);
          });
        });
    }
  }

  var gallery2Anim = anime.timeline({
    autoplay: false
  });

  gallery2Anim.add({
    targets: '#kw-gallery img',
    scale: [0, 1],
    opacity: [0,1],
    easing: 'linear',
    elasticity: 100,
    duration: 500,
    delay: function(el, i, l) { return i * 50; }
  });

  galleryAnim.push(gallery2Anim);

  galleryAnim[1].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      let $fade = $('#back-to-map');
      $('#gallery').animate({
          width: 'toggle',
        }, 500, function() {
          $fade.fadeTo("fast", 0, function(){
            $(this).addClass('hidden');
            let $map = $('#see-images');
            $map.removeClass('hidden');
            $map.fadeTo("fast", 1);
          });
        });
    }
  }

  var gallery3Anim = anime.timeline({
    autoplay: false
  });

  gallery3Anim.add({
    targets: '#mm-gallery img',
    scale: [0, 1],
    opacity: [0,1],
    easing: 'linear',
    elasticity: 100,
    duration: 500,
    delay: function(el, i, l) { return i * 50; }
  });

  galleryAnim.push(gallery3Anim);

  galleryAnim[2].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      let $fade = $('#back-to-map');
      $('#gallery').animate({
          width: 'toggle',
        }, 500, function() {
          $fade.fadeTo("fast", 0, function(){
            $(this).addClass('hidden');
            let $map = $('#see-images');
            $map.removeClass('hidden');
            $map.fadeTo("fast", 1);
          });
        });
    }
  }


  // Opens gallery
  $('#see-images').click(function(){
    $('section#gallery .gallery').removeClass('active');
    $(selection[count%selection.length].gallery).addClass('active');

    let $fade = $(this);
    $('#gallery').animate({
      width: 'toggle',
    }, 500, function() {
      $fade.fadeTo("fast", 0, function(){
        $(this).addClass('hidden');
        let $map = $('#back-to-map');
        $map.removeClass('hidden');
        $map.fadeTo("fast", 1);
        if(galleryAnim[count%galleryAnim.length].reversed) {
          galleryAnim[count%galleryAnim.length].reverse();
        }
        galleryAnim[count%galleryAnim.length].play();
      });
    });
  });

  // Closes gallery
  $('#back-to-map').click(function(){
    if(!galleryAnim[count%galleryAnim.length].reversed) {
      galleryAnim[count%galleryAnim.length].reverse();
    }
    galleryAnim[count%galleryAnim.length].play();
  });
});
