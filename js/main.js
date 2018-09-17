MicroModal.init({
  awaitCloseAnimation: true
});

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

window.sr = ScrollReveal();

var bottomReveal = {
  reset: true,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  },
  scale: 0.9,
};

var leftReveal = {
  reset: true,
  origin: 'left',
  scale: 1,
  distance: '40px',
  duration: 500,
};

var rightReveal = {
  reset: true,
  origin: 'right',
  scale: 1,
  distance: '40px',
  duration: 500,
};

sr.reveal('.large-project-card', bottomReveal);
sr.reveal('.bio-text', leftReveal);
sr.reveal('.contact-wrapper', rightReveal);
sr.reveal('.small-project-card', bottomReveal);
sr.reveal('.about', bottomReveal);
sr.reveal('.landscape-photo', bottomReveal);
sr.reveal('.portrait-photo', bottomReveal);
