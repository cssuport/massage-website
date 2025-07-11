const translations = {
    // Navigation
    nav: {
        home: '首页',
        services: '服务项目',
        pricing: '配套价格',
        contact: '联系我们'
    },
    
    // Hero Section
    hero: {
        title: '放松与健康',
        subtitle: '蕉赖优质脚底按摩',
        description: '专业按摩，缓解压力，促进血液循环，让您焕然一新',
        button: '立即预约'
    },
    
    // Services Section
    services: {
        title: '我们的服务',
        items: [
            {
                title: '脚底反射按摩',
                description: '缓解疲劳，促进血液循环'
            },
            {
                title: '全身按摩',
                description: '缓解肌肉紧张和关节疼痛'
            },
            {
                title: '草药治疗',
                description: '使用天然草药油，效果更佳'
            }
        ]
    },
    
    // Pricing Section
    pricing: {
        title: '配套价格',
        packages: [
            {
                title: '新客户优惠',
                price: 'RM38',
                duration: '/60分钟',
                features: [
                    '脚底反射按摩',
                    '免费草药茶',
                    '免费咨询'
                ],
                button: '立即预约'
            },
            {
                title: '完整配套',
                popular: true,
                price: 'RM75',
                duration: '/120分钟',
                features: [
                    '脚底+全身按摩',
                    '免费草药茶',
                    '免费咨询',
                    '下次光临享9折优惠'
                ],
                button: '立即预约'
            },
            {
                title: '家庭配套',
                price: 'RM130',
                duration: '/120分钟',
                note: '2人同行',
                features: [
                    '2人脚底反射按摩',
                    '免费草药茶',
                    '免费咨询'
                ],
                button: '立即预约'
            }
        ]
    },
    
    // Contact Section
    contact: {
        title: '联系我们',
        info: {
            title: '联系信息',
            address: 'NO. 4, LORONG CP1/6\nTAMAN CHERAS PERDANA\n43200 SELANGOR',
            phone: '018-404 4498',
            email: 'info@angdifenghrefleksologi.com',
            hours: '每日营业: 早上10点 - 晚上9点'
        },
        form: {
            title: '发送信息',
            description: '请填写以下表格，我们将尽快与您联系。',
            fields: {
                name: '姓名',
                email: '电邮',
                phone: '电话号码',
                service: '感兴趣的服务',
                message: '留言内容',
                consent: '我同意{privacy} *',
                privacy: '隐私政策',
                submit: '发送信息',
                success: '感谢您的留言！我们将会尽快与您联系。',
                error: '发送失败！请检查您的信息后重试。'
            },
            selectDefault: '-- 请选择 --',
            services: [
                '脚底反射按摩',
                '全身按摩',
                '草药治疗',
                '其他'
            ]
        }
    },
    
    // Footer
    footer: {
        copyright: '© 2025 宏德丰脚底按摩中心 版权所有'
    }
};

// Add to window object to make it globally available
window.translations = translations;
