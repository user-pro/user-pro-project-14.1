function initBurger(burgerSelector, menuSelector) {
   const burger = document.querySelector(`${burgerSelector}`),
      menu = document.querySelector(`${menuSelector}`),
      body = document.querySelector('body');

   burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('lock');
   });
};

initBurger('.header__burger', '.header__menu');


if (document.documentElement.clientWidth < 1110) {

   const catalogInstSlider = new Swiper('.catalog-inst__images', {
      // slidesPerView: 1.2,
      loop: true,
      spaceBetween: 20,
      breakpoints: {
         1110: {
            slidesPerView: 2,
         },
         600: {
            slidesPerView: 2,
         }

      },
   });
}
const productPageSliderBig = new Swiper('.product-block__slider-main', {
   slidesPerView: 1,
   effect: 'slide',
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   thumbs: {
      swiper: {
         el: '.product-block__slider-mini',
         slidesPerView: 2,
         direction: `vertical`
      }
   },
   breakpoints: {
      767: {
         effect: 'fade',
      }
   },
});
const pPslider = new Swiper('.popular-products-slider', {
   loop: true,
   breakpointsInverse: false,
   slidesPerView: 1.2,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   breakpoints: {
      1500: {
         slidesPerView: 3,
      },
      1140: {
         slidesPerView: 2,
      },
      767: {
         slidesPerView: 1,
      },
      600: {
         slidesPerView: 2,
      },
      496: {
         slidesPerView: 1,
      },
      440: {
         slidesPerView: 1.4,
      }
   },
});
const pSslider = new Swiper('.products-sale-slider', {
   loop: true,
   breakpointsInverse: false,
   slidesPerView: 1.2,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   breakpoints: {
      1500: {
         slidesPerView: 3,
      },
      1140: {
         slidesPerView: 2,
      },
      767: {
         slidesPerView: 1,
      },
      600: {
         slidesPerView: 2,
      },
      496: {
         slidesPerView: 1,
      },
      440: {
         slidesPerView: 1.4,
      }
   },
});
const pNslider = new Swiper('.new-products-slider', {
   loop: true,
   breakpointsInverse: false,
   slidesPerView: 1.2,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   breakpoints: {
      1410: {
         slidesPerView: 4,
      },
      1140: {
         slidesPerView: 3,
      },
      // 767: {
      //    slidesPerView: 2,
      // },
      650: {
         slidesPerView: 2,
      },
      496: {
         slidesPerView: 1,
      },
      440: {
         slidesPerView: 1.2,
      }
   },
});
const reccomendedSlider = new Swiper('.recommended-slider', {
   loop: true,
   breakpointsInverse: false,
   slidesPerView: 1.15,
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   breakpoints: {
      1410: {
         slidesPerView: 4,
      },
      1140: {
         slidesPerView: 3,
      },
      // 767: {
      //    slidesPerView: 2,
      // },
      650: {
         slidesPerView: 2,
      },
      496: {
         slidesPerView: 1,
      },
      440: {
         slidesPerView: 1.2,
      }
   },
});
const pPsliderNext = document.querySelector('.PP-next'),
   pPsliderPrev = document.querySelector('.PP-prev');

const pSsliderNext = document.querySelector('.PS-next'),
   pSsliderPrev = document.querySelector('.PS-prev');

reassignSliderButtons(pSsliderPrev, pSsliderNext, pSslider);
reassignSliderButtons(pPsliderPrev, pPsliderNext, pPslider);

function reassignSliderButtons(buttonPrev, buttonNext, slider) {
   if (buttonNext) {
      buttonNext.addEventListener('click', () => {
         slider.slideNext();
      });
      buttonPrev.addEventListener('click', () => {
         slider.slidePrev();
      });
   }
}

const headerSearch = document.querySelector('.header-bottom-search__input');
if ((headerSearch) && (document.documentElement.clientWidth < 496)) {
   headerSearch.setAttribute('placeholder', 'Поиск')
}

const prodCounter = document.querySelectorAll('.product__counter');

for (let i = 0; i < prodCounter.length; i++) {
   let counter = prodCounter[i];
   let counterPlus = counter.querySelector('.js-product-counter-plus'),
      counterOutput = counter.querySelector('.js-product-output'),
      counterMinus = counter.querySelector('.js-product-counter-minus'),
      currentCount = 1;
   counterPlus.addEventListener('click', () => {
      currentCount++;
      counterOutput.innerHTML = currentCount;
   });
   counterMinus.addEventListener('click', () => {
      if (currentCount > 1) {
         currentCount--;
         counterOutput.innerHTML = currentCount;
      }
   });

}



const catalogSelects = document.querySelectorAll('.catalog-content__select'),
   placeSearchBoxSelect = document.querySelectorAll('.place-search-box__select'),
   catalogFilterMedia = document.querySelector('.catalog-content__filter-media-block'),
   catalogFilter = document.querySelector('.catalog-content__filter-form'),
   catalogFilterClicker = document.querySelector('.catalog-content__filter-media-block-text');

