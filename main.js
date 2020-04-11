const items = document.querySelectorAll(".accordion__item")

for(item of items){
    item.addEventListener("click", expand)
}

function expand(e){
    const button = e.target;
    const expandContent = button.nextElementSibling
    const sign = button.children[0]
    expandContent.classList.toggle("open")
    if(expandContent.classList.contains("open")){
        sign.innerText= "-"
    }else{
        sign.innerText = "+"
    }
}
