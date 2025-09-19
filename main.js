
document.addEventListener('DOMContentLoaded', function () {
    const stickyHeader = document.getElementById('sticky-header');
    const heroSection = document.querySelector('.hero');

    // Sticky Header Logic
    function handleScroll() {
        if (window.scrollY > heroSection.offsetHeight) {
            stickyHeader.classList.remove('hidden');
        } else {
            stickyHeader.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Mobile Menu Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Create a mobile-specific menu container if it doesn't exist
            let mobileMenu = document.querySelector('.mobile-nav');
            if (!mobileMenu) {
                mobileMenu = document.createElement('nav');
                mobileMenu.className = 'mobile-nav';
                mobileMenu.innerHTML = mainNav.innerHTML;
                document.body.appendChild(mobileMenu);

                // Add styles for the mobile menu
                const style = document.createElement('style');
                style.textContent = `
                    .mobile-nav {
                        display: none; /* Initially hidden */
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(255, 255, 255, 0.98);
                        backdrop-filter: blur(5px);
                        z-index: 1100;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .mobile-nav.active {
                        display: flex;
                    }
                    .mobile-nav ul {
                        list-style: none;
                        padding: 0;
                        text-align: center;
                    }
                    .mobile-nav ul li {
                        margin: 20px 0;
                    }
                    .mobile-nav ul li a {
                        font-size: 1.5rem;
                        color: var(--primary-color);
                        text-decoration: none;
                        font-weight: 600;
                    }
                    .close-menu {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        font-size: 2rem;
                        color: var(--primary-color);
                        background: none;
                        border: none;
                        cursor: pointer;
                    }
                `;
                document.head.appendChild(style);

                // Add close button
                const closeButton = document.createElement('button');
                closeButton.innerHTML = '&times;';
                closeButton.className = 'close-menu';
                mobileMenu.appendChild(closeButton);

                closeButton.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            }
            
            // Toggle the active class
            mobileMenu.classList.toggle('active');
        });
    }
});
