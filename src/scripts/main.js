'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallReact = wall.getBoundingClientRect();

  const spiderWidth = parseFloat(window.getComputedStyle(spider).width);
  const spiderHeight = parseFloat(window.getComputedStyle(spider).height);

  const clickX = e.clientX - wallReact.left;
  const clickY = e.clientY - wallReact.top;

  let left = clickX - spiderWidth / 2;
  let topp = clickY - spiderHeight / 2;

  left = Math.max(0, Math.min(left, wall.clientWidth - spiderWidth));
  topp = Math.max(0, Math.min(topp, wall.clientHeightz - spiderHeight));

  spider.style.left = `${left}px`;
  spider.style.top = `${topp}px`;
});
