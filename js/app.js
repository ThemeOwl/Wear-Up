/* Slider start */
const slider = document.querySelectorAll('.slider');
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');

slider.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
})

let counter = 0;
prevBtn.addEventListener("click", function () {
    counter--;
    move();
})
nextBtn.addEventListener("click", function () {
    counter++;
    move();
})
console.log(counter);

function move() {
    if(counter === slider.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slider.length - 1;
    }

    slider.forEach(function (slider) {
        slider.style.transform = `translateX(-${counter * 100}%)`;
    })
}
/* Slider End */

/* Year set */
const year = document.querySelector(".footer-txt");
let years = new Date();
years = years.getFullYear();
year.innerHTML = `<h5>${years} wear up ©<h5>`;
/* Year set */

