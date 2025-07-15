// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Close mobile menu when clicking on a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                // Scroll down
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                // Scroll up
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
        });
    }
            // Scroll down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Add animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .pricing-card, .contact-info, .map, .contact-form-container');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .contact-info, .map, .contact-form-container');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Initial check after a small delay to allow language switcher to initialize
    setTimeout(animateOnScroll, 300);
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // WhatsApp button click handler
    document.querySelectorAll('.cta-button, .price-button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href.includes('whatsapp')) {
                e.preventDefault();
                const message = encodeURIComponent("Saya ingin membuat tempahan urutan.");
                window.open(`https://wa.me/60123456789?text=${message}`, '_blank');
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const consentCheckbox = document.getElementById('consent');
        const submitBtn = contactForm.querySelector('.submit-btn');
        const successMessage = document.getElementById('formSuccess');
        const errorMessage = document.getElementById('formError');

        // Validation functions
        function validateName() {
            const name = nameInput.value.trim();
            if (name === '') {
                showError('nameError', 'Sila masukkan nama penuh anda');
                return false;
            }
            hideError('nameError');
            return true;
        }

        function validateEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email === '') {
                showError('emailError', 'Sila masukkan alamat emel anda');
                return false;
            } else if (!emailRegex.test(email)) {
                showError('emailError', 'Sila masukkan alamat emel yang sah');
                return false;
            }
            hideError('emailError');
            return true;
        }

        function validatePhone() {
            const phone = phoneInput.value.trim();
            const phoneRegex = /^[0-9\-\+\(\)\s]{10,20}$/;
            
            if (phone === '') {
                showError('phoneError', 'Sila masukkan nombor telefon anda');
                return false;
            } else if (!phoneRegex.test(phone)) {
                showError('phoneError', 'Sila masukkan nombor telefon yang sah');
                return false;
            }
            hideError('phoneError');
            return true;
        }

        function validateMessage() {
            const message = messageInput.value.trim();
            if (message === '') {
                showError('messageError', 'Sila masukkan mesej anda');
                return false;
            } else if (message.length < 10) {
                showError('messageError', 'Mesej terlalu pendek. Sila berikan lebih maklumat');
                return false;
            }
            hideError('messageError');
            return true;
        }

        function validateConsent() {
            if (!consentCheckbox.checked) {
                showError('consentError', 'Sila setuju dengan dasar privasi kami');
                return false;
            }
            hideError('consentError');
            return true;
        }

        function showError(elementId, message) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = message;
                element.classList.add('show');
            }
        }

        function hideError(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = '';
                element.classList.remove('show');
            }
        }

        // Real-time validation
        if (nameInput) nameInput.addEventListener('blur', validateName);
        if (emailInput) emailInput.addEventListener('blur', validateEmail);
        if (phoneInput) phoneInput.addEventListener('blur', validatePhone);
        if (messageInput) messageInput.addEventListener('blur', validateMessage);
        if (consentCheckbox) consentCheckbox.addEventListener('change', validateConsent);

        // Form submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate all fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isMessageValid = validateMessage();
            const isConsentValid = validateConsent();
            
            if (isNameValid && isEmailValid && isPhoneValid && isMessageValid && isConsentValid) {
                // Show loading state
                if (submitBtn) {
                    const btnText = submitBtn.querySelector('.btn-text');
                    if (btnText) {
                        const originalText = btnText.textContent;
                        btnText.textContent = 'Menghantar...';
                        
                        try {
                            // Simulate form submission
                            await new Promise(resolve => setTimeout(resolve, 1500));
                            
                            // Show success message
                            if (successMessage) {
                                successMessage.style.display = 'flex';
                                if (errorMessage) errorMessage.style.display = 'none';
                                contactForm.reset();
                                
                                setTimeout(() => {
                                    successMessage.style.display = 'none';
                                }, 5000);
                            }
                            
                        } catch (error) {
                            // Show error message
                            if (errorMessage) {
                                errorMessage.style.display = 'flex';
                                if (successMessage) successMessage.style.display = 'none';
                                
                                setTimeout(() => {
                                    errorMessage.style.display = 'none';
                                }, 5000);
                            }
                        } finally {
                            // Reset button state
                            if (submitBtn) {
                                submitBtn.disabled = false;
                                const btnText = submitBtn.querySelector('.btn-text');
                                if (btnText) {
                                    btnText.textContent = originalText || 'Hantar Mesej';
                                }
                            }
                        }
                    }
                }
            } else {
                // Scroll to the first error
                const firstError = document.querySelector('.error-message.show');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
            submitBtn.disabled = false;
            
            // Hide success message after 5 seconds
            if (formSuccess.style.display === 'flex') {
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }
        }
    });
}
