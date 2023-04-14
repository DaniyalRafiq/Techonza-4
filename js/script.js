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
})