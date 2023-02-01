const hamburger = document.getElementById("hamburger")
const mobile_menu = document.getElementById("menu")
const darkmode = document.getElementById("toggle")

//const page=document.querySelector("html")
//const toggledarkmode= function(){
   // darkmode.checked ? page.classList.add("dark") : page.classList.remove("dark");
//}
//toggledarkmode();
//darkmode.addEventListener("click",toggledarkmode);
const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('prefered-color-theme: dark').matches


const checkTheme = ()=>{
    if(userTheme === 'dark' ||(!userTheme && systemTheme)){
        document.documentElement.classList.add('dark')
        return
    }
}

const themeSwitch = ()=>{
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'Light')
        return
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
}

darkmode.addEventListener('click', ()=>{
    themeSwitch()
})

checkTheme()





hamburger.addEventListener('click', ()=>{
    if (mobile_menu.classList.contains('hidden')){
        mobile_menu.classList.remove('hidden')
    }
    else{
        mobile_menu.classList.add('hidden')
    }
})

