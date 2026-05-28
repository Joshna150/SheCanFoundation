// DARK MODE TOGGLE

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeToggle.innerHTML = "☀️";
    } else {
        darkModeToggle.innerHTML = "🌙";
    }
});

// SCROLL REVEAL ANIMATION

const hiddenElements = document.querySelectorAll(
    ".about, .programs, .impact, .gallery, .contact, .card"
);

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el)=> observer.observe(el));

// BACK TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// ACTIVE NAV LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link)=>{
        link.style.color = "white";

        if(link.getAttribute("href").includes(current)){
            link.style.color = "black";
        }
    });
});

// IMAGE CLICK EFFECT

const galleryImages = document.querySelectorAll(".gallery-images img");

galleryImages.forEach((img)=>{
    img.addEventListener("click", ()=>{
        img.classList.toggle("zoomed");
    });
});