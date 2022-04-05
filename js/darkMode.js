const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const js = document.querySelector("#js");
const react = document.querySelector("#react");

moon.addEventListener("click", function darkOn(){
    darkOn = true;
    moon.style.filter = "invert(1)";
    sun.style.filter = "invert(1)";

    moon.style.transform = "rotate(360deg)";
    moon.style.right = "5px";
    moon.style.opacity = "0";
    
    document.body.style.backgroundColor = "#111";
    document.querySelector('#home .infoTop h1').style.color = "#fff";
    document.querySelectorAll("#home .infoTop p").forEach((e, index)=> {
        if(index == 1){
            e.style.color = "#fff";
        };
    document.documentElement.style.setProperty("--pseudo-backgroundcolor", "#fff");
    document.querySelector("#home .infoTop .btn-download").style.backgroundColor = "#cc5803";
    });
    
    document.querySelectorAll(".infoLeft p").forEach((e)=>{
        e.style.color = "#eff4fd";
    });
    document.querySelectorAll(".infoRight .cardExp img").forEach((e)=>{
        e.style.filter = "invert(1)";
    });
    document.querySelectorAll(".infoRight .cardExp p").forEach((e)=>{
        e.style.color = "#fff";
    });

    sun.style.display = "flex";
    setTimeout(()=>{
        moon.style.display = "none";
        moon.style.right = "30px";

        sun.style.opacity = "1";
        moon.style.transform = "rotate(0deg)";
    }, 1000);

    document.querySelector(".infoContact .socialMidias").style.backgroundColor = "rgba(0, 0, 0, .2)";
    document.querySelector(".infoContact .socialMidias").style.border = "1px solid rgba(0,0,0, .1)";
    document.querySelectorAll("ion-icon").forEach((e)=>{
        e.style.color = "#eff4fd";
    })
});



sun.addEventListener("click", function darkOff(){
    moon.style.filter = "invert(0)";
    sun.style.filter = "invert(0)";

    sun.style.transform = "rotate(360deg)";
    sun.style.right = "5px";
    sun.style.opacity = "0";
    

    document.body.style.backgroundColor = "#eff4fd";
    document.querySelector('#home .infoTop h1').style.color = "#1F1300";
    document.querySelectorAll("#home .infoTop p").forEach((e, index)=> {
        if(index == 1){
            e.style.color = "#1F1300";
        };
    document.documentElement.style.setProperty("--pseudo-backgroundcolor", "#1F1300");
    document.querySelector("#home .infoTop .btn-download").style.backgroundColor = "#1F1300";
    });

    moon.style.display = "flex";
    setTimeout(()=>{
        sun.style.display = "none";
        sun.style.right = "30px";
        moon.style.opacity = "1";

        sun.style.transform = "rotate(0deg)";
    },1000)

    document.querySelectorAll(".infoLeft p").forEach((e)=>{
        e.style.color = "#1F1300";
    });
    document.querySelectorAll(".infoRight .cardExp img").forEach((e)=>{
        e.style.filter = "";
    });        
    document.querySelectorAll(".infoRight .cardExp p").forEach((e)=>{
        e.style.color = "";
    });

    document.querySelector(".infoContact .socialMidias").style.backgroundColor = "";
    document.querySelector(".infoContact .socialMidias").style.border = "";
    document.querySelectorAll("ion-icon").forEach((e)=>{
        e.style.color = "";
    })
})