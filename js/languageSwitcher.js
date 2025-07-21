class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getSavedLanguage() || 'ms';
        this.languages = {
            'en': 'English',
            'zh': '中文',
            'ms': 'Bahasa Melayu'
        };
        this.init();
    }

    init() {
        this.createLanguageSwitcher();
        this.loadLanguage(this.currentLang);
        this.setupEventListeners();
    }

    createLanguageSwitcher() {
        const header = document.querySelector('header nav .container');
        if (!header) return;

        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'language-switcher';
        
        // Current language display
        const currentLangDisplay = document.createElement('div');
        currentLangDisplay.className = 'current-language';
        currentLangDisplay.textContent = this.languages[this.currentLang];
        
        // Language dropdown
        const langDropdown = document.createElement('div');
        langDropdown.className = 'language-dropdown';
        
        Object.entries(this.languages).forEach(([code, name]) => {
            if (code !== this.currentLang) {
                const langOption = document.createElement('a');
                langOption.href = '#';
                langOption.dataset.lang = code;
                langOption.textContent = name;
                langDropdown.appendChild(langOption);
            }
        });
        
        langSwitcher.appendChild(currentLangDisplay);
        langSwitcher.appendChild(langDropdown);
        
        // Add to header
        header.appendChild(langSwitcher);
    }

    setupEventListeners() {
        // Toggle dropdown
        const currentLang = document.querySelector('.current-language');
        if (currentLang) {
            currentLang.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelector('.language-dropdown').classList.toggle('show');
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher')) {
                const dropdowns = document.querySelectorAll('.language-dropdown');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        });

        // Language selection
        document.addEventListener('click', (e) => {
            if (e.target.dataset.lang) {
                e.preventDefault();
                this.loadLanguage(e.target.dataset.lang);
            }
        });
    }

    loadLanguage(lang) {
        if (lang === this.currentLang) return;
        
        // Save to localStorage
        localStorage.setItem('preferredLanguage', lang);
        this.currentLang = lang;
        
        // Update UI
        const currentLangDisplay = document.querySelector('.current-language');
        if (currentLangDisplay) {
            currentLangDisplay.textContent = this.languages[lang];
        }
        
        // Reload translations
        this.loadTranslations(lang);
    }

    loadTranslations(lang) {
        // Load the appropriate language file
        const script = document.createElement('script');
        script.src = `js/languages/${lang}.js`;
        script.onload = () => {
            // Update all translatable elements
            this.updatePageContent();
            // Remove the script after loading
            document.head.removeChild(script);
        };
        script.onerror = () => {
            console.error(`Failed to load language file: ${lang}.js`);
            document.head.removeChild(script);
        };
        document.head.appendChild(script);
    }

    updatePageContent() {
        if (!window.translations) return;
        
        const t = window.translations;
        
        // Update navigation
        document.querySelectorAll('nav a[href="#home"]').forEach(el => el.textContent = t.nav.home);
        document.querySelectorAll('nav a[href="#services"]').forEach(el => el.textContent = t.nav.services);
        document.querySelectorAll('nav a[href="#pricing"]').forEach(el => el.textContent = t.nav.pricing);
        document.querySelectorAll('nav a[href="#contact"]').forEach(el => el.textContent = t.nav.contact);
        
        // Update hero section
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.querySelector('h1').textContent = t.hero.title;
            hero.querySelector('h2').textContent = t.hero.subtitle;
            hero.querySelector('p').textContent = t.hero.description;
            hero.querySelector('.cta-button').innerHTML = `<i class="fab fa-whatsapp"></i> ${t.hero.button}`;
        }
        
        // Update services section
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length === t.services.items.length) {
            serviceCards.forEach((card, index) => {
                const service = t.services.items[index];
                card.querySelector('h3').textContent = service.title;
                card.querySelector('p').textContent = service.description;
            });
        }
        
        // Update pricing section
        const pricingCards = document.querySelectorAll('.pricing-card');
        if (pricingCards.length === t.pricing.packages.length) {
            pricingCards.forEach((card, index) => {
                const pkg = t.pricing.packages[index];
                card.querySelector('h3').textContent = pkg.title;
                if (pkg.note) {
                    const note = card.querySelector('.price + p');
                    if (note) note.textContent = pkg.note;
                }
                const features = card.querySelectorAll('li');
                features.forEach((feature, i) => {
                    if (pkg.features[i]) {
                        feature.textContent = pkg.features[i];
                    }
                });
                const button = card.querySelector('.price-button');
                if (button) button.textContent = pkg.button;
            });
        }
        
        // Update contact section
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            contactInfo.querySelector('h3').textContent = t.contact.info.title;
            contactInfo.querySelector('p:nth-of-type(1)').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.contact.info.address.replace(/\n/g, '<br>')}`;
            contactInfo.querySelector('p:nth-of-type(2)').innerHTML = `<i class="fas fa-phone"></i> <a href="tel:${t.contact.info.phone.replace(/[^0-9+]/g, '')}">${t.contact.info.phone}</a>`;
            contactInfo.querySelector('p:nth-of-type(3)').innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${t.contact.info.email}">${t.contact.info.email}</a>`;
            contactInfo.querySelector('p:nth-of-type(4)').innerHTML = `<i class="fas fa-clock"></i> ${t.contact.info.hours}`;
        }
        
        // Update contact form
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.previousElementSibling.textContent = t.contact.form.title;
            contactForm.previousElementSibling.previousElementSibling.textContent = t.contact.form.description;
            
            // Update form fields
            const fields = contactForm.querySelectorAll('label');
            fields.forEach(field => {
                const forAttr = field.getAttribute('for');
                if (forAttr && t.contact.form.fields[forAttr]) {
                    field.innerHTML = t.contact.form.fields[forAttr].replace('{privacy}', 
                        `<a href="#" class="privacy-policy">${t.contact.form.fields.privacy}</a>`);
                }
            });
            
            // Update select options
            const select = contactForm.querySelector('select');
            if (select) {
                select.innerHTML = `<option value="">${t.contact.form.selectDefault}</option>` +
                    t.contact.form.services.map(service => 
                        `<option value="${service.toLowerCase().replace(/ /g, '-')}">${service}</option>`
                    ).join('');
            }
            
            // Update submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.querySelector('.btn-text').textContent = t.contact.form.fields.submit;
            }
            
            // Update success/error messages
            const successMsg = document.getElementById('formSuccess');
            const errorMsg = document.getElementById('formError');
            if (successMsg) successMsg.querySelector('p').textContent = t.contact.form.fields.success;
            if (errorMsg) errorMsg.querySelector('p').textContent = t.contact.form.fields.error;
        }
        
        // Update footer
        const footer = document.querySelector('footer p');
        if (footer) {
            footer.textContent = t.footer.copyright;
        }
    }

    getSavedLanguage() {
        return localStorage.getItem('preferredLanguage');
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageSwitcher = new LanguageSwitcher();
});
