const leftArrowKey = document.querySelector('#leftArrow');
const rightArrowKey = document.querySelector('#rightArrow');

let slider0 = document.querySelector('#slider0');
let slider1 = document.querySelector('#slider1');
let slider2 = document.querySelector('#slider2');

const slider = [slider0, slider1, slider2];

rightArrowKey.addEventListener('click', function () {
  slider[0].style = "transform: translateX(110%);"
  slider[1].style = "transform: translateX(110%);"
  slider[2].style = "transform: translateX(-220%);"
  let tempSlide = slider.pop();
  slider.unshift(tempSlide);
});
