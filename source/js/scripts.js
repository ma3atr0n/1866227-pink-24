document.addEventListener('DOMContentLoaded', function() {

  //Mobile menu
  if (document.querySelector('.page-header')) {
    const mobileToggle = document.querySelector('.main-nav__toggle');
    const mobileMenu = document.querySelector('.main-nav__list');
    const pageHeader = document.querySelector('.page-header');


    mobileToggle.addEventListener("click", function (e) {
      mobileToggle.classList.toggle('main-nav__toggle--open');
      mobileToggle.classList.toggle('main-nav__toggle--closed');
      mobileMenu.classList.toggle('main-nav__list--open');
      pageHeader.classList.toggle('page-header--open');
    })
  }

  //Map
  if (document.querySelector('.map')) {
    ymaps.ready(init);

    const center = [59.93879, 30.323118];

    function init(){
        let map = new ymaps.Map("map", {
            center: center,
            zoom: 17,
            controls: ['zoomControl']
        });

        let placemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
          iconLayout: 'default#image',
          iconImageHref: '../img/main/map-marker.png',
          iconImageSize: [36, 36]
        });

        map.geoObjects.add(placemark);
    }
  }

})



