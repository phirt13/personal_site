$(function() {
  var $mainImage = $('#main-image');
  var $thumbnailOne = $('#thumbnail-0');
  var $thumbnailTwo = $('#thumbnail-1');
  var $thumbnailThree = $('#thumbnail-2');
  var $thumbnailFour = $('#thumbnail-3');
  var $thumbnailFive = $('#thumbnail-4');
  var $thumbnailSix = $('#thumbnail-5');
  var $thumbnailSeven = $('#thumbnail-6');
  var $thumbnailEight = $('#thumbnail-7');
  var $thumbnailNine = $('#thumbnail-8');


  var pictures = [
    'pics/100X/regular/100X-0.jpg',
    'pics/100X/regular/100X-1.jpg',
    'pics/100X/regular/100X-2.jpg',
    'pics/100X/regular/100X-3.jpg',
    'pics/100X/regular/100X-4.jpg',
    'pics/100X/regular/100X-5.jpg',
    'pics/100X/regular/100X-6.jpg',
    'pics/100X/regular/100X-7.jpg',
    'pics/100X/regular/100X-8.jpg'
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

  $thumbnailFive.click(function() {
    $mainImage.attr('src', pictures[4]);
    counter = 4;
  });

  $thumbnailSix.click(function() {
    $mainImage.attr('src', pictures[5]);
    counter = 5;
  });

  $thumbnailSeven.click(function() {
    $mainImage.attr('src', pictures[6]);
    counter = 6;
  });

  $thumbnailEight.click(function() {
    $mainImage.attr('src', pictures[7]);
    counter = 7;
  });

  $thumbnailNine.click(function() {
    $mainImage.attr('src', pictures[8]);
    counter = 8;
  });

  $mainImage.click(function() {
    if(counter >= 8) {
      counter = 0;
      $mainImage.attr('src', pictures[counter]);
    } else {
      counter++ ;
      $mainImage.attr('src', pictures[counter]);
    }
  });
});