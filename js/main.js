MicroModal.init();

$("#main-logo").click(function() {
  $('html,body').animate({
      scrollTop: 0,
    },
    'slow');
});

$("#about").click(function() {
  $('html,body').animate({
      scrollTop: $(" #about-section").offset().top - 100
    },
    'slow');
});

$("#portfolio").click(function() {
  $('html,body').animate({
      scrollTop: $(" #portfolio-section").offset().top - 100
    },
    'slow');
});


$("#adventure").click(function() {
  $('html,body').animate({
      scrollTop: $(" #adventure-section").offset().top - 100
    },
    'slow');
});