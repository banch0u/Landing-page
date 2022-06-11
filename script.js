
// slider's java script

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
  $('#rightArrow').prop('disabled', true);
  setTimeout(function () {
    $('#rightArrow').prop('disabled', false);
  }, 700);
});

leftArrowKey.addEventListener('click', function () {
  slider[0].style = "transform: translateX(230%);z-index: 30;"
  slider[1].style = "transform: translateX(6%);z-index: 50;"
  slider[2].style = "transform: translateX(119%);z-index: 80;"
  let tempSlide = slider.shift();
  slider.push(tempSlide);

  $('#leftArrow').prop('disabled', true);
  setTimeout(function () {
    $('#leftArrow').prop('disabled', false);
  }, 700);

});


// tab's java script
const tab1 = document.querySelector('#day1');
const tab2 = document.querySelector('#day2');
const tab3 = document.querySelector('#day3');

const timeline1 = document.querySelector('#dayOneSchedule');
const timeline2 = document.querySelector('#dayTwoSchedule');
const timeline3 = document.querySelector('#dayThreeSchedule');


let activeTab = 1;

tab1.addEventListener('click', function () {
  if (activeTab != 1) {
    tab2.classList.remove('active-tab');
    tab3.classList.remove('active-tab');
    tab1.classList.add('active-tab');
    timeline2.classList.remove('timeline-active');
    timeline3.classList.remove('timeline-active');
    timeline1.classList.add('timeline-active');
    activeTab = 1;
  }
});
tab2.addEventListener('click', function () {
  if (activeTab != 2) {
    tab1.classList.remove('active-tab');
    tab3.classList.remove('active-tab');
    tab2.classList.add('active-tab');
    timeline1.classList.remove('timeline-active');
    timeline3.classList.remove('timeline-active');
    timeline2.classList.add('timeline-active');
    activeTab = 2;
  }
});
tab3.addEventListener('click', function () {
  if (activeTab != 3) {
    tab1.classList.remove('active-tab');
    tab2.classList.remove('active-tab');
    tab3.classList.add('active-tab');
    timeline1.classList.remove('timeline-active');
    timeline2.classList.remove('timeline-active');
    timeline3.classList.add('timeline-active');
    activeTab = 3;
  }
});

