$(document).ready(function () {
  $('.category-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-down"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});