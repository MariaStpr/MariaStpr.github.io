'use strict';
document.addEventListener('DOMContentLoaded', function() {

document.querySelectorAll('.container a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Меню-гамбургер
const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header__list_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });
});

const percent = document.querySelectorAll('.skills__percent-sum');
const percentCurent = document.querySelectorAll('.skills__percent-line span');

percent.forEach((item, i) => {
    let per = parseInt(item.innerText);
    if (per >= 0 && per <= 100) {
        percentCurent[i].style.width = item.innerHTML;
    }
    else {
        console.log('Error');
    }
});

    
window.addEventListener('scroll', function(e) {
    const
        newScroll = this.scrollY,
        isScrollDown = 100 + 'px';
    
    document.querySelector('.header').classList.toggle('header__scroll', isScrollDown);
    
    this.oldScroll = newScroll;

    if (newScroll == 0) {
        document.querySelector('.header').classList.remove('header__scroll', isScrollDown);
    }
});

// Портфолио
   
let workLink = document.getElementsByClassName("work__item");
let tp = document.getElementsByClassName("work__info");

function show(){
    tp.style.display="block";
}
function hide(){
    tp.style.display="";
}

const form = document.getElementById('contact-form'),
        overlay = document.querySelector('.overlay'),
        modalThanks = overlay.querySelector('.modal__thanks'),
        modalError = overlay.querySelector('.modal__error'),
        modalClose = overlay.querySelectorAll('.modal__close');

form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
        form.classList.add('contact__form-sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            console.log(result.message);
            overlay.classList.add('overlay_active');
            modalThanks.classList.add('modal_active');
            modalError.classList.add('modal_hidden');
            form.reset();
            form.classList.remove('contact__form-sending');
        } else {
            alert('Error');
            form.classList.remove('contact__form-sending');
        }
    } else {
        overlay.classList.add('overlay_active');
        modalError.classList.add('modal_active');
        modalThanks.classList.add('modal_hidden');
    }
    modalClose.forEach(item => {
        item.addEventListener('click', () => {
            overlay.classList.remove('overlay_active');
            modalThanks.classList.remove('modal_hidden');
            modalError.classList.remove('modal_active');
            modalThanks.classList.remove('modal_active');
            modalError.classList.remove('modal_hidden');
        });
    });

}

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}
    //Функция теста email
function emailTest(input) {
    return !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
}
});

// Переход наверх по кнопке
const btnToTop = document.querySelector('.footer__btn');

btnToTop.addEventListener('click', () => {
    document.querySelector('.main').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});