function getSelectValue(){
    let selectValue = document.getElementById("list").value;
    console.log(selectValue);
}



/* Year set */
const year = document.querySelector(".footer-txt");
let years = new Date();
years = years.getFullYear();
year.innerHTML = `<h5>${years} wear up ©<h5>`;
/* Year set */

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


/* Search setup show on header*/
const searchShow = document.querySelector('.search-btn-head');
const searchInput = document.querySelector('.search-head input');

searchShow.addEventListener("click" ,function(){
    searchInput.classList.toggle('show-input');
})


/* Burger setup */
const burger = document.querySelector(".burger-btn");
const menuContainer = document.querySelector(".header-container2");

burger.addEventListener("click", function(){
    menuContainer.classList.toggle("menu-show");
});

/* Burger setup end */

