'use strict'

// Navigation Autoclose
const nav = document.querySelector('.navigation__nav');
const checkbox = document.querySelector('.navigation__checkbox');

// Add event listener in ul
nav.addEventListener('click', function(element) {
  // targetting the link elements
  const link = element.target.closest('.navigation__link');
  // guard clause it will just return if the clicked element is not closest to link
  if(!link) return;
  // uncheck the checkbox
  checkbox.checked = false;
});


const modal = document.querySelector('.popup');
modal.addEventListener('click', function(event){
  if (event.target === modal) {
    window.location.hash = '#section-tours';
  }
});