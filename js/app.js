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

/* Burger setup */
const burger = document.querySelector(".burger-btn");
const menuContainer = document.querySelector(".header-container2");

burger.addEventListener("click", function(){
    menuContainer.classList.toggle("menu-show");
});

/* Burger setup end */


/* Search setup */
const searchBar = document.querySelector(".search-bar");
let headerRight = document.querySelector('.header-right');
let searchHead = document.querySelector('.search-head');

searchHead.innerHTML = `<input class="show-input" type="text" placeholder="Search">
<button class="search-btn-head"><span class="iconify search-icon"
        data-icon="bx:bx-search-alt"></span></button>`;

searchBar.innerHTML = `<input type="text" placeholder="Search">
<button class="search-btn"><span class="iconify search-icon"
        data-icon="bx:bx-search-alt"></span></button>`;




    // containerWidth = window.screen.width;
    // checkWidth = 690;
    // if(containerWidth <= checkWidth){
    //     headerRight.innerHTML = `<button class="search-head"><span class="iconify search-icon"
    //             data-icon="bx:bx-search-alt"></span></button>`;
    // }else{
    //     headerRight.innerHTML = ``;
    // }

/* Search setup show on header*/
const searchShow = document.querySelector('.search-btn-head');
const searchInput = document.querySelector('.search-head input');

searchShow.addEventListener("click" ,function(){
    searchInput.classList.toggle('show-input');
})



/* Rightcard JS start*/
const show_blur = document.querySelector(".rightbar_blur");
const show_rightbar = document.querySelector(".cart_rightbar_conatiner");
const cart_btn = document.querySelector(".header_cart_icon");

// leftbar_menu.classList.remove("show_menu");
cart_btn.addEventListener("click", () => {
  show_blur.classList.add("show_rightbar_blur");
  show_rightbar.classList.add("show_rightbar");
  // show_area_blur.classList.remove();
  if (
    userlogin_form.classList.contains("show_login_card") ||
    leftbar_menu.classList.contains("show_menu") ||
    show_area_blur.contains("show_area_blur")
  ) {
    show_area_blur.classList.remove("show_area_blur");
    userlogin_form.classList.remove("show_login_card");
    leftbar_menu.classList.remove("show_menu");
    leftbar_socialicon_container.classList.remove(
      "show_leftbar_socialicon_container"
    );
    // show_area_blur
    burger_btn.style.display = "block";
    burger_btn_new.style.display = "none";
  }
});
show_blur.addEventListener("click", function (e) {
  e.target.classList.remove("show_rightbar_blur");
  e.target.classList.remove("show_rightbar");
});
/* Rightcard JS End*/