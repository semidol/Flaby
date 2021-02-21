function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('_webp');
}else{
document.querySelector('body').classList.add('_no-webp');
}
});

document.querySelector('.row-header__burger').addEventListener("click", burger);

function burger() {
  document.body.classList.toggle('_lock');
  document.querySelector('.row-header__burger').classList.toggle('_active');
  document.querySelector('.row-header__menu').classList.toggle('_active');
}

window.addEventListener("load", loadFunc);

function loadFunc() {
  for (let elem of document.querySelectorAll('.content-other__heading img')) {
    elem.parentElement.parentElement.style.left = `-${elem.parentElement.offsetWidth}px`;
  }
}

let quantitySlides = document.querySelectorAll('.slider-page').length;
let translate = 0;
let sliderWidth = document.querySelector('.slider-content').offsetWidth;
let position = 1;

next.onclick = function() {
  if (position != quantitySlides) {
    translate += -sliderWidth;
    position++;
    prev.classList.remove("_passive");
    if (position == quantitySlides) {
      next.classList.add("_passive")
    }
  }
  document.querySelector('.slider-row').style.transform = `translate(${translate}px)`;
}

prev.onclick = function() {
  if (position != 1) {
    translate += sliderWidth;
    position--;
    next.classList.remove("_passive");
    if (position == 1) {
      prev.classList.add("_passive")
    }
  }
  document.querySelector('.slider-row').style.transform = `translate(${translate}px)`;
}

for (let elem of document.querySelectorAll('.footer-colums__heading')) {
  elem.onclick = function() {
    elem.classList.toggle('_active');
    elem.nextElementSibling.classList.toggle('_active');
  }
}
