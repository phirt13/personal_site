$(function() {
  var $mainImage = $('#main-image');
  var $thumbnailOne = $('#thumbnail-0');
  var $thumbnailTwo = $('#thumbnail-1');
  var $thumbnailThree = $('#thumbnail-2');

  var pictures = [
    'pics/art/conservators/regular/conservators-1.jpg',
    'pics/art/conservators/regular/conservators-2.jpg',
    'pics/art/conservators/regular/conservators-3.jpg'
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

  $mainImage.click(function() {
    if(counter >= 2) {
      counter = 0;
      $mainImage.attr('src', pictures[counter]);
    } else {
      counter++ ;
      $mainImage.attr('src', pictures[counter]);
    }
  });
});
