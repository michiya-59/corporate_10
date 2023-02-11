'use strict'

window.addEventListener('load', () => {
  const header = document.getElementById('header');
  const vision = document.getElementById('vision');
  const ceo_message = document.getElementById('ceo_message');
  const company = document.getElementById('company');


  window.addEventListener('scroll', () => {
    const header_scroll = header.getBoundingClientRect().top;
    const vision_scroll = vision.getBoundingClientRect().top;
    const ceo_message_scroll = ceo_message.getBoundingClientRect().top;
    const company_scroll = company.getBoundingClientRect().top;

    fadeIn(vision, vision_scroll);
    fadeIn(ceo_message, ceo_message_scroll);
    fadeIn(company, company_scroll);

    header_background_change(header_scroll, vision_scroll, header);
  });

  function fadeIn(ele, ele_scroll, delay = 100){
    //ブラウザの高さを取得
    const window_height = window.innerHeight;

    if (window_height > ele_scroll + delay){
      ele.classList.add('active');
    }
  }

  function header_background_change(header_scroll, vision_scroll, header){
    if(header_scroll > vision_scroll - 160){
      header.classList.add('active');
    }else{
      if(header.classList.contains('active')){
        header.classList.remove('active');
      }
    }
  }
});