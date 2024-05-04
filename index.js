const loginPanel = document.querySelector(".login-panel");
const heroPanel = document.querySelector(".hero-panel")
const heroMsg = document.querySelector(".hero-msg")
function animation(){
    loginPanel.style.transform="translateX(0%)";
    heroPanel.style.transform="translateX(0%)";
    heroMsg.style.transform="translateX(0%)";
}
window.onload=animation;