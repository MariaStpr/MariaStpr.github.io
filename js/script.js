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

    const percent = document.querySelectorAll('.skills__percent-sum'),
        percentCurent = document.querySelectorAll('.skills__percent-line span');

        percent.forEach((item, i) => {
            let per = parseInt(item.innerText);
            if (per >= 0 && per <= 100) {
                percentCurent[i].style.width = item.innerHTML;
            }
            else {
                console.log('Error');
            }
        });
    