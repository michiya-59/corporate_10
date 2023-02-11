'use strict'

window.addEventListener('load', () => {
  const header = document.getElementById('header');
  const contact_container = document.getElementById('contact_container');

  window.addEventListener('scroll', () => {
    const header_scroll = header.getBoundingClientRect().top;
    const contact_container_scroll = contact_container.getBoundingClientRect().top;

    if(header_scroll > contact_container_scroll - 160){
      header.classList.add('active');
    }else{
      if(header.classList.contains('active')){
        header.classList.remove('active');
      }
    }
  });

});