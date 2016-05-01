(function() {

  var counter = 0;
  var pictureArray = [
    '../pics/art/oros/regular/oros-1.jpg',
    '../pics/art/oros/regular/oros-2.jpg',
    '../pics/art/oros/regular/oros-3.jpg',
    '../pics/art/oros/regular/oros-4.jpg',
    '../pics/art/oros/regular/oros-5.jpg',
    '../pics/art/oros/regular/oros-6.jpg',
    '../pics/art/oros/regular/oros-7.jpg',
    '../pics/art/oros/regular/oros-8.jpg',
    '../pics/art/oros/regular/oros-9.jpg'
  ];

  var mainImage = document.getElementById('main-image');
  console.log(mainImage);
  var parentThumbnail = document.getElementById('thumbnail-parent');

  parentThumbnail.addEventListener('click', function(e) {

    if (e.target && e.target.matches('img.gallery-thumbnail--image')) {

      var getNum = parseInt(e.target.id.slice(10), 10);
      mainImage.setAttribute('src', pictureArray[getNum]);
      counter = getNum

    }

  });

  mainImage.addEventListener('click', function(e) {
    console.log(e.target);
    (counter === pictureArray.length - 1)

    ? counter = 0
    : counter++;

    mainImage.setAttribute('src', pictureArray[counter]);

  });

})();