if (catalogSelects.length > 0) {

   catalogSelects.forEach(item => {
      item.addEventListener('click', (e) => {
         item.classList.toggle('active');
      });
   });
}
if (placeSearchBoxSelect.length > 0) {
   placeSearchBoxSelect.forEach(item => {
      item.addEventListener('click', (e) => {
         item.classList.toggle('active');
      });
   });
}
if (catalogFilterMedia) {
   catalogFilterClicker.addEventListener('click', () => {
      catalogFilterMedia.classList.toggle('active');
      catalogFilter.classList.toggle('active');
   });
}



"use strict";

function DynamicAdapt(type) {
   this.type = type;
}

DynamicAdapt.prototype.init = function () {
   const _this = this;
   // массив объектов
   this.оbjects = [];
   this.daClassname = "_dynamic_adapt_";
   // массив DOM-элементов
   this.nodes = document.querySelectorAll("[data-da]");

   // наполнение оbjects объктами
   for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(dataArray[0].trim());
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
   }

   this.arraySort(this.оbjects);

   // массив уникальных медиа-запросов
   this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
      return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
   }, this);
   this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
   });

   // навешивание слушателя на медиа-запрос
   // и вызов обработчика при первом запуске
   for (let i = 0; i < this.mediaQueries.length; i++) {
      const media = this.mediaQueries[i];
      const mediaSplit = String.prototype.split.call(media, ',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
         return item.breakpoint === mediaBreakpoint;
      });
      matchMedia.addListener(function () {
         _this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
   }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
   if (matchMedia.matches) {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         оbject.index = this.indexInParent(оbject.parent, оbject.element);
         this.moveTo(оbject.place, оbject.element, оbject.destination);
      }
   } else {
      for (let i = 0; i < оbjects.length; i++) {
         const оbject = оbjects[i];
         if (оbject.element.classList.contains(this.daClassname)) {
            this.moveBack(оbject.parent, оbject.element, оbject.index);
         }
      }
   }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
   element.classList.add(this.daClassname);
   if (place === 'last' || place >= destination.children.length) {
      destination.insertAdjacentElement('beforeend', element);
      return;
   }
   if (place === 'first') {
      destination.insertAdjacentElement('afterbegin', element);
      return;
   }
   destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
   element.classList.remove(this.daClassname);
   if (parent.children[index] !== undefined) {
      parent.children[index].insertAdjacentElement('beforebegin', element);
   } else {
      parent.insertAdjacentElement('beforeend', element);
   }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
   const array = Array.prototype.slice.call(parent.children);
   return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
   if (this.type === "min") {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return -1;
            }

            if (a.place === "last" || b.place === "first") {
               return 1;
            }

            return a.place - b.place;
         }

         return a.breakpoint - b.breakpoint;
      });
   } else {
      Array.prototype.sort.call(arr, function (a, b) {
         if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
               return 0;
            }

            if (a.place === "first" || b.place === "last") {
               return 1;
            }

            if (a.place === "last" || b.place === "first") {
               return -1;
            }

            return b.place - a.place;
         }

         return b.breakpoint - a.breakpoint;
      });
      return;
   }
};

const da = new DynamicAdapt("max");
da.init();;
class TabList {
   constructor(buttonsContainer, tabs) {
     this.buttonsContainer = buttonsContainer;
     this.tabs = tabs;
     
     this.buttonsContainer.addEventListener('click', event => {
       const index = event.target.closest('.c-tab-link').dataset.value;
       
       this.openTab(index);
     });
   }
   
   openTab(index) {
     this.tabs.querySelector('.active').classList.remove('active');
     this.tabs.querySelector(`.tab--${index}`).classList.add('active');
   }
};



document.addEventListener('DOMContentLoaded', () => {
   const buttonsContainer = document.querySelector('.c-tabs-links'),
      tabs = document.querySelector('.catalog-tabs');
   if (tabs) {
      const tabList = new TabList(buttonsContainer, tabs);
   }
})

const placeSearchCitiesRows = document.querySelectorAll(`.place-search-cities__row`);
const footer = document.querySelector(`.footer`);
if (placeSearchCitiesRows.length > 0) {
   if (document.documentElement.clientWidth < 496) {
      footer.style.marginTop = `0px`;
   }
}
for (let i = 0; i < placeSearchCitiesRows.length; i++) {

   const placeSearchCitiesRow = placeSearchCitiesRows[i];
   placeSearchCitiesRow.addEventListener(`click`, (e) => {
      if (e.target.classList.contains('place-search-cities__city') || e.target.classList.contains('place-search-cities__city-arrow')) {
         if (document.documentElement.clientWidth > 767) {

            let items = document.querySelectorAll(`.place-search-cities__city`);
            for (let i = 0; i < items.length; i++) {
               const element = items[i];
               element.classList.remove('active');
            }
         }

         e.target.classList.toggle(`active`);
      } else {
         let items = document.querySelectorAll(`.place-search-cities__city`);
         for (let i = 0; i < items.length; i++) {
            const element = items[i];
            element.classList.remove('active');
         }
      }
   })
}
