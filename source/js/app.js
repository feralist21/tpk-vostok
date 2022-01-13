//Переключение бургер-меню
(function() {
  const toggle = document.querySelector('.header__btn-toggle');
  const navList = document.querySelector('.nav__list');

  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    if (toggle.classList.contains('is-active')) {
      toggle.classList.remove('is-active');
      navList.classList.remove('is-active');

    } else {
      toggle.classList.add('is-active');
      navList.classList.add('is-active');
    }
  });
})();

//Плавный скролл
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr('href'),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});

//Отправка формы
$('#form').submit(function(e){
	var popup = $('#popup_text');
	e.preventDefault();
	$.ajax({
	url: '/send.php',
	type: 'POST',
	data: $('#form').serialize(),
	success: function(response) {
	//обработка успешной отправки
	//  popup.html('Ваше сообщение успешно отправлено!').delay(2000).fadeOut(1000);
  popup.addClass('is-active');
  popup.delay(2000).fadeOut(1000);

  $('#form').trigger('reset');
	},
	error: function(response) {
	//обработка ошибок при отправке
	}
	});
	});

//Яндекск карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [49.787988, 129.927782],
          zoom: 14
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'ТПК Восток',
          balloonContent: 'ТПК Восток'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/baloon.svg',
          // Размеры метки.
          iconImageSize: [50, 70],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-25, -58]
      });

  myMap.geoObjects
      .add(myPlacemark);
});

//toTop
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});

//modal
const modal = function() {
  const modal = document.querySelector('.modal');
  const btnClose = document.querySelector('#modal-close');
  const open1 = document.querySelector('#trigger-1');
  const open2 = document.querySelector('#trigger-2');

  function openModal() {
    modal.classList.toggle('modal--active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.toggle('modal--active');
    document.body.style.overflowY = 'hidden';
  }

  if (open1) {
    open1.addEventListener('click', openModal);
  }
  if (open2) {
    open2.addEventListener('click', openModal);
  }

  btnClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('modal--active')) {
      closeModal();
    }
  });

};

modal();
