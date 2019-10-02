MicroModal.init({
  onClose: modal => {
        // $(modal).children('iframe').attr('src', $('iframe').attr('src'));
        $('.modal-video').each(function(index) {
          $(this).attr('src', $(this).attr('src'));
        });
        },// [2]
  awaitCloseAnimation: true,// [1]
});


$("#main-logo").click(function() {
  $('html,body').animate({
      scrollTop: 0,
    },
    'slow');
});

$("#main-logo-sidebar ").click(function() {
  $('html,body').animate({
      scrollTop: 0,
    },
    'slow');
    setTimeout(function(){
      $("#side-bar").css("left", "-15%");
}, 200);
});

$("#about").click(function() {
  $('html,body').animate({
      scrollTop: $(" #about-section").offset().top - 50
    },
    'slow');
});

$("#xr").click(function() {
  $('html,body').animate({
      scrollTop: $(" #xr-section").offset().top - 50
    },
    'slow');
});

$("#mob_web").click(function() {
  $('html,body').animate({
      scrollTop: $(" #mob_web-section").offset().top - 50
    },
    'slow');
});

$("#misc").click(function() {
  $('html,body').animate({
      scrollTop: $(" #misc-section").offset().top - 50
    },
    'slow');
});




$("#adventure").click(function() {
  $('html,body').animate({
      scrollTop: $(" #adventure-section").offset().top - 50
    },
    'slow');
});

$("#about-side").click(function() {
  $('html,body').animate({
      scrollTop: $(" #about-section").offset().top - 50
    },
    'slow');
});

$("#xr-side").click(function() {
  $('html,body').animate({
      scrollTop: $(" #xr-section").offset().top - 50
    },
    'slow');
});

$("#mob_web-side").click(function() {
  $('html,body').animate({
      scrollTop: $(" #mob_web-section").offset().top - 50
    },
    'slow');
});

$("#misc-side").click(function() {
  $('html,body').animate({
      scrollTop: $(" #misc-section").offset().top - 50
    },
    'slow');
});




$("#adventure-side").click(function() {
  $('html,body').animate({
      scrollTop: $(" #adventure-section").offset().top - 50
    },
    'slow');
});

// console.info("hello");


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


$(window).scroll(function(e) {
    if ($('html,body').is(':animated')) {
      // scroll happen by animate
    } else if (e.originalEvent) {
        // scroll happen manual scroll
        if ($(window).scrollTop() > 400) {
          $("#side-bar").css("left", "2%");
        } else {
          $("#side-bar").css("left", "-15%");
        }
    } else {
        // scroll happen by call
    }
});
