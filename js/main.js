MicroModal.init({
  onClose: modal => {
        $('iframe').attr('src', $('iframe').attr('src'));
        },// [2]
  awaitCloseAnimation: true
  // onShow: modal => console.info(`${modal.id} is shown`), // [1]
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

// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('.navbar').outerHeight();
// console.log(navBarHeight);
//
// var didScroll;
// // on scroll, let the interval function know the user has scrolled
// $(window).scroll(function(event){
//   didScroll = true;
// });
// // run hasScrolled() and reset didScroll status
// setInterval(function() {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   // do stuff here...
//   var st = $(this).scrollTop();
//   console.log(delta)
//   console.log(lastScrollTop)
//   console.log(st)
//   if (Math.abs(lastScrollTop — st) <= delta)
//     return;
//
//       // If current position > last position AND scrolled past navbar...
//   if (st > lastScrollTop && st > navbarHeight){
//     // Scroll Down
//     console.log("scrolled-past")
//     $('.navbar').removeClass(‘nav-down’).addClass(‘nav-up’);
//     console.log("scrolled-past")
//   } else {
//     // Scroll Up
//     // If did not scroll past the document (possible on mac)...
//     if(st + $(window).height() < $(document).height()) {
//       $('.navbar').removeClass(‘nav-up’).addClass(‘nav-down’);
//     }
//   }
//   lastScrollTop = st;
//
// }


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
// sr.reveal('.adventure-photo', bottomReveal);
sr.reveal('.adventure-title', leftReveal);
sr.reveal('.adventure-sub', leftReveal);
