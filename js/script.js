$(document).ready(function () {


  $(".menu").click(function () {
    $(".nav_links").toggleClass('active');
    $('body').toggleClass('active');
    $(this).find('.fa-bars').toggleClass("fa-x");
  });

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

  const searchInput = $('.search_input');
  const headerSearchResult = $('.header_search_result');
  const headerForm = $('.form');

  searchInput.on('input', function() {
      if (searchInput.val().trim() !== '') {
          headerSearchResult.addClass('Active');
          headerForm.addClass('Active');
      } else {
          headerSearchResult.removeClass('Active');
          headerForm.removeClass('Active');
      }
  });
  // Simulate loading content
setTimeout(function() {
  // Hide the loader
  document.getElementById("loader").style.display = "none";
  
  // Show the content
  document.getElementById("content").style.display = "block";
}, 2000); // Simulate a 2-second loading time
})