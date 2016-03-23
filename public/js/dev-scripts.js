$(function() {

  var $scrollTopTool = $('#scroll-top');
  var $targetElement = $('#skills');
  var targetOffsetTop = $targetElement.offset().top;

  $(window).scroll(function() {

    if(targetOffsetTop <= $(window).scrollTop()) {
      $scrollTopTool.attr('class', 'scroll-up scroll-up--active');
    } else {
      $scrollTopTool.attr('class', 'scroll-up');
    }

  });

});
