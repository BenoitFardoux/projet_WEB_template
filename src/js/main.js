let isBurgerClicked = false;
let innerBurger = document.getElementById("");

window.onload = () => {
    const burger = document.getElementById("menu_burger");
    innerBurger = document.getElementById("innerBurger");

    burger.addEventListener("click", toggleBurgerClicked);

}


/**
 * display or hide the content of burger menu
 */
const toggleBurgerClicked = () => {
    isBurgerClicked = !isBurgerClicked;
    if (!isBurgerClicked){
        innerBurger.classList.add("disabled")
    } else {
        innerBurger.classList.remove("disabled")
    }
}
