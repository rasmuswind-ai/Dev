/*-------------------- MENU SHOW Y HIDDEN --------------------*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
/*----- MENU SHOW -----*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*----- MENU HIDDEN -----*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*-------------------- REMOVE MENU WHEN CLICKED OUTSIDE MENU --------------------*/
document.addEventListener('click', closeMenu);
document.addEventListener('touch', closeMenu);

function closeMenu(event) {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('show-menu')
    }
}

/*-------------------- REMOVE MENU MOBILE --------------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*-------------------- QUALIFICATION TABS --------------------*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
    
        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    }) 
})

/*-------------------- ACCORDION SKILLS --------------------*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/* Have more than one skill open at a time
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    } else {
        this.parentNode.className = 'skills__content skills__close'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})*/

/*-------------------- SERVICES MODAL --------------------*/
const modelViews = document.querySelectorAll('.services__model'),
      modelBtns = document.querySelectorAll('.services__button'),
      modelCloses = document.querySelectorAll('.services__model-close')

let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () =>{
        model(i)
    })
})

modelCloses.forEach((modelClose) => {
    modelClose.addEventListener('click', () =>{
        modelViews.forEach((modelView) =>{
            modelView.classList.remove('active-model')
        })
    })
})

/*-------------------- PORTFOLIO SWIPER  --------------------*/


/*-------------------- TESTIMONIAL --------------------*/


/*-------------------- SCROLL SECTIONS ACTIVE LINK --------------------*/


/*-------------------- CHANGE BACKGROUND HEADER --------------------*/ 


/*-------------------- SHOW SCROLL UP --------------------*/ 


/*-------------------- DARK LIGHT THEME --------------------*/ 
