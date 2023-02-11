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
  const vision_menu = document.getElementById('vision_menu');
  const ceo_message_menu = document.getElementById('ceo_message_menu');
  const company_menu = document.getElementById('company_menu');
  const top = document.getElementById('top');

  hanburger_menu.addEventListener('click', () => {
    hanburger_menu.classList.toggle('active')
    mask_menu.classList.toggle('active')
    mask.classList.toggle('active')
  });

  element_remove(mask, hanburger_menu, mask_menu, mask);
  element_remove(about, hanburger_menu, mask_menu, mask);
  element_remove(works, hanburger_menu, mask_menu, mask);
  element_remove(culture, hanburger_menu, mask_menu, mask);
  element_remove(topics, hanburger_menu, mask_menu, mask);
  element_remove(contact, hanburger_menu, mask_menu, mask);
  element_remove(vision_menu, hanburger_menu, mask_menu, mask);
  element_remove(ceo_message_menu, hanburger_menu, mask_menu, mask);
  element_remove(company_menu, hanburger_menu, mask_menu, mask);
  element_remove(top, hanburger_menu, mask_menu, mask);

  function element_remove(element, hanburger_menu, mask_menu, mask){
    element.addEventListener('click', () => {
      hanburger_menu.classList.remove('active')
      mask_menu.classList.remove('active')
      mask.classList.remove('active')
    });
  }
});