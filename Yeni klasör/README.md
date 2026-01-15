🗓️ İK Planlama – Kurumsal Tatil ve İzin Yönetim Sistemi
Bu proje, işletmelerin insan kaynakları süreçlerini kolaylaştırmak ve çalışma takvimlerini optimize etmek amacıyla geliştirilmiş, Karanlık Mod (Dark Mode) odaklı bir web uygulamasıdır.

Uygulama, canlı verileri Nager.Date Public Holidays API üzerinden çekerek Türkiye’ye ait güncel resmi tatil takvimini sunarken, yerel depolama özellikleriyle kişisel izin planlamasına olanak tanır.

🚀 Yeni Eklenen Özellikler (V2.0)
İzin Planlama Paneli: Kullanıcıların başlangıç ve bitiş tarihlerini girerek kendi izin süreçlerini yönetebildiği interaktif bir modül eklendi.

Kalıcı Veri (LocalStorage): Planlanan izinler tarayıcı hafızasına kaydedilir; sayfa yenilense de veriler korunur.

Modern Karanlık Tema: Bootstrap 5 grid yapısı üzerine inşa edilen, özel neon yeşili (#7cff00) vurgulu modern arayüz tasarımı uygulandı.

Dinamik Hesaplama: İzin tarihleri arasındaki gün farkı JavaScript ile anlık olarak hesaplanır.

🧱 Sayfa Yapısı (Multi-Page)
Uygulama, modüler bir yapı sunmak için çok sayfalı olarak tasarlanmıştır:

index.html: Dinamik arama motoru ve öne çıkan tatillerin yer aldığı karşılama ekranı.

products.html: Yıllık tüm resmi tatillerin toplu listesi.

planning.html: Kişisel izin kayıtlarının oluşturulduğu ve yönetildiği planlama aracı.

detail.html: Tatillerin kurumsal etkilerini parametrik (URL üzerinden) gösteren detay sayfası.

about.html: Teknolojik altyapı ve kurumsal vizyon sayfası.

faq.html: Sıkça Sorulan Sorular bölümü.

contact.html: Modern giriş alanlarına sahip etkileşimli iletişim formu.

offline.html: Bağlantı kesildiğinde devreye giren fallback sayfası.

🌐 API ve Veri Yönetimi
Uygulama, dış dünyaya Fetch API ile bağlanır ve verileri şu şekilde yönetir:

Canlı Veri: Öncelikle date.nager.at üzerinden güncel tatiller istenir.

Durum Bildirimleri: Kullanıcıya yükleme (loading) ve hata durumları görsel alert mesajları ile bildirilir.

🎨 Tasarım ve CSS Standartları
Framework: Bootstrap 5 (CDN üzerinden entegre edilmiştir).

Özel Tasarım: css/style.css dosyasında tanımlanan özel kart yapıları (card-apple) ve buton tasarımları.

Responsive Tasarım: Grid sistemi sayesinde mobil, tablet ve masaüstü cihazlarla tam uyum.

📲 PWA (Progressive Web App) Özellikleri
Uygulama, modern web standartlarına uygun olarak kurulabilir ve çevrimdışı çalışabilir durumdadır:

Manifest: Uygulama adı, ikonları ve tema renkleri manifest.json içinde tanımlıdır.

Service Worker: Uygulama iskeletini (App Shell) cache mekanizmasıyla saklar ve offline.html desteği sunar.

🛠️ Kullanılan Teknolojiler
Frontend: HTML5, CSS3, JavaScript (ES6+)

CSS Framework: Bootstrap 5

Veri: Fetch API & LocalStorage

Mimarisi: Progressive Web App (PWA)

🔙 Navigasyon ve UX
Akıllı Geri Butonu: Ana sayfa haricindeki tüm sayfalarda kullanıcıyı bir önceki adıma döndüren dinamik navigasyon.

F5 Koruması: Yenileme durumlarında uygulamanın stabil kalmasını sağlayan yönlendirme mantığı.

Tutarlı Menü: Tüm sayfalarda sabit duran ve aktif sayfayı vurgulayan topbar yapısı.

👤 Geliştirici
Bu proje bir ders ödevi kapsamında modern web teknolojileri standartlarına uygun olarak hazırlanmıştır. Eğitsel amaçlıdır.