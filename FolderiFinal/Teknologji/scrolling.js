$(function () {
    var element = $(".Lajmi");
    $(window).scroll(function () {
      if($(window).scrollTop() > 0) {
        element.addClass(".fadeInUp");
      }
      
    });
  });