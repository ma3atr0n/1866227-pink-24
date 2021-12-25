document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.main-nav__toggle');
  const mobileMenu = document.querySelector('.main-nav__list');
  const pageHeader = document.querySelector('.page-header');


  mobileToggle.addEventListener("click", function (e) {
    mobileToggle.classList.toggle('main-nav__toggle--open');
    mobileToggle.classList.toggle('main-nav__toggle--closed');
    mobileMenu.classList.toggle('main-nav__list--open');
    pageHeader.classList.toggle('page-header--open');
  })
})

function initMap() {
  const uluru = { lat: 59.9351545, lng: 30.3229178 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17.75,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
