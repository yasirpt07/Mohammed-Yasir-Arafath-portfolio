/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
particlesJS("particles-js",{
particles:{
number:{value:80},
color:{value:"#3e6ff4"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},
line_linked:{
enable:true,
distance:150,
color:"#3e6ff4",
opacity:0.4,
width:1
},
move:{
enable:true,
speed:2
}
},
interactivity:{
events:{
onhover:{enable:true,mode:"repulse"},
onclick:{enable:true,mode:"push"}
},
modes:{
repulse:{distance:100},
push:{particles_nb:4}
}
},
retina_detect:true
});

/* ===== DARK MODE ===== */

const themeButton = document.getElementById('theme-button')

if(themeButton){
themeButton.addEventListener('click', () => {
document.body.classList.toggle('dark-theme')
themeButton.classList.toggle('bx-sun')
})
}

/* CLOSE MENU WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(event){

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

if(!navMenu.contains(event.target) && !navToggle.contains(event.target)){
navMenu.classList.remove("show");
}

});