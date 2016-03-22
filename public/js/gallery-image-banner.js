$(function() {

  var $imageBanner = $('#cycle-image-banner');
  var $mainImage = $('#main-image');

  var changeClass = function() {
    $imageBanner.attr('class', 'image-banner hidden');
  };

  $(window).scroll(changeClass);
  $mainImage.click(changeClass);


  (function checkWindow() {
    if(window.innerWidth >= 320 && window.innerWidth <= 1040) {
      console.log('this is small' + window.innerWidth);
      $imageBanner.text('Tap To Cycle');
      setTimeout(changeClass, 1000);
    } else {
      console.log('this is big' + window.innerWidth);
      $imageBanner.text('Click To Cycle');
    }
  }());

});
