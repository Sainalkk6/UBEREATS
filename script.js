const nav = document.querySelector('.nav-bar')

window.addEventListener('scroll',fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight){
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
}

fixNav()