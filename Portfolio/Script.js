let menuicon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".nav");

menuicon.onclick=()=>{
    menuicon.classList.toggle("bx-x");
    navbar.classList.toggle("active")
}
let subimit=document.querySelector(".subimit-button");
subimit.onclick=()=>{
    alert("Got it! 📩 We've received your submission.");
}

const sections=document.querySelectorAll("section");
const navlinks=document.querySelectorAll("header nav a");


window.onscroll=()=>{
    sections.forEach(sec=>{
        sections.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let id =sec.getAttribute("id");
           
            if(top>=offset){
                navlinks.forEach(links=>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+id+']').classList.add('active')
                })
            }
        })
    })

    menuicon.classList.remove("bx-x");
    navbar.classList.remove("active");
}
ScrollReveal({
    reset:true,
    distance:'80px',
    duration: 2000,
    delay:200
})

// ScrollReveal
ScrollReveal().reveal('.homecontent', {origin:'left',opacity:0,distance: '0.7rem'});
ScrollReveal().reveal('.home-image,.about-card', {scale:.85,opacity:0,distance: '0.9rem'});
ScrollReveal().reveal('.headings',{origin:'top',distance: '0.9rem',distance: '0.9rem'})
ScrollReveal().reveal('.project-contents,.contact form',{scale:.95,distance: '0.8rem'})

//TextAnimation
const typed=new Typed('.multiple-text',{
    strings:['Java FullStack Developer','Web Developer','Java Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:2000,
    loop:true

})