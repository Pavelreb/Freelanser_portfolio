const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-img');

navButton.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
}

AOS.init({
    once: true 
});