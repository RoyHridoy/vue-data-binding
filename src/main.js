import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse.js'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')


/**
 * Smooth Scrolling
 */

// Offset the scroll position by header div
const offset = document.querySelector('.header-area').clientHeight;
// Add an event listener to each menu item

function smoothScroll(selector) {
    document.querySelectorAll(selector).forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const scrollPosition = targetSection.offsetTop - offset;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
}
smoothScroll('.menu ul li a')
smoothScroll('.hero-text a')