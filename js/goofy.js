'use strict';

(function() {

  var artsTitle = document.getElementById('art-title');
  var ohBubble = document.getElementById('speech-bubble');

  console.log(ohBubble);
  console.log(artsTitle);

  function makeItQuiver() {
    artsTitle.addEventListener('mouseenter', function(e) {

      ohBubble.setAttribute('class', 'oh-speech-bubble--active');

      e.preventDefault();
    });

    artsTitle.addEventListener('mouseleave', function(e) {

      ohBubble.setAttribute('class', 'oh-speech-bubble');

      e.preventDefault();
    });
  }

  makeItQuiver();
})();
