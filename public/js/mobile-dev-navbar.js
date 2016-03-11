$(function() {

  var $menuIcon = $('#menu-close');
  var $artNavbar = $('#mobile-dev-nav');

  var toggleLight = 'green';

  $menuIcon.click(function() {
    if (toggleLight === 'green') {
      $artNavbar.attr('class', 'mobile-dev-navbar--section');
      $menuIcon.attr('class', 'icon-cross2');

      toggleLight = 'red';

    } else if (toggleLight === 'red') {
      $artNavbar.attr('class', 'mobile-dev-navbar--section-hidden');
      $menuIcon.attr('class', 'icon-menu2');

      toggleLight = 'green';

    } else {
      console.log('Not Working');
    }
  });

});

// (function() {

//   var menuIcon = document.getElementById('menu-close');
//   var devNavbar = document.getElementById('mobile-dev-navbar');

//   var toggleLight = 'green';

//   menuIcon.addEventListener('click', function() {
//     devNavbar.setAttribute('class', )
//   })
// })
