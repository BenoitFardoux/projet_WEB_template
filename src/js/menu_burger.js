let isBurgerOpen = false;
let innerBurger = document.getElementById("");
let burgerMenu = document.getElementById("");


let burgerContent = [
    {
        nomCategorie: "a",
        lien : "lien categorie1",
        contenu: [
            {
                nomCategorie: "cat a", lien: "lien a"
            },
            {
                nomCategorie: "cat b", lien: "lien b"
            }]
    },
    {
        nomCategorie: "b",
        contenu: [
            {
                nomCategorie: "cat a", lien: "lien a"
            },
            {
                nomCategorie: "cat b", lien: "lien b"
            }]
    }
]

window.onload = () => {
    burgerMenu = document.getElementById("menu_burger");
    burgerMenu.addEventListener("click", toggleBurgerClicked);
    innerBurger = document.getElementById("innerBurger");
    addItemInBurgerMenu(innerBurger)
}


const open = () => {
    innerBurger.classList.remove("animateSlideOpen")
    burgerMenu.addEventListener("click", toggleBurgerClicked)
    innerBurger.removeEventListener("animationend", open)
}

const close = () => {
    innerBurger.classList.remove("animateSlideClose")
    innerBurger.classList.add("hidden")
    burgerMenu.addEventListener("click", toggleBurgerClicked);
    innerBurger.removeEventListener("animationend", close)
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

const addItemInBurgerMenu = (innerBurger) => {
    burgerContent.forEach((categorie) => {
        const categorieElement = document.createElement("div")

        categorieElement.classList.add("burger-category")
        categorieElement.innerText = `${categorie.nomCategorie}`
        innerBurger.appendChild(categorieElement)
        categorie.contenu.forEach((sousCategorie) => {
            const subCategoryElement = document.createElement("a")
            subCategoryElement.innerText = sousCategorie.nomCategorie
            subCategoryElement.href = sousCategorie.lien
            innerBurger.appendChild(subCategoryElement)
        })
    })
}