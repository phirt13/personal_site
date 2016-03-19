$(function() {
  var $mainImage = $('#main-image');
  var $thumbnailOne = $('#thumbnail-0');
  var $thumbnailTwo = $('#thumbnail-1');

  var pictures = [
    'pics/art/sketches/splatter/regular/splatter-1.jpg',
    'pics/art/sketches/splatter/regular/splatter-2.jpg'
  ];

  var counter = 0;

  $thumbnailOne.click(function() {
    $mainImage.attr('src', pictures[0]);
    counter = 0;
  });

  $thumbnailTwo.click(function() {
    $mainImage.attr('src', pictures[1]);
    counter = 1;
  });

  $mainImage.click(function() {
    if(counter >= 1) {
      counter = 0;
      $mainImage.attr('src', pictures[counter]);
    } else {
      counter++ ;
      $mainImage.attr('src', pictures[counter]);
    }
  });
});
