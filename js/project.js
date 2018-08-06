window.project = ScrollReveal();

var bottomReveal = {
  reset: true,
  scale: 0.9,
};

var leftReveal = {
  reset: true,
  origin: 'left',
  scale: 1,
  distance: '20px',
  duration: 500,
};

var rightReveal = {
  reset: true,
  origin: 'right',
  scale: 1,
  distance: '20px',
  duration: 500,
};

project.reveal('.page-back-container', leftReveal);
project.reveal('.page-header-content', bottomReveal);
project.reveal('.page-quote-background', bottomReveal);