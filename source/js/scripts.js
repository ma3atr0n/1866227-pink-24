document.addEventListener('DOMContentLoaded', function() {

  //Mobile menu
  if (document.querySelector('.page-header')) {
    const mobileToggle = document.querySelector('.main-nav__toggle');
    const mobileMenu = document.querySelector('.main-nav__list');
    const pageHeader = document.querySelector('.page-header');
    pageHeader.classList.remove('page-header--no-js');

    mobileToggle.addEventListener("click", function () {
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

      let placemark = new ymaps.Placemark([59.938615, 30.323040], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/main/map-marker.png',
        iconImageSize: [36, 36]
      });

      map.geoObjects.add(placemark);
    }
  }

  //Form Valid
  if (document.querySelector('.contest-form')) {

    const overlay = document.querySelector('.overlay');
    const modals = document.querySelectorAll('.modal');
    const modalButtonSuccess = document.querySelector('.modal__button--success');
    const modalButtonError = document.querySelector('.modal__button--error');
    const inputs = document.querySelectorAll("input[id='surname'],input[id='name'],input[id='email']");
    const form = document.querySelector('.contest-form');

    form.addEventListener("submit", function (e) {
      let valid = true;
      e.preventDefault()
      inputs.forEach(element => {
        if (element.value === '') {
          valid = false
        }
      })
      overlay.classList.toggle('overlay--active')
      if (valid) {
        modals[0].classList.toggle('modal--active')
      } else {
        modals[1].classList.toggle('modal--active')
      }
    })

    modalButtonSuccess.addEventListener('click', function(e) {
      modals[0].classList.toggle('modal--active')
      overlay.classList.toggle('overlay--active')
    })
    modalButtonError.addEventListener('click', function(e) {
      modals[1].classList.toggle('modal--active')
      overlay.classList.toggle('overlay--active')
    })
  }

  //Like
  if (document.querySelector('.gallery')) {
    let heart = document.querySelectorAll('.like__button');
    let likesNumber = document.querySelectorAll('.like__value');

    heart.forEach((element,index) => {
      element.onclick = function () {
        if (element.classList.contains('added')) {
          likesNumber[index].textContent--;
        } else {
          likesNumber[index].textContent++;
        }

        element.classList.toggle('added');
      };
    })
  }

  //Review Slider
  if (document.querySelector('.reviews')) {

    let offset = 0;
    let buttonNext = document.querySelector('.reviews__nav__button--next');
    let buttonPrev = document.querySelector('.reviews__nav__button--prev');
    let sliderLine = document.querySelector('.reviews__list');
    let sliderItems = document.querySelectorAll('.reviews__item');

    sliderLine.style.width = (100 * sliderItems.length) + '%';

    buttonNext.addEventListener('click', function(){
      offset += 100;
      if (offset > 100 * (sliderItems.length - 1)) {
        offset = 0;
      }
      sliderLine.style.left = -offset + '%';
    })

    buttonPrev.addEventListener('click', function(){
      offset -= 100;
      if (offset < 0) {
        offset = 100 * (sliderItems.length - 1);
      }
      sliderLine.style.left = -offset + '%';
    })
  }
})
