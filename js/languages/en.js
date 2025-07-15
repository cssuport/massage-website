const translations = {
    // Navigation
    nav: {
        home: 'HOME',
        services: 'SERVICES',
        pricing: 'PRICING',
        contact: 'CONTACT US'
    },
    
    // Hero Section
    hero: {
        title: 'RELAXATION & WELLNESS',
        subtitle: 'Quality Reflexology in Cheras',
        description: 'Relieve stress, improve blood circulation, and feel refreshed with our professional massage',
        button: 'Book Now'
    },
    
    // Services Section
    services: {
        title: 'OUR SERVICES',
        items: [
            {
                title: 'Foot Reflexology',
                description: 'Reduce fatigue and improve blood circulation'
            },
            {
                title: 'Full Body Massage',
                description: 'Relieve muscle tension and joint pain'
            },
            {
                title: 'Herbal Treatment',
                description: 'Using natural herbal oils for maximum effect'
            }
        ]
    },
    
    // Pricing Section
    pricing: {
        title: 'PACKAGES',
        packages: [
            {
                title: 'NEW CUSTOMER',
                price: 'RM38',
                duration: '/60 mins',
                features: [
                    'Foot reflexology',
                    'Free herbal drink',
                    'Free consultation'
                ],
                button: 'Book Now'
            },
            {
                title: 'COMPLETE PACKAGE',
                popular: true,
                price: 'RM75',
                duration: '/120 mins',
                features: [
                    'Foot + body massage',
                    'Free herbal drink',
                    'Free consultation',
                    '10% discount on next visit'
                ],
                button: 'Book Now'
            },
            {
                title: 'FAMILY PACKAGE',
                price: 'RM130',
                duration: '/120 mins',
                note: 'For 2 persons',
                features: [
                    'Foot reflexology for 2 persons',
                    'Free herbal drink',
                    'Free consultation'
                ],
                button: 'Book Now'
            }
        ]
    },
    
    // Contact Section
    contact: {
        title: 'CONTACT US',
        info: {
            title: 'Contact Information',
            address: 'NO. 4, LORONG CP1/6\nTAMAN CHERAS PERDANA\n43200 SELANGOR',
            phone: '018-404 4498',
            email: 'info@angdifenghrefleksologi.com',
            hours: 'Open Daily: 10:00 AM - 9:00 PM'
        },
        form: {
            title: 'Send Us a Message',
            description: 'Please fill out the form below and we will get back to you as soon as possible.',
            fields: {
                name: 'Full Name',
                email: 'Email',
                phone: 'Phone Number',
                service: 'Service Interested In',
                message: 'Message',
                consent: 'I agree to the {privacy} *',
                privacy: 'Privacy Policy',
                submit: 'Send Message',
                success: 'Thank you! Your message has been sent successfully. We will contact you soon.',
                error: 'Error! Please check your information and try again.'
            },
            selectDefault: '-- Please Select --',
            services: [
                'Foot Reflexology',
                'Full Body Massage',
                'Herbal Treatment',
                'Others'
            ]
        }
    },
    
    // Footer
    footer: {
        copyright: '© 2025 Ang Di Feng Massage Refleksologi. All Rights Reserved.'
    }
};

// Add to window object to make it globally available
window.translations = translations;
