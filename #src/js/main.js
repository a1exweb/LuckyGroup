"use strict";

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});


const phoneSelect = document.querySelector('.phone-select');
const phoneSelectOption = document.querySelector('.phone-select__option');
const phoneSelectOptions = document.querySelector('.phone-select__options');
const phoneItems = phoneSelectOptions.querySelectorAll('.phone-select__item');

const phone = document.querySelector('.phone-select__option .phone-select__item');

phoneSelect.addEventListener('click', e => {
  const target = e.target;

  phoneSelectOptions.classList.toggle('phone-select__options_active');
  
  if (target.matches('.phone-select__options .phone-select__item')) {
    phoneSelectOption.innerHTML = '';
    const cloneNode = target.cloneNode(true);
    phoneSelectOption.appendChild(cloneNode);
  }

  const phone = document.querySelector('.block-form__input_phone');
  switch (target.dataset.country) {
    case 'ru':
      phone.placeholder = '+7 (123) 456 78-90';
      break;
    case 'ua':
      phone.placeholder = '+380 (123) 456 78-90';
      break;
  }
});



