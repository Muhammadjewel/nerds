// Sitenav
var elSitenav = document.querySelector('.sitenav');
var elSitenavMenuToggler = elSitenav.querySelector('.sitenav__menu-toggler');
var elSitenavList = document.querySelector('.sitenav__list');

elSitenavMenuToggler.addEventListener('click', function () {
  elSitenav.classList.toggle('sitenav--list-open');
  elSitenavList.classList.toggle('sitenav__list--open');
});


// Promo slider
var promoSlider = tns({
  container: '.promo-slider__track',
  controls: false,
  center: true,
  navContainer: '.promo-slider__nav',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  mouseDrag: true
});
