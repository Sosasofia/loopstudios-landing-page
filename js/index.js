const menuBtn = document.getElementById("icon-hamburger")


function openMenu() {
    const modal = document.getElementById("menu")
    const nav_bar = document.getElementById("nav-bar")

    nav_bar.classList.toggle("open-modal")
    modal.classList.toggle("hidden")
    
    if(modal.classList.contains("hidden")) {
        document.body.style.overflowY = "auto"
        menuBtn.setAttribute("src","./images/icon-hamburger.svg")
    } else {
        document.body.style.overflowY = "hidden"
        menuBtn.setAttribute("src","./images/icon-close.svg")
    }
}

menuBtn.addEventListener('click', openMenu)
