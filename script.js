const btn = document.getElementById("btn");

const body = document.querySelector("body");
const header = document.querySelector("header");
const items = document.querySelectorAll(".item");
const texto = document.querySelectorAll("p");
const titulo2 = document.querySelectorAll("h2");

btn.addEventListener("click", function(){
    
    body.classList.toggle('dark-body');
    header.classList.toggle('dark-title');
    
    for (let i = 0; i < items.length; i++){
        items[i].classList.toggle('dark-items');
    }

    for (let i = 0; i < texto.length; i++){

        if(texto[i].classList.contains('dark-p')){
           texto[i].classList.remove('dark-p');
        }else {
            texto[i].classList.add('dark-p');
        }
        
    }

    for (let i = 0; i < titulo2.length; i++){

        if(titulo2[i].classList.contains('dark-p')){
           titulo2[i].classList.remove('dark-p');
        }else {
            titulo2[i].classList.add('dark-p');
        }
        
    }


    
})


