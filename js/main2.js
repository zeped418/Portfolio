// Seleccionar elementos del DOM
const navMenu = document.getElementById("nav-menu"); // Menú de navegación
const navToggle = document.getElementById("nav-toggle"); // Botón para mostrar el menú
const navClose = document.getElementById("nav-close"); // Botón para cerrar el menú

// Agregar event listener para mostrar el menú al hacer clic en el botón de alternancia
navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

// Agregar event listener para cerrar el menú al hacer clic en el botón de cierre
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// Agregar event listeners para cerrar el menú al hacer clic en un elemento de navegación
const navLink = document.querySelectorAll(".nav__link"); // Enlaces de navegación
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});


// Accordion skills
// Seleccionar todos los elementos con la clase 'skills__content' (contenidos de habilidades) y 'skills__header' (encabezados de habilidades)
const skillsContent = document.querySelectorAll('.skills__content'); // Contenidos de habilidades
const skillsHeader = document.querySelectorAll('.skills__header'); // Encabezados de habilidades

// Función para alternar (abrir/cerrar) el contenido de habilidades
function toggleSkills() {
    let itemClass = this.parentNode.className; // Obtener la clase del elemento padre

    // Cerrar todos los contenidos de habilidades estableciendo su clase a 'skills__content skills__close'
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    // Si la clase del elemento padre es 'skills__content skills__close', abrir el contenido estableciendo su clase a 'skills__content skills__open'
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

// Asignar el evento de clic a cada encabezado de habilidades
skillsHeader.forEach(header => {
    header.addEventListener('click', toggleSkills);
});


skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION/ TABS ====================*/

// Seleccionar todas las pestañas y contenidos de pestañas usando atributos de datos
const tabs = document.querySelectorAll('[data-target]'); // Pestañas
const tabContents = document.querySelectorAll('[data-content]'); // Contenidos de pestañas

// Iterar sobre cada pestaña
tabs.forEach(tab => {
    // Agregar un event listener para el clic en la pestaña
    tab.addEventListener('click', () => {
        // Ocultar todos los contenidos de pestañas
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active'); // Ocultar contenido
        });

        // Obtener el contenido asociado a la pestaña clicada
        const target = document.querySelector(tab.dataset.target);

        // Mostrar el contenido asociado a la pestaña clicada
        target.classList.add('qualification__active'); 

        // Remover la clase 'qualification__active' de todas las pestañas
        tabs.forEach(t => {
            t.classList.remove('qualification__active');
        });

        // Agregar la clase 'qualification__active' a la pestaña clicada para resaltarla
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODALS ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close'),
    services__title = document.querySelectorAll('.services__title');

// Función para mostrar un modal específico
function showModal(modalClick) {
    modalViews.forEach(modalView => modalView.classList.remove('active-modal'));
    modalViews[modalClick].classList.add('active-modal');
}

// Agregar event listeners para abrir los modales
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

// Agregar event listener para cerrar los modales
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
// Seleccionar todas las secciones con atributo 'id'
const sections = document.querySelectorAll('section[id]'); // Secciones con atributo 'id'

// Función para aplicar estilos a los enlaces activos en el menú de navegación
function scrollActive() {
    const scrollY = window.pageYOffset; // Posición de desplazamiento vertical

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight; // Altura de la sección actual
        const sectionTop = current.offsetTop - 50; // Posición superior de la sección actual ajustada por un margen
        const sectionId = current.getAttribute('id'); // ID de la sección actual
        // Verificar si la posición de desplazamiento está dentro de los límites de la sección actual
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Agregar la clase 'active-link' al enlace del menú de navegación correspondiente
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            // Remover la clase 'active-link' del enlace del menú de navegación correspondiente
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

// Agregar un event listener al evento 'scroll' para aplicar estilos a los enlaces activos
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SEND MESSAGE ====================*/

// Obtener elementos del DOM
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

// Variables de validación
let isValid;
let isName;
let isPhone;
let isEmail;
let isMessage;

// Crear elementos de audio
const audioFalse = new Audio("./sounds/pop.mp3");
const audioTrue = new Audio("./sounds/coin.mp3");

// Funciones para mostrar alertas
function alertWrong(message) {
    swal("¡Oh no!", message, "error");
}

function alertSuccess() {
    swal("¡Genial!", "Me pondré en contacto contigo a la brevedad", "success");
}

// Funciones para validar campos
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
        "Nombre incorrecto",
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
        "Celular incorrecto",
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
        "Email incorrecto",
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
        "Mensaje incorrecto",
        input__message,
        alert__element__message,
        alert__text__message
    );
}

input__name.addEventListener("change",()=>{checkName()});
input__phone.addEventListener("change",()=>{checkPhone()});
input__email.addEventListener("change",()=>{checkEmail()});
input__message.addEventListener("change",()=>{checkMessage()});

// Agregar event listener al botón de enviar
btnSend.addEventListener("click", function (event) {
    event.preventDefault();

    // Restablecer mensajes y estilos
    [alert__text__name, alert__text__email, alert__text__phone, alert__text__message].forEach(alertText => {
        alertText.innerHTML = "";
    });

    [alert__element__name, alert__element__email, alert__element__phone, alert__element__message].forEach(alertElement => {
        alertElement.style.display = "none";
    });

    // Validar campos
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
        alertWrong("Al parecer hay un error en los datos ingresados");
    }
});


