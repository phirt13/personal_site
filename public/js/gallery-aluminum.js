(function() {

  var counter = 0;
  var pictureArray = [
    './../pics/art/sketches/aluminum/regular/aluminum-1.jpg',
    './../pics/art/sketches/aluminum/regular/aluminum-2.jpg',
    './../pics/art/sketches/aluminum/regular/aluminum-3.jpg',
    './../pics/art/sketches/aluminum/regular/aluminum-4.jpg'
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

  mainImage.addEventListener('click', function(e) {

    (counter === pictureArray.length - 1)

    ? counter = 0
    : counter++;

    mainImage.setAttribute('src', pictureArray[counter]);

  });

})();
