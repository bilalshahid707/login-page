const loginPanel = document.querySelector(".login-panel");
const heroPanel = document.querySelector(".hero-panel")
const heroMsg = document.querySelector(".hero-msg")
const visibilityIcon = document.querySelector(".visibility-icon");
const passwordInput= document.querySelector(".password-input")
function animation(){
    loginPanel.style.transform="translateX(0%)";
    heroPanel.style.transform="translateX(0%)";
    heroMsg.style.transform="translateX(0%)";
}
window.onload=animation;

visibilityIcon.addEventListener("click", function(){
    if (passwordInput.type==="text"){
        passwordInput.type="password"
        visibilityIcon.style.color="white"
    } else if (passwordInput.type==="password") {
        passwordInput.type="text"
        visibilityIcon.style.color="#ad40f3"
    }
})