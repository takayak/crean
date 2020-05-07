window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });
  function scroll_effect(){
   $('.effect-fade').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('effect-scroll');
    }
   });
  }

  // ページ内スクロール
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      var position = position - 80; 
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  






  
};
