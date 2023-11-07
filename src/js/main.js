let isBurgerClicked = false;
const toggleBurgerClicked = () => {
    isBurgerClicked = !isBurgerClicked;
}

window.onload = () => {
    const burger = document.getElementById("menu_burger");
    burger.addEventListener("click", toggleBurgerClicked);
}
