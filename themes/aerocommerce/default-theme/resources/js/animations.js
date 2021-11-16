const revealLeft = document.querySelectorAll(".reveal-left");
const revealRight = document.querySelectorAll(".reveal-right");
const revealBottom = document.querySelectorAll(".reveal-bottom");
const revealTop = document.querySelectorAll(".reveal-top");

const scrollAnim = () => {
    let windowHt = window.innerHeight;

    revealLeft.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if(elPos < windowHt/1.1) {
            element.classList.add('revealed')
            if (element.classList.contains('revealed')) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        }
        if(elPos > windowHt/1) {
            element.classList.remove('revealed')
        }
    });

    revealRight.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if(elPos < windowHt/1.1) {
            element.classList.add('revealed')
            if (element.classList.contains('revealed')) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        }
        if(elPos > windowHt/1) {
            element.classList.remove('revealed')
            if (element.classList.contains('revealed')) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        }
    });

    revealBottom.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if(elPos < windowHt/1.2) {
            element.classList.add('revealed')
            if (element.classList.contains('revealed')) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        }
        if(elPos > windowHt/1) {
            element.classList.remove('revealed')
        }
    });

    revealTop.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if(elPos < windowHt/1.1) {
            element.classList.add('revealed')
            if (element.classList.contains('revealed')) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        }
        if(elPos > windowHt/1) {
            element.classList.remove('revealed')
        }
    });
};

document.addEventListener("DOMContentLoaded", scrollAnim);
window.addEventListener('scroll', scrollAnim);