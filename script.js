const leftArrowKey = document.querySelector('#leftArrow');
const rightArrowKey = document.querySelector('#rightArrow');

let slider0 = document.querySelector('#slider0');
let slider1 = document.querySelector('#slider1');
let slider2 = document.querySelector('#slider2');

const sldierOrder = [0, 1, 2];

leftArrowKey.addEventListener('click', function () {

});
let pop = sldierOrder.pop();
console.log(pop);
sldierOrder.unshift(pop);
console.log(sldierOrder);
