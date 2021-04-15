const sticky =  document.getElementById("sticky");
const links = sticky.querySelectorAll("a");
const logo = document.getElementById("logo-img");

window.onscroll = function() {myFunction()};
// change navbar's bg-color, color and logo if you scroll down
function myFunction() {
  if (document.documentElement.scrollTop > 5) {
        sticky.className = "add-background";
        logo.src = "./img/Logo_Abaayo.svg";
        links.forEach(link => {
            link.className = "linkColor";
        });
  } else {
        sticky.className = "sticky";
        logo.src = "./img/Logo_Abaayo_white.svg";
        links.forEach(link => {
            link.className = "";
        });
  }
}

