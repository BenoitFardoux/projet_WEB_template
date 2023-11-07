let isBurgerClicked = false;
let innerBurger = undefined;

window.onload = () => {
    const burger = document.getElementById("menu_burger");
    innerBurger = document.getElementById("innerBurger");

    burger.addEventListener("click", toggleBurgerClicked);

}


const toggleBurgerClicked = () => {
    isBurgerClicked = !isBurgerClicked;

}
