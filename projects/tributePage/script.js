function toTop(){   
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function btnTopShow(){    
    if(window.scrollY === 0){
        document.querySelector('.btn_to_top').style.display = "none";
    } else {
        document.querySelector('.btn_to_top').style.display = "flex"; 
    }
}

window.addEventListener('scroll', btnTopShow);