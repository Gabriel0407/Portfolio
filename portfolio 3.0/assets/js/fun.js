const buttonBoring = document.getElementById("boring");
const iBoring = document.getElementById("boring-i");
const body = document.getElementById("body");
const me =document.getElementById("me");
let noc = false;

// Dark mode
buttonBoring.addEventListener("click",()=>{

body.classList.toggle("dark"); 

    if(noc == false){
        me.src = "assets/img/Gabriel Photo with neon.png"
        noc=true;
    }else if(noc == true){
        me.src = "assets/img/Gabriel Photo light mode.png"
        noc= false;
    }
})