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



        // let header = document.querySelector('.header');

        // document.addEventListener('scroll', function() {
        //   if (window.pageYOffset >= 600) {
        //     header.classList.add('header__opa');
        
        //   } else {
        //     header.classList.remove('header__opa');
        
        //   }
        // });

        window.addEventListener('scroll', function(e) {
            const
              oldScroll = this.oldScroll || 0,
              newScroll = this.scrollY,
              isScrollDown = newScroll < oldScroll;
          
            document.querySelector('.header').classList.toggle('header__scroll-up', isScrollDown);
          
            this.oldScroll = newScroll;

            if (newScroll == 0) {
                document.querySelector('.header').classList.remove('header__scroll-up', isScrollDown);
            }
          });