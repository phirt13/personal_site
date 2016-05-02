(function() {

  var counter = 0;
  var pictureArray = [
    './../pics/art/100X/regular/100X-0.jpg',
    './../pics/art/100X/regular/100X-1.jpg',
    './../pics/art/100X/regular/100X-2.jpg',
    './../pics/art/100X/regular/100X-3.jpg',
    './../pics/art/100X/regular/100X-4.jpg',
    './../pics/art/100X/regular/100X-5.jpg',
    './../pics/art/100X/regular/100X-6.jpg',
    './../pics/art/100X/regular/100X-7.jpg',
    './../pics/art/100X/regular/100X-8.jpg'
  ];

  var mainImage = document.getElementById('main-image');
  var parentThumbnail = document.getElementById('thumbnail-parent');

  parentThumbnail.addEventListener('click', function(e) {

    if (e.target && e.target.matches('img.gallery-thumbnail--image')) {

      var getNum = parseInt(e.target.id.slice(10), 10);
      mainImage.setAttribute('src', pictureArray[getNum]);
      counter = getNum;

    }

  });

  mainImage.addEventListener('click', function() {

    (counter === pictureArray.length - 1)

    ? counter = 0
    : counter++;

    mainImage.setAttribute('src', pictureArray[counter]);

  });

})();
