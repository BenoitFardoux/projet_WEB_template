const items = document.getElementsByClassName("slide");
let previousItem = 0;
let actualItem = 0;
let blockInteraction = false;

function moveRight(){
    if(!blockInteraction){
        blockInteraction = true;
        previousItem = actualItem;

        if(actualItem > items.length - 2){
            actualItem = 0;
        }else{
            actualItem++;
        }

        items[actualItem].classList.remove("disable");
        items[actualItem].classList.add("top");

        items[actualItem].addEventListener("transitionend", ()=>{
            items[previousItem].classList.add("fast-disable");

            items[previousItem].addEventListener("transitionend", ()=>{
                items[previousItem].classList.add("disable");
                items[previousItem].classList.remove("fast-disable");
                items[actualItem].classList.remove("top");

                blockInteraction = false;
            }, {"once": true})
        }, {"once": true})
    }
}

function moveLeft(){
    if(!blockInteraction){
        blockInteraction = true;
        previousItem = actualItem;

        if(actualItem - 1 < 0){
            actualItem = items.length - 1;
        }else{
            actualItem--;
        }

        items[previousItem].classList.add("disable");
        items[previousItem].classList.add("top");

        items[actualItem].classList.remove("disable");
        items[actualItem].classList.add("fast-enable");

        items[previousItem].addEventListener("transitionend", ()=>{
            items[actualItem].classList.remove("fast-enable");
            items[previousItem].classList.remove("top");
            blockInteraction = false;
        }, {"once": true})
    }
}
