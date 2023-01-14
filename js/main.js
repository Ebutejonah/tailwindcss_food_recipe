const burg = document.getElementById("hamburger")
const mob_menu= document.getElementById("menu")
const darkmode = document.getElementById("toggle")
const page=document.querySelector("html")

const toggledarkmode= function(){
    darkmode.checked ? page.classList.add("dark") : page.classList.remove("dark");
}
toggledarkmode();
darkmode.addEventListener("click",toggledarkmode);

burg.addEventListener('click', ()=>{
    if (mob_menu.classList.contains('hidden')){
        mob_menu.classList.remove('hidden')
    }
    else{
        mob_menu.classList.add('hidden')
    }
})

