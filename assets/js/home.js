$(function () {
  // Menu押した時
  $('.section__nav').on('click', function () {
    $(this).toggleClass('is-active');
    $('.nav__links').toggleClass('is-active');
  })

  // Close押した時
  $('.link__close').on('click', function () {
    $(this).toggleClass('is-active');
    $('.nav__links').toggleClass('is-active');
    $('.section__nav').toggleClass('is-active');
  })
});