const translations = {
    // Navigation
    nav: {
        home: 'UTAMA',
        services: 'PERKHIDMATAN',
        pricing: 'HARGA',
        contact: 'HUBUNGI KAMI'
    },
    
    // Hero Section
    hero: {
        title: 'RELAKSASI & KESIHATAN',
        subtitle: 'Urutan Refleksologi Berkualiti di Cheras',
        description: 'Legakan tekanan, lancarkan peredaran darah, dan rasai kesegaran badan dengan urutan profesional kami',
        button: 'Tempah Sekarang'
    },
    
    // Services Section
    services: {
        title: 'PERKHIDMATAN KAMI',
        items: [
            {
                title: 'Urutan Refleksologi Kaki',
                description: 'Mengurangkan keletihan dan meningkatkan peredaran darah'
            },
            {
                title: 'Urutan Badan Penuh',
                description: 'Melegakan ketegangan otot dan sendi'
            },
            {
                title: 'Rawatan Herba',
                description: 'Menggunakan minyak herba asli untuk kesan maksimum'
            }
        ]
    },
    
    // Pricing Section
    pricing: {
        title: 'PAKEJ HARGA',
        packages: [
            {
                title: 'PELANGGAN BAHARU',
                price: 'RM38',
                duration: '/60 minit',
                features: [
                    'Urutan refleksologi kaki',
                    'Minuman herba percuma',
                    'Konsultasi percuma'
                ],
                button: 'Tempah Sekarang'
            },
            {
                title: 'PAKEJ LENGKAP',
                popular: true,
                price: 'RM75',
                duration: '/120 minit',
                features: [
                    'Urutan kaki + badan',
                    'Minuman herba percuma',
                    'Konsultasi percuma',
                    'Diskaun 10% untuk kunjungan seterusnya'
                ],
                button: 'Tempah Sekarang'
            },
            {
                title: 'PAKEJ KELUARGA',
                price: 'RM130',
                duration: '/120 minit',
                note: 'Untuk 2 orang',
                features: [
                    'Urutan refleksologi kaki untuk 2 orang',
                    'Minuman herba percuma',
                    'Konsultasi percuma'
                ],
                button: 'Tempah Sekarang'
            }
        ]
    },
    
    // Contact Section
    contact: {
        title: 'HUBUNGI KAMI',
        info: {
            title: 'Maklumat Perhubungan',
            address: 'NO. 4, LORONG CP1/6\nTAMAN CHERAS PERDANA\n43200 SELANGOR',
            phone: '018-404 4498',
            email: 'info@angdifenghrefleksologi.com',
            hours: 'Buka Setiap Hari: 10:00 pagi - 9:00 malam'
        },
        form: {
            title: 'Hantar Mesej',
            description: 'Sila isi borang di bawah dan kami akan menghubungi anda secepat mungkin.',
            fields: {
                name: 'Nama Penuh',
                email: 'Emel',
                phone: 'Nombor Telefon',
                service: 'Perkhidmatan Yang Diminati',
                message: 'Mesej',
                consent: 'Saya bersetuju dengan {privacy} *',
                privacy: 'Dasar Privasi',
                submit: 'Hantar Mesej',
                success: 'Terima kasih! Mesej anda telah berjaya dihantar. Kami akan menghubungi anda tidak lama lagi.',
                error: 'Ralat! Sila periksa semula maklumat yang dimasukkan.'
            },
            selectDefault: '-- Sila Pilih --',
            services: [
                'Urutan Refleksologi Kaki',
                'Urutan Badan Penuh',
                'Rawatan Herba',
                'Lain-lain'
            ]
        }
    },
    
    // Footer
    footer: {
        copyright: '© 2025 Ang Di Feng Massage Refleksologi. Hak Cipta Terpelihara.'
    }
};

// Add to window object to make it globally available
window.translations = translations;
