$(function () {
  // Menu押した時
  $('.container__nav').on('click', function () {
    $(this).toggleClass('is-active');
    $('.nav__links').toggleClass('is-active');
  })

  // Close押した時
  $('.link__close').on('click', function () {
    $(this).toggleClass('is-active');
    $('.nav__links').toggleClass('is-active');
    $('.container__nav').toggleClass('is-active');
  })
});