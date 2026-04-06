 const navToggle = document.querySelector('.nav-toggle');
        const siteNav = document.querySelector('.site-nav');

        if (navToggle && siteNav) {
            navToggle.addEventListener('click', () => {
                const isOpen = siteNav.classList.toggle('is-open');
                navToggle.classList.toggle('is-open', isOpen);
                navToggle.setAttribute('aria-expanded', String(isOpen));
            });

            siteNav.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => {
                    siteNav.classList.remove('is-open');
                    navToggle.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }

        const revealItems = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealItems.forEach((item, index) => {
            item.style.setProperty('--delay', `${index * 60}ms`);
            observer.observe(item);
        });