/*----------------------------------------------

Theme   : hudai
Version : 1.0.1
Author  : CODIXEN
Support : https://codixen.com/envato-support

----------------------------------------------*/

/*----------------------------------------------

[Content Index]

1. ...

----------------------------------------------*/

/*----------------------------------------------
1. ...
----------------------------------------------*/

//----------------- menu responsive -------------
const menuBtn = document.querySelector('.mobile-menu');
const mobileMenu = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});


// 
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  var elements = document.getElementsByClassName("team-location");
  console.log(elements)
for (var i = 0; i < elements.length; i++) {
  console.log(i)
  
}



// faq page start 


