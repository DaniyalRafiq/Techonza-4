$(document).ready(function () {

  $('.search_icon').click(function () {
    $(this).children(".fa").toggleClass('fa-search').toggleClass("fa-search-plus")
    $(this).parent(".form").toggleClass('active')
  })
  $('.menu , .menu_close ').click(function () {
    $(this).siblings(".nav_links").toggleClass('active');
  })
  $('.menu_close ').click(function () {
    $(this).parent(".nav_links").toggleClass('active');
  })

  var swiper = new Swiper(".hero_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      // When window width is >= 768px

      // When window width is >= 992px
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      630: {


        slidesPerView: 2,
      }

    }
  });
  var swiper = new Swiper(".footer_slider", {
    loop: true,
    slidesPerView: 1,
    speed: 500,
     direction : "vertical" ,
    autoplay :{
      delay : 3000 
    }
  });
  const mainAlpha = $('.alphabet');
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (let index = 0; index < alphabet.length; index++) {
    $(mainAlpha).append(` <a  href="#" class="alphabet-item ">${alphabet[index]}</a>`);
    $('.alphabet-item').first().addClass("active");
  }
  $('.alphabet-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  });
  $('.deals_item').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  });
})