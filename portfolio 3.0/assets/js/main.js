/* menu hamburger*/

const links = document.getElementsByClassName("cont-menu")[0];
const hamburger = document.getElementsByClassName("img-menu")[0];
const aburger = document.getElementsByClassName("aburger")[0];
const aburger2 = document.getElementsByClassName("aburger2")[0];
const aburger3 = document.getElementsByClassName("aburger3")[0];
const aburger4 = document.getElementsByClassName("aburger4")[0];
const menuHamburger = document.getElementById("hamburger");
const menuHamburger2 = document.getElementById("hamburger2");

let open = false;
let cambiar = "cerrado"
/*menu burger */
const toggleMenu = () => {
  links.classList.toggle("active");
  links.style.transition = "transform 0.5s ease-in-out";
};

hamburger.addEventListener("click", function () {
  toggleMenu();

  if(cambiar == "cerrado"){
    menuHamburger2.style.display="block";
    menuHamburger.style.display="none";
    cambiar = "abierto";
  }else if(cambiar =="abierto"){
    menuHamburger.style.display="block";
    menuHamburger2.style.display="none";
    cambiar = "cerrado"
  }

});

aburger.addEventListener("click", function () {
  toggleMenu();
  menuHamburger.src ="assets/img/menu.svg";
  cambiar = "cerrado"
  
});
aburger2.addEventListener("click", function () {
  toggleMenu();
  menuHamburger.src ="assets/img/menu.svg";
  cambiar = "cerrado"
 
});
aburger3.addEventListener("click", function () {
  toggleMenu();
  cambiar = "cerrado"
  menuHamburger.src ="assets/img/menu.svg";
  
});
aburger4.addEventListener("click", function () {
  toggleMenu();
  cambiar = "cerrado"
  menuHamburger.src ="assets/img/menu.svg";

});
window.addEventListener("resize", function () {
  if (screen.width > 1024) {
    if (open) {
      toggleMenu();
      links.style.transition = none;
      open = false;
    }
  }
});

/*----------------------------------------------------------------------------*/
