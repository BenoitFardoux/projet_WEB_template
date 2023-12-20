let dialog = document.getElementById("search-dialog")
let searchDialogConatiner = document.getElementById("search-dialog-container")

const mockedSearchResult = [{
    title : 'cours 1', link : 'www.google.com'
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

dialog.addEventListener("input",(event) => {
    if (searchTimeOut !== null)
        clearTimeout(searchTimeOut)
    if (event.target.value !== "")
        searchTimeOut = setTimeout(() => {
            console.log(searchItem(event.target.value))
        },200)
})
