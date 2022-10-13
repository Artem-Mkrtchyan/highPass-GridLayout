import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', function(){

  //search
  const searchBtn = document?.querySelector('.search-header__btn');
  const searchField = document?.querySelector ('.search-header__text');
  searchBtn?.addEventListener('click',() =>{
  searchField.classList.toggle('search-header__text--active');
  })

  //burger menu
  const burgerBtn = document.querySelector('.burger');

  if (burgerBtn) {
    const headerMenu = document.querySelector('.nav__list');
    burgerBtn.addEventListener('click', () =>{
      headerMenu.classList.toggle('nav__list--active');
      burgerBtn.classList.toggle('burger--active');
    })
  }

  //scroll to link
  const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick (e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto) ){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

        window.scrollTo ({
          top: gotoBlockValue,
          behavior: 'smooth'
        });
        e.preventDefault();
      }
    }
  }

   // initialize maps  55.767939, 37.621884
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.769535, 37.639985],
      zoom: 14,
      controls: []
    });
    myMap.controls.remove('zoomControl');
    var myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-icon.svg',
      iconImageSize: [12, 12]
    });
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    //отключение скролла карты
    myMap.behaviors.disable('scrollZoom');
    //... отключаем перетаскивание карты
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      myMap.behaviors.disable('drag');
    }
  }

  //скрытие модального окна карты
  if (document.querySelector('.contacts__info')){
    let infoContainer = document.querySelector('.contacts__info');
    let infoBtn = document.querySelector('.contacts__info-btn');
    infoBtn.addEventListener('click', () =>{
      infoBtn.classList.toggle('contacts__info-btn--disabled');
      infoContainer.classList.toggle('contacts__info--disabled')
    })
  }

})
