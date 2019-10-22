let $navBtn = $('.nav-btn');

$navBtn.click(function() {
  $( this ).toggleClass("active");
  if (!$(this).hasClass('active')) {
    $('nav').slideUp();
  } else {
    $('nav').slideDown();
  }
});

