(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax(); 
    $('.row').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100});
      
    $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.top').fadeIn('slow');
    if (scrolled < 200) $('.top').fadeOut('slow');
  });
  
  //Click event
  $('.top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space