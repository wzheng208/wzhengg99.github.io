/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //copy to clip board function   
    function copyToClickBoard(paraName){
        const content = document.getElementById(paraName).innerText
        console.log(content)
        console.log(typeof content)
        navigator.clipboard.writeText(content)
        .then(() => {
        console.log('Text has been copied!')
        console.log(content);
        })
        .catch(err => {
        console.log(err);
        })
    }

    const copy = document.getElementById('copy')
    copy.addEventListener('click', () => {copyToClickBoard('copy-text1')})

    const copy2 = document.getElementById('copy2')
    copy2.addEventListener('click', () => {copyToClickBoard('copy-text2')})

    const copy3 = document.getElementById('copy3')
    copy3.addEventListener('click', () => {copyToClickBoard('copy-text3')})

    const copy4 = document.getElementById('copy4')
    copy4.addEventListener('click', () => {copyToClickBoard('copy-text4')})
});