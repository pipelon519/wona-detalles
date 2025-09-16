
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('capsule');
    } else {
        header.classList.remove('capsule');
    }
});
