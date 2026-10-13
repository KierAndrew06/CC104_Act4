/* =========================================
           JAVASCRIPT BLOCK - Simulating script.js
           ========================================= */

        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Feature 1: Dark / Light Mode Toggle ---
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-icon');
            const body = document.documentElement; // using root html element
            
            // SVGs for Moon (Dark Mode) and Sun (Light Mode)
            const moonSvg = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
            const sunSvg = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;

            // Check local storage for user's preference
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme) {
                body.setAttribute('data-theme', currentTheme);
                if (currentTheme === 'light') {
                    themeIcon.innerHTML = sunSvg;
                }
            }

            // Toggle logic
            themeToggleBtn.addEventListener('click', () => {
                let targetTheme = 'light';
                
                if (body.getAttribute('data-theme') === 'light') {
                    targetTheme = 'dark';
                    themeIcon.innerHTML = moonSvg;
                    body.removeAttribute('data-theme'); // default is dark
                } else {
                    body.setAttribute('data-theme', 'light');
                    themeIcon.innerHTML = sunSvg;
                }
                
                // Save preference
                localStorage.setItem('theme', targetTheme);
            });


            // --- Feature 2: Hamburger Menu for Mobile ---
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');

            const toggleMenu = () => {
                navMenu.classList.toggle('nav-active');
                hamburger.classList.toggle('toggle');
                
                // Prevent scrolling on body when menu is open
                if (navMenu.classList.contains('nav-active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            };

            hamburger.addEventListener('click', toggleMenu);

            // Close menu when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('nav-active')) {
                        toggleMenu();
                    }
                });
            });


            // --- Feature 3: Smooth Scrolling & Active State Updates ---
            const sections = document.querySelectorAll('section');
            
            // Smooth scroll click handler
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Add glassmorphism to header on scroll
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('header-glass');
                } else {
                    header.classList.remove('header-glass');
                }
            });
        });
