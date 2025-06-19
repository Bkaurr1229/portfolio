// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Add scroll animations
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// // Observe elements for animation
// document.querySelectorAll('.skill-card, .timeline-item, .project-card').forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(20px)';
//     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     observer.observe(el);
// });


 // Custom cursor
        const cursor = document.querySelector('.cursor-dot');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Navbar blur effect
        const navLinks = document.querySelectorAll('.navbar a');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                // Blur all other links
                navLinks.forEach(otherLink => {
                    if (otherLink !== this) {
                        otherLink.classList.add('blur');
                    }
                });
            });
            
            link.addEventListener('mouseleave', function() {
                // Remove blur from all links
                navLinks.forEach(otherLink => {
                    otherLink.classList.remove('blur');
                });
            });
        });