$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 3.02,
      },

      600: {
        items: 4.01,
      },
      800: {
        items: 5.01,
      },
      1000: {
        items: 6.01,
      },
    },
  });