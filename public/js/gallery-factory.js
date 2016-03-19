$(function() {
  var $mainImage = $('#main-image');
  var $thumbnailOne = $('#thumbnail-0');
  var $thumbnailTwo = $('#thumbnail-1');
  var $thumbnailThree = $('#thumbnail-2');
  var $thumbnailFour = $('#thumbnail-3');

  var pictures = [
    'pics/art/factory/regular/factory-1.jpg',
    'pics/art/factory/regular/factory-2.jpg',
    'pics/art/factory/regular/factory-3.jpg',
    'pics/art/factory/regular/factory-4.jpg'
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

  $thumbnailThree.click(function() {
    $mainImage.attr('src', pictures[2]);
    counter = 2;
  });

  $thumbnailFour.click(function() {
    $mainImage.attr('src', pictures[3]);
    counter = 3;
  });

  $mainImage.click(function() {
    if(counter >= 3) {
      counter = 0;
      $mainImage.attr('src', pictures[counter]);
    } else {
      counter++ ;
      $mainImage.attr('src', pictures[counter]);
    }
  });
});
