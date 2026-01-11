High-Ticket Lead Generation & Advanced Tracking Architecture
Bu proje, Konteyner ve Prefabrik gibi yüksek bütçeli (High-Ticket) ürünlerin satışı için optimize edilmiş, Veri Odaklı (Data-Driven) bir Landing Page mimarisidir.

Standart web sitelerinden farklı olarak; pazarlama hunisi (Marketing Funnel) ve veri doğruluğu (Data Integrity) ön planda tutularak geliştirilmiştir.

🎯 Projenin Amacı
Reklam bütçelerinin verimsiz kullanılmasını engellemek ve %99.9 doğru veri ölçümlemesi sağlamak. iOS gizlilik kısıtlamalarına ve Ad-Blocker'lara rağmen, potansiyel müşteri verilerini (Leads) sunucu tarafında işlenebilir hale getirmek.

🛠️ Teknik Yetenekler (Tech Stack)
Frontend: HTML5, CSS3 (Modern Flexbox/Grid), Vanilla JavaScript (ES6+)

Data Tracking: Google Tag Manager (GTM), Data Layer Architecture

Marketing Tech: Facebook CAPI (Conversion API) uyumlu veri yapısı.

📊 Veri Mimarisi (Tracking Logic)
Proje, "Event-Driven" (Olay tabanlı) bir yapıya sahiptir. Form gönderimleri doğrudan GTM'e değil, önce Data Layer katmanına valide edilerek aktarılır.

Örnek GenerateLead Event Yapısı:

JavaScript

window.dataLayer.push({
  'event': 'GenerateLead',
  'userData': {
    'email': 'hashed_email_string', // GDPR uyumlu hazırlık
    'phone': '+90555...',
    'leadQuality': 'High' // Teklif tutarına göre dinamik skorlama
  },
  'ecommerce': {
    'currency': 'TRY',
    'value': 150000
  }
});
🔍 Neden Bu Mimari?
Ayrıştırılmış Kod Yapısı: UI kodları ile Tracking kodları birbirinden izoledir.

Hata Yönetimi: Form validasyonu sonrası sadece temiz veri Data Layer'a işlenir.

Ölçeklenebilirlik: İleride Server-Side GTM kurulumuna hazır altyapı.