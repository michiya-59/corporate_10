'use strict'

window.addEventListener('load', () => {
  const header = document.getElementById('header');
  const about_cotainer = document.getElementById('about_cotainer');
  const about_content = document.getElementById('about_content');
  const works_title = document.getElementById('works_title');
  const culture_title = document.getElementById('culture_title');
  const latest_topics = document.getElementById('latest_topics');
  const contact = document.getElementById('contact_main');

  window.addEventListener('scroll', () => {
    const header_scroll = header.getBoundingClientRect().top;
    const about_cotainer_scroll = about_cotainer.getBoundingClientRect().top;
    const about_content_scroll = about_content.getBoundingClientRect().top;
    const works_title_scroll = works_title.getBoundingClientRect().top;
    const culture_title_scroll = culture_title.getBoundingClientRect().top;
    const latest_topicsle_scroll = latest_topics.getBoundingClientRect().top;
    const contact_scroll = contact.getBoundingClientRect().top;

    fadeIn(about_content, about_content_scroll);
    fadeIn(works_title, works_title_scroll);
    fadeIn(culture_title, culture_title_scroll);
    fadeIn(latest_topics, latest_topicsle_scroll);
    fadeIn(contact, contact_scroll, -100);

    header_background_change(header_scroll, about_cotainer_scroll, header);
  });

  function fadeIn(ele, ele_scroll, delay = 100){
    //ブラウザの高さを取得
    const window_height = window.innerHeight;

    if (window_height > ele_scroll + delay){
      ele.classList.add('active');
    }
  }

  function header_background_change(header_scroll, about_cotainer_scroll, header){
    if(header_scroll > about_cotainer_scroll - 160){
      header.classList.add('active');
    }else{
      if(header.classList.contains('active')){
        header.classList.remove('active');
      }
    }
  }
});