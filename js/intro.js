function navIntro() {
  $('div.story.active').fadeOut("slow", function() {
    $(this).removeClass("active");
    if($(this).attr('id') == "part-1") {
      $('div#part-2').fadeIn("slow", function() {
        $(this).addClass("active");
      });
    } else if($(this).attr('id') == "part-2") {
      $('div#part-3').fadeIn("slow", function() {
        $(this).addClass("active");
      });
    } else if($(this).attr('id') == "part-3") {
      $('div#part-4').fadeIn("slow", function() {
        $(this).addClass("active");
      });
    } else if($(this).attr('id') == "part-4") {
      $('#intro').fadeOut("fast", function() {
        $(this).removeClass('active');
        $('#selection').fadeIn(5000, function() {
          $(this).addClass('active');
        })
      });
    }
  });
}
