const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link')  

function linkAction (){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset   

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50 
         sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')           

        } else  { document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }               


    } )

}

window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)



const mixer = mixitup('.projects_container', {
    selectors: {
        target: '.projects_content'
    },
    animation: {
        duration: 400
    }
});


const linkProjects = document.querySelectorAll('.projects_item')

function activeProjects(){
    if(linkProjects){
        linkProjects.forEach(l => l.classList.remove('active-projects'))
        this.classList.add('active-projects')

    }

}

linkProjects.forEach(L => l.addEventListener('click',activeProjects))









