$("#main-logo").click(function() {
  console.log("help");
  $('html,body').animate({
      scrollTop: 0,
    },
    'slow');
});

$("#about").click(function() {
  console.log("help");
  $('html,body').animate({
      scrollTop: $(" #about-section").offset().top - 100
    },
    'slow');
});

$("#portfolio").click(function() {
  console.log("help");
  $('html,body').animate({
      scrollTop: $(" #portfolio-section").offset().top - 100
    },
    'slow');
});