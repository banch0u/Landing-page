const leftArrowKey = document.querySelector('#leftArrow');
const rightArrowKey = document.querySelector('#rightArrow');

let slider0 = document.querySelector('#slider0');
let slider1 = document.querySelector('#slider1');
let slider2 = document.querySelector('#slider2');

const slider = [slider0, slider1, slider2];

rightArrowKey.addEventListener('click', function () {
  slider[0].style = "transform: translateX(119%);z-index: 80;"
  slider[1].style = "transform: translateX(230%);z-index: 50;"
  slider[2].style = "transform: translateX(6%);z-index: 30;"
  let tempSlide = slider.pop();
  slider.unshift(tempSlide);
});
