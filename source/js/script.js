'use strict';

//открытие/закрытие списка должностей
let positionName = document.querySelector('.position-name');
let positionWrapper = document.querySelector('.position-wrapper');
positionName.addEventListener('click', function (){
  if(positionWrapper.style.display === 'flex') {
      positionWrapper.style.display = 'none';
  } else {
    positionWrapper.style.display = 'flex';
  }
});

/*//выбор подразделения в карточке добавления сотрудников
let partWrapper = document.querySelector('.part-wrapper__arrow');
let partList = document.querySelector('.part-list');
partWrapper.addEventListener('click', function (){
  if(partList.style.display === 'flex') {
    partList.style.display = 'none';
  } else {
    partList.style.display = 'flex';
  }
});*/

//выбор типа экспорта
let paramsType = document.querySelector('.timesheet-popup-params__type');
let paramsList =  document.querySelector('.timesheet-popup-params__list');
paramsType.addEventListener('click', function(){
  if(paramsList.style.display === 'block') {
    paramsList.style.display = 'none';
  } else {
    paramsList.style.display = 'block';
    console.log('сделать невидимым');
  }
});

//отработка нажатия на кнопку "календарь" при скачивании
let calendarButton = document.querySelector('.timesheet-popup-params__month');
let monthPopup = document.querySelector('.choice-month-open');
calendarButton.addEventListener('click', function(){
  if(monthPopup.style.display === 'block') {
    monthPopup.style.display = 'none';
  } else {
    monthPopup.style.display = 'block';
  }
});

//открытие/закрытие календаря на главной
let calendar = document.querySelector('.calendar');
let calendarPopup = document.querySelector('.choice-month-open');
calendar.addEventListener('click', function(){
  if(calendarPopup.style.display === 'block') {
    calendarPopup.style.display = 'none';
  } else {
    calendarPopup.style.display = 'block';
  }
});

//переключатель отображения времени в табеле
let interfaceToggle = document.querySelector('.interface-toggle__checkbox');
let interfaceInput = document.querySelector('.interface-toggle__input');
let toggleDecoration = document.querySelector('.interface-toggle__point');
let interfaceTime = document.querySelector('.interface-toggle__time-interval');
let interfaceInterval = document.querySelector('.interface-toggle__hours-interval');
interfaceToggle.addEventListener('click', function(evt) {
  if(interfaceInput.checked) {
    toggleDecoration.style.right = '13px';
    interfaceTime.classList.add('interface-toggle__time-interval--active');
    interfaceInterval.classList.remove('interface-toggle__hours-interval--active');
  } else {
    toggleDecoration.style.right = '0px';
    interfaceTime.classList.remove('interface-toggle__time-interval--active');
    interfaceInterval.classList.add('interface-toggle__hours-interval--active');
  }
});


//переключение присутствия сотрудника
let presence = document.querySelector('.presence');
let presenceLeft = presence.querySelector('.presence-left');
let presenceRight = presence.querySelector('.presence-right');
let presenceToggle = presence.querySelector('.presence-toggle-input');

presence.addEventListener('click', function(evt) {
  console.log(evt.target);
  console.log(evt.target.classList.toggle);
  if(evt.target.classList.toggle == 'presence-left') {
    console.log('левая');
  }
  
});