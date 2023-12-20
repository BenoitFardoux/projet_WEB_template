let dialog = document.getElementById("search-dialog")
let searchResultElement = document.getElementById("search-result")
let searchResult = []

const mockedSearchResult = [{
    title: 'cours 1', link: 'www.google.com'
},
    {
        title: 'cours 2', link: 'www.google.com'
    }]

const openClickPopup = () => {
    dialog.showModal()

}

dialog.addEventListener("click", (event) => {
    if (event.target === dialog)
        dialog.close()
})


let searchTimeOut;

const searchItem = (critereDeRecherche) => {
    return mockedSearchResult.filter((element) => {
        return element.title.includes(critereDeRecherche)
    })
}

let isUp = false
let animationEnCours = false
dialog.addEventListener("input", (event) => {
    if (searchTimeOut !== null)
        clearTimeout(searchTimeOut)

    if (event.target.value !== "") { // si le contenu de la recherche n'est pas vide
        searchTimeOut = setTimeout(() => {
            searchResult = searchItem(event.target.value)
            // Effacer les résultats précédents
            clearSearchResults();

            // Afficher les nouveaux résultats
            displaySearchResults();
        }, 200)
        if (!isUp && !animationEnCours) {
            animationEnCours = true
            isUp = true
            dialog.classList.add('animateStartWriting')
            dialog.classList.remove('empty-dialog')
            dialog.addEventListener("animationend", deplacerLaBarreDeRecherchePlusHaut)
        }
    } else {
        searchResult = []
        if (isUp){
            clearSearchResults();

            animationEnCours = true
            isUp = false
            dialog.classList.add('animateStopWriting')
            dialog.classList.remove('writing-dialog')
            dialog.addEventListener("animationend", deplacerLaBarreDeRecherchePlusBas)

        }

    }
})

/**
 * quand la barre de recherche est plus haut
 */
const deplacerLaBarreDeRecherchePlusHaut = () => {

    dialog.classList.add('writing-dialog') // indique que la barre de recherche est en haut
    dialog.classList.remove('animateStartWriting')
    dialog.removeEventListener("animationend", deplacerLaBarreDeRecherchePlusHaut)
    animationEnCours = false
}

const deplacerLaBarreDeRecherchePlusBas = () => {

    dialog.classList.add('empty-dialog') // indique que la barre de recherche est en bas
    dialog.classList.remove('animateStopWriting')

    dialog.removeEventListener("animationend", deplacerLaBarreDeRecherchePlusBas)
    animationEnCours = false

}

// Fonction pour effacer les résultats précédents
const clearSearchResults = () => {
    // Supprimer les résultats en dessous de la barre de recherche
    const results = document.querySelectorAll("#search-result > div");
    results.forEach(result => result.remove());
};

// Fonction pour afficher les résultats de recherche sous la barre de recherche
const displaySearchResults = () => {
    searchResult.forEach((elt) => {
        let resultElement = document.createElement("div");
        resultElement.innerText = elt.title;
        searchResultElement.appendChild(resultElement);
        console.log(elt);
    });

    // Animer la barre de recherche vers le haut si elle n'est pas déjà en haut
    if (!isUp && !animationEnCours) {
        animationEnCours = true;
        isUp = true;
        dialog.classList.add('animateStartWriting');
        dialog.classList.remove('empty-dialog');
        dialog.addEventListener("animationend", deplacerLaBarreDeRecherchePlusHaut);
    }
};