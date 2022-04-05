const home = document.querySelector('[data-scroll="home"]');
const about = document.querySelector('[data-scroll="about"]');
const project = document.querySelector('[data-scroll="project"]');
const contact = document.querySelector('[data-scroll="contact"]');


home.addEventListener("click", ()=>{
    home.classList.add("active");

    about.classList.remove("active");
    project.classList.remove("active");
    contact.classList.remove("active");   
});

about.addEventListener("click", ()=>{
    about.classList.add("active");

    home.classList.remove("active");
    project.classList.remove("active");
    contact.classList.remove("active");   
});

project.addEventListener("click", ()=>{    
    project.classList.add("active");

    about.classList.remove("active");
    home.classList.remove("active");
    contact.classList.remove("active");   
});

contact.addEventListener("click", ()=>{
    contact.classList.add("active");   

    home.classList.remove("active");
    about.classList.remove("active");
    project.classList.remove("active");
});




