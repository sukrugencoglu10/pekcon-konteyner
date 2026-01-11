/**
 * Growth Engineering Tracking Module
 * Purpose: Handles dataLayer pushes for High-Ticket Lead Gen
 * Author: [Senin Adın]
 */

// Global DataLayer Tanımlaması (Hata önleyici)
window.dataLayer = window.dataLayer || [];

const Tracker = {
    // 1. Yardımcı Fonksiyon: Event Push
    pushEvent: function(eventName, eventData) {
        window.dataLayer.push({
            'event': eventName,
            ...eventData,
            'timestamp': new Date().toISOString()
        });
        console.log(`🚀 [Tracking]: ${eventName} sent to DataLayer`, eventData);
    },

    // 2. Ana Fonksiyon: Lead (Form) Takibi
    // ... üst kısımlar aynı kalsın ...

    // 2. Ana Fonksiyon: Lead (Form) Takibi
    trackLead: function(formData) {
        
        const payload = {
            'event': 'GenerateLead', // GTM Trigger Adı
            'form_location': 'Hero Section',
            'userData': {
                'name': formData.name,
                'phone': formData.phone
            },
            'businessData': {
                'leadType': formData.customData.islemTuru,      // Örn: Satim
                'productInterest': formData.customData.konteynerTipi, // Örn: 40HC
                'currency': 'TRY'
            }
        };

        // Veriyi Data Layer'a itiyoruz
        window.dataLayer.push(payload);
        
        // Konsol çıktısı (Sadece geliştirici görür)
        console.log(`🚀 [Tracking]: Lead Başarıyla Gönderildi!`, payload);
    }

};

// Global erişim için dışarı açıyoruz (Gerekirse)
window.Tracker = Tracker;