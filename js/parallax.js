document.addEventListener("mousemove", parallax);
    function parallax(e){
        img = document.querySelector(".layer");
        shape = document.querySelector(".shape");

        const x = (window.innerWidth - e.pageX)/100;
        const y = (window.innerHeight - e.pageY)/100;

        img.style.transform = `translateX(${x}px) translateY(${y}px`;
        shape.style.transform = `translateX(${-x}px) translateY(${-y}px`;
}