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


home.classList.add("active");
window.addEventListener("scroll", function() {
    var posicaoY = window.scrollY;    
    if(posicaoY <= 20 && posicaoY < 500 ){
        home.classList.add("active");

        about.classList.remove("active");
        project.classList.remove("active");
        contact.classList.remove("active");   
    } else if (posicaoY >= 850 && posicaoY < 2000){
        about.classList.add("active");

        home.classList.remove("active");
        project.classList.remove("active");
        contact.classList.remove("active");   
    } else if (posicaoY >= 2250 && posicaoY < 3500){
        project.classList.add("active");

        about.classList.remove("active");
        home.classList.remove("active");
        contact.classList.remove("active");   
    } else if(posicaoY >= 3501){
        contact.classList.add("active");   

        home.classList.remove("active");
        about.classList.remove("active");
        project.classList.remove("active");
    }
  });