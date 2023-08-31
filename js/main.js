// Seleccionar elementos del DOM
const navMenu = document.getElementById("nav-menu"); 
const navToggle = document.getElementById("nav-toggle"); // Button to show the menu
const navClose = document.getElementById("nav-close"); // Button to close the menu

// Adding event listener to show the menu when clicking on the toggle button
navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

// Adding event listener to close the menu when clicking on the close button
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// Adding event listeners to close the menu when clicking on a navigation item
const navLink = document.querySelectorAll(".nav__link"); 
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});


// Accordion skills
//Selecting all elements with the classes 'skills__content' and 'skills__header'
const skillsContent = document.querySelectorAll('.skills__content'); // 
const skillsHeader = document.querySelectorAll('.skills__header'); //

// Function to toggle (open/close) the skills content
function toggleSkills() {
    let itemClass = this.parentNode.className; //  Get the class of the parent element

    // Closing all skills content by setting their class to 'skills__content skills__close'
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    // If the class of the parent element is 'skills__content skills__close', open the content by setting its class to 'skills__content skills__open'
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

// Assigning click event to each skills header
skillsHeader.forEach(header => {
    header.addEventListener('click', toggleSkills);
});

// Skills header click event using forEach
skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION/ TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'); 
const tabContents = document.querySelectorAll('[data-content]'); 


tabs.forEach(tab => {
    // Adding click event listener to the tab
    tab.addEventListener('click', () => {
        // Hiding all tab contents
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active'); // Ocultar contenido
        });

        //Getting the content associated with the clicked tab
        const target = document.querySelector(tab.dataset.target);

        // Showing the content associated with the clicked tab
        target.classList.add('qualification__active'); 

        // Removing 'qualification__active' class from all tabs
        tabs.forEach(t => {
            t.classList.remove('qualification__active');
        });

        //  Adding 'qualification__active' class to the clicked tab to highlight it
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODALS ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close'),
    services__title = document.querySelectorAll('.services__title');

// Function to show a specific modal
function showModal(modalClick) {
    modalViews.forEach(modalView => modalView.classList.remove('active-modal'));
    modalViews[modalClick].classList.add('active-modal');
}

// Adding event listeners to open the modals
services__title.forEach((title, i) => {
    title.addEventListener('click', () => {
        showModal(i);
    });
});

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        showModal(i);
    });
});

// Adding event listeners to close the modals
modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal');
        });
    });
});
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
// Selecting all sections with 'id' attribute
const sections = document.querySelectorAll('section[id]'); // Secciones con atributo 'id'

// Function to apply styles to active links in the navigation menu
function scrollActive() {
    const scrollY = window.pageYOffset; // Vertical scroll position

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight; 
        const sectionTop = current.offsetTop - 50; 
        const sectionId = current.getAttribute('id'); 
        // Check if scroll position is within the bounds of the current section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Add 'active-link' class to the corresponding navigation link
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            // Remove 'active-link' class from the corresponding navigation link
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

// Add event listener to the 'scroll' event to apply styles to active links
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SEND MESSAGE ====================*/

// Get DOM elements
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
const alert__text__message = document.getElementById("alert__text__message");

// Validation variables
let isValid;
let isName;
let isPhone;
let isEmail;
let isMessage;

// Create audio elements
const audioFalse = new Audio("./sounds/pop.mp3");
const audioTrue = new Audio("./sounds/coin.mp3");

// Functions to display alerts
function alertWrong(message) {
    swal("¡Oh no!", message, "error");
}

function alertSuccess() {
    swal("¡Genial!", "I will get in touch with you shortly", "success");
}

// Functions to validate fields
function checkField(value, regex, errorMessage, inputElement, alertElement, alertTextElement) {
    if (regex.test(value)) {
        inputElement.style.border = "";
        alertTextElement.innerHTML="";
        alertElement.style.display="none";
        return true;
    } else {
        inputElement.style.border = "solid thin red";
        alertElement.style.display = "block";
        alertTextElement.innerHTML = errorMessage;
        return false;
    }
}

function checkName() {
    let name = String(input__name.value.trim().toUpperCase());
    let regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,50}$/;

    isName = checkField(
        name,
        regexName,
        "Incorrect name",
        input__name,
        alert__element__name,
        alert__text__name
    );
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

    isPhone = checkField(
        phone,
        regexPhone,
        "Incorrect phone",
        input__phone,
        alert__element__phone,
        alert__text__phone
    );
}

function checkEmail() {
    let email = String(input__email.value.trim().toLowerCase());
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    isEmail = checkField(
        email,
        regexEmail,
        "Incorrect e-mail",
        input__email,
        alert__element__email,
        alert__text__email
    );
}

function checkMessage() {
    let message = String(input__message.value.trim().toLowerCase());
    let regexMessage = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'0-9]{10,500}/;

    isMessage = checkField(
        message,
        regexMessage,
        "Incorrect message",
        input__message,
        alert__element__message,
        alert__text__message
    );
}
// Add event listeners to input fields
input__name.addEventListener("change",()=>{checkName()});
input__phone.addEventListener("change",()=>{checkPhone()});
input__email.addEventListener("change",()=>{checkEmail()});
input__message.addEventListener("change",()=>{checkMessage()});

// Add event listener to the send button
btnSend.addEventListener("click", function (event) {
    event.preventDefault();

    // Reset messages and styles
    [alert__text__name, alert__text__email, alert__text__phone, alert__text__message].forEach(alertText => {
        alertText.innerHTML = "";
    });

    [alert__element__name, alert__element__email, alert__element__phone, alert__element__message].forEach(alertElement => {
        alertElement.style.display = "none";
    });

    // Validate fields
    checkName();
    checkPhone();
    checkEmail();
    checkMessage();
    isValid = isName && isPhone && isEmail && isMessage;

    if (isValid) {
        audioTrue.play();
        alertSuccess();
        myForm.submit();
        [input__name, input__phone, input__email, input__message].forEach(inputElement => {
            inputElement.value = "";
        });
    } else {
        audioFalse.play();
        alertWrong("There seems to be an error in the entered data");
    }
});


