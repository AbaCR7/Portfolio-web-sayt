function showMenu(){
    const target= document.getElementById("icons")
    target.classList.toggle("burger-open")

    const menu=document.getElementById("menu")
    menu.classList.toggle("show-menu")
}
const header =document.getElementById("header");

window.addEventListener("scroll", function(){
    if(window.scrollY>700){
        header.style.background="rgba(213, 196, 85, 0.9)"
    }
    else {
        header.style.background="transparent"
    }
})