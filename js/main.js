const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

// 
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
};
//close button
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
};

//close when click on nav item
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};

navLink.forEach(n => n.addEventListener("click", linkAction));


// Percentage in bar
const skills = document.querySelectorAll('.skills__name')
for (const skill of skills.values()) {
    const percentage = skill.nextElementSibling.textContent
    const skillBar = skill.parentElement.nextElementSibling.firstElementChild
    skillBar.style.width = percentage
}

// Accordion skills
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {

    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODALS ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};//Function click

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SEND MESSAGE ====================*/

const myForm = document.getElementById('myForm');
const btnSend = document.getElementById("btnSend");
const input__name = document.getElementById("input__name");
const input__phone = document.getElementById("input__phone");
const input__email = document.getElementById("input__email");
const input__message = document.getElementById("input__message");
const alert__element__name = document.getElementById("alert__element__name");
const alert__text__name = document.getElementById("alert__text__name");
const alert__element__phone = document.getElementById("alert__element__phone");
const alert__text__phone = document.getElementById("alert__text__phone");
const alert__element__email = document.getElementById("alert__element__email");
const alert__text__email = document.getElementById("alert__text__email");
const alert__element__message = document.getElementById("alert__element__message");
const alert__text__message= document.getElementById("alert__text__message");

let isValid;
let isName;
let isPhone;
let isEmail;
let isMessage;

const audioFalse = new Audio();
audioFalse.src = "./sounds/pop.mp3";

const audioTrue = new Audio();
audioTrue.src = "./sounds/pew.mp3"

function alertWrong() {
    swal("Oh no!", "Something went wrong. Please check the form again", "error");
}

function alertSuccess() {
    swal("Great!", "I'll get in touch soon with you", "success");
}

function checkName() {

    let name = String(input__name.value.trim().toUpperCase());
    let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-][^\d]{2,50}/;
    let notHasNumber=0;

    for (i=0;i<name.length;i++){
        if(!isNaN(name.charAt(i))){
            notHasNumber++
        }
    }

    if (regexName.test(name) && notHasNumber<1) {
        input__name.style.border = ""
        isName = true;
    } else {
        input__name.style.border = "solid thin red";
        alert__element__name.style.display="block"
        alert__text__name.insertAdjacentHTML("afterbegin",
        `Name is wrong.`);
        isName = false;
    }
}


function checkPhone() {

    let phone = String(input__phone.value.trim().toUpperCase());
    let regexPhone = /^[0-9]{10}$/;
    let sum = 0;

    for (i = 0; i < phone.length; i++) {
        if (phone.charAt(i) == phone.charAt(i + 1)) {
            sum++;
        }
    }

    if (regexPhone.test(phone) && !(sum > 4)) {
        input__phone.style.border = "";
        isPhone = true;
    } else {
        input__phone.style.border = "solid thin red";
        alert__element__phone.style.display="block"
        alert__text__phone.insertAdjacentHTML("afterbegin",
        `Phone is incorrect.`);
        isPhone = false;
    }
}

function checkEmail() {

    let email = String(input__email.value.trim().toLowerCase());
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexEmail.test(email)) {
        input__email.style.border = "";
        isEmail = true;
    } else {
        input__email.style.border = "solid thin red";
        alert__element__email.style.display="block"
        alert__text__email.insertAdjacentHTML("afterbegin",
        `Email is incorrect.`);
        isEmail = false;
    }
}

function checkMessage() {
    let message = String(input__message.value.trim().toLowerCase());
    let regexMessage = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'0-9]{10,500}/;

    if (regexMessage.test(message)) {
        input__message.style.border = ""
        isMessage = true;
    } else {
        input__message.style.border = "solid thin red";
        alert__element__message.style.display="block"
        alert__text__message.insertAdjacentHTML("afterbegin",
        `Message incorrect.`);
        isMessage = false;
    }
}

btnSend.addEventListener("click", function (event) {

    event.preventDefault();

    alert__text__name.innerHTML = "";
    alert__element__name.style.display = "none";

    alert__text__email.innerHTML = "";
    alert__element__email.style.display = "none";

    alert__text__phone.innerHTML = "";
    alert__element__phone.style.display = "none";

    alert__text__message.innerHTML = "";
    alert__element__message.style.display = "none";

    checkName();
    checkPhone();
    checkEmail();
    checkMessage();
    isValid = (isName && isPhone && isEmail && isMessage)
    if (isValid) {
        input__name.value = "";
        input__phone.value = "";
        input__email.value = "";
        input__message.value = "";
        audioTrue.play()
        alertSuccess();
        myForm.submit();
    } else {
        audioFalse.play()
        alertWrong();
    }
});

