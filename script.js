
        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });
        
        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                answer.classList.toggle('open');
                
                const icon = question.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            });
        });
        
        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.science-card, .step, .testimonial-card, .faq-item');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial state for animation
        document.querySelectorAll('.science-card, .step, .testimonial-card, .faq-item').forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Animate chart bars on scroll
        function animateCharts() {
            const chartBars = document.querySelectorAll('.chart-bar, .comparison-bar');
            chartBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (barPosition < screenPosition) {
                    bar.style.height = bar.getAttribute('data-height') || getComputedStyle(bar).height;
                }
            });
        }
        
        // Store original heights for animation
        document.querySelectorAll('.chart-bar, .comparison-bar').forEach(bar => {
            const height = getComputedStyle(bar).height;
            bar.setAttribute('data-height', height);
            bar.style.height = '0';
        });
        
        window.addEventListener('scroll', () => {
            animateOnScroll();
            animateCharts();
        });
        
        // Initial check on page load
        window.addEventListener('load', () => {
            animateOnScroll();
            animateCharts();
        });
   