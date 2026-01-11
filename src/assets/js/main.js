/**
 * UI & Form Handling Logic
 * Bu dosya senin HTML yapına (ID'lere) göre özelleştirildi.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("⚡ Main.js yüklendi - Sistem hazır.");

    // Senin HTML'indeki Form ID'si
    const leadForm = document.getElementById('teklifFormu');

    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Sayfa yenilenmesini durdur

            // Senin HTML'indeki Input ID'leri
            const formData = {
                name: document.getElementById('musteriAdi').value,
                phone: document.getElementById('musteriTel').value,
                // Email yok ama olursa buraya eklersin
                customData: {
                    islemTuru: document.getElementById('islemTuru').value,
                    konteynerTipi: document.getElementById('konteynerTipi').value
                }
            };

            // Tracker'a gönder
            if (window.Tracker) {
                window.Tracker.trackLead(formData);
            }

            // Kullanıcıya bilgi ver
            alert(`Teşekkürler ${formData.name}! Teklifiniz alındı, veriler işleniyor.`);
            leadForm.reset();
        });
    } else {
        console.error("⚠️ Form bulunamadı! ID'nin 'teklifFormu' olduğundan emin ol.");
    }
});