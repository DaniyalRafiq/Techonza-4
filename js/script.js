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
  slidesPerView: 2,
  speed:500,
  spaceBetween: 30,
  
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } , 
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      // When window width is >= 768px

      // When window width is >= 992px
      992: {
        slidesPerView: 4,
      } ,
      768:{
        slidesPerView : 3 ,
      }
  
    }
});

})