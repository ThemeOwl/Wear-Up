/* Rightcard JS start*/
const show_blur = document.querySelector(".rightbar_blur");
const show_rightbar = document.querySelector(".cart_rightbar_conatiner");
const cart_btn = document.querySelector(".header_cart_icon");
const cross_img = document.querySelector(".cross-img");


// leftbar_menu.classList.remove("show_menu");
cart_btn.addEventListener("click", () => {
  show_blur.classList.add("show_rightbar_blur");
  show_rightbar.classList.add("show_rightbar");
  // show_area_blur.classList.remove();
//   if (
//     userlogin_form.classList.contains("show_login_card") ||
//     leftbar_menu.classList.contains("show_menu") ||
//     show_area_blur.contains("show_area_blur")
//   ) {
//     show_area_blur.classList.remove("show_area_blur");
//     userlogin_form.classList.remove("show_login_card");
//     leftbar_menu.classList.remove("show_menu");
//     leftbar_socialicon_container.classList.remove(
//       "show_leftbar_socialicon_container"
//     );
//     // show_area_blur
//     burger_btn.style.display = "block";
//     burger_btn_new.style.display = "none";
//   }
// });
});
// show_blur.addEventListener("click", function (e) {
//   e.target.classList.remove("show_rightbar_blur");
//   e.target.classList.remove("show_rightbar");
// });
/* Rightcard JS End*/
show_blur.addEventListener("click", (e) => {
    // e.target.classList.remove("show_rightbar_blur");
    e.target.classList.add("showbar");
    show_blur.classList.remove("show_rightbar_blur");
  show_rightbar.classList.remove("show_rightbar");
})