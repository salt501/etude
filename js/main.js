'use strict';

{
  const main = document.querySelector('.menu-btn');
  const list = document.querySelector('.menu-container');

  main.addEventListener('click', () => {
    main.classList.toggle('active');
    list.classList.toggle('active');
  })
}