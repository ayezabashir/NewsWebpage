// grab elements

const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    else throw new Error(`Element does not exist, make sure ${selector} exists`);
}

// Nav styles on scroll
const scrollHeader = () => {
    const headerElement = document.querySelector('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }
    else {
        headerElement.classList.remove('activated');
    }
}
window.addEventListener('scroll', scrollHeader);

// Open Menu
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Switch themes/Add to local Storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive')
    } else {
        localStorage.removeItem('currentTheme')
    }
})