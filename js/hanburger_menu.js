'use strict'

window.addEventListener('load', () => {
  const hanburger_menu = document.getElementById('hanburger_menu');
  const mask_menu = document.getElementById('mask_menu');
  const mask = document.getElementById('mask');
  const about = document.getElementById('about');
  const works = document.getElementById('works');
  const culture = document.getElementById('culture');
  const topics = document.getElementById('topics');
  const contact = document.getElementById('contact');

  hanburger_menu.addEventListener('click', () => {
    hanburger_menu.classList.toggle('active')
    mask_menu.classList.toggle('active')
    mask.classList.toggle('active')
  });
  
  mask.addEventListener('click', () => {
    hanburger_menu.classList.remove('active')
    mask_menu.classList.remove('active')
    mask.classList.remove('active')
  });
  
  about.addEventListener('click', () => {
    hanburger_menu.classList.remove('active')
    mask_menu.classList.remove('active')
    mask.classList.remove('active')
  });
  
  works.addEventListener('click', () => {
    hanburger_menu.classList.remove('active')
    mask_menu.classList.remove('active')
    mask.classList.remove('active')
  });
  
  culture.addEventListener('click', () => {
    hanburger_menu.classList.remove('active')
    mask_menu.classList.remove('active')
    mask.classList.remove('active')
  });
  
  topics.addEventListener('click', () => {
    hanburger_menu.classList.remove('active')
    mask_menu.classList.remove('active')
    mask.classList.remove('active')
  });
  
  contact.addEventListener('click', () => {
    hanburger_menu.classList.remove('active')
    mask_menu.classList.remove('active')
    mask.classList.remove('active')
  });
});