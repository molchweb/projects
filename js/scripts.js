let isNavOpen = false;

function toggleNav() {
    if (isNavOpen) {
        closeNav();
    } else {
        openNav();
    }
}
function openNav() {
    const sidenav = document.getElementById("mySidenav")
    const menuButton = document.getElementById("menuButton")
    const closeButton = document.getElementById("closeButton")
    isNavOpen = true;
    if (window.innerWidth <= 850) {
        sidenav.style.width = "100%";
        menuButton.src = "picture/close.svg";
        closeButton.style.display = "none";
    } else {
        sidenav.style.width = "250px";
        closeButton.style.display = "block";
    }
}
  function closeNav() {  
    const sidenav = document.getElementById("mySidenav")
    const menuButton = document.getElementById("menuButton")
    const closeButton = document.getElementById("closeButton")
    isNavOpen = false;
    if (window.innerWidth <= 850) {
        sidenav.style.width = "0";
        menuButton.src = "picture/menu.svg";
    } else {
        sidenav.style.width = "0";
        setTimeout (() => {
        }, 300);
    }
  }
  function returnHome() {
    window.location.href="index.html"
  }
