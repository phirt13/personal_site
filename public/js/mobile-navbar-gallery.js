$(() => {

  var $menuIcon = $('#mobile-gallery-menu');
  var $artNavbar = $('#artist-navbar');

  var toggleLight = 'green';

  $menuIcon.click(() => {
    if (toggleLight === 'green') {
      $artNavbar.attr('class', 'gallery-piece--navbar--active');
      $menuIcon.attr('class', 'icon-cross2');

      toggleLight = 'red';

    } else if (toggleLight === 'red') {
      $artNavbar.attr('class', 'gallery-piece--navbar');
      $menuIcon.attr('class', 'icon-menu2');

      toggleLight = 'green';

    } else {
      console.log('Not Working');
    }
  });

});
