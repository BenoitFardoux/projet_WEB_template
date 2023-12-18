let isBurgerOpen = false;
let innerBurger = document.getElementById("");
let burgerMenu = document.getElementById("");
window.onload = () => {
    burgerMenu = document.getElementById("menu_burger");
    burgerMenu.addEventListener("click", toggleBurgerClicked);
    innerBurger = document.getElementById("innerBurger");
}




const open = () => {
    innerBurger.classList.remove("animateSlideOpen")
    burgerMenu.addEventListener("click", toggleBurgerClicked)
    innerBurger.removeEventListener("animationend",open)
}

const close = () => {
    innerBurger.classList.remove("animateSlideClose")
    innerBurger.classList.add("hidden")
    burgerMenu.addEventListener("click", toggleBurgerClicked);
    innerBurger.removeEventListener("animationend",close)
}
/**
 * display or hide the content of burger menuZz
 */
const toggleBurgerClicked = () => {
    isBurgerOpen = !isBurgerOpen;
    burgerMenu.removeEventListener("click", toggleBurgerClicked);


    if (isBurgerOpen) {
        innerBurger.classList.remove("hidden")
        innerBurger.classList.add("animateSlideOpen")
        innerBurger.addEventListener("animationend", open)

    } else {
        innerBurger.classList.add("animateSlideClose")
        innerBurger.addEventListener("animationend", close)
    }
}
