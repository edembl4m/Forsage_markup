const iconMenu = document.querySelector(".menu-icon");

if(iconMenu) {
    const menu = document.querySelector("nav");
    const menuLine = document.querySelector(".nav-bar");
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
        menuLine.classList.toggle('_active');
    });
}

let navCat = document.querySelector(".nav-category");
let subMenu = document.querySelector(".submenu");

navCat.addEventListener("click", function(e){
    subMenu.classList.toggle('_active');
    navCat.classList.toggle('_active');
});
