# İK Planlama – Resmi Tatil Bilgilendirme Uygulaması

Bu proje, işletmelerin insan kaynakları ve çalışma planlaması süreçlerini desteklemek amacıyla geliştirilmiş, resmi tatil bilgilerini sunan çok sayfalı bir web uygulamasıdır.  
Uygulama, **Nager.Date Public Holidays API** kullanılarak Türkiye’ye ait resmi tatil verilerini dinamik olarak listelemektedir.

---

## 📌 Projenin Amacı

İK Planlama uygulamasının temel amacı;

- İşletmelerin yıllık çalışma planlarını resmi tatillere göre düzenlemesine yardımcı olmak  
- İnsan kaynakları departmanları için kurumsal bir referans takvimi sunmak  
- Resmi tatillerin tarih ve önem bilgilerini kullanıcıya anlaşılır bir arayüzle aktarmaktır  

---

## 🧱 Sayfa Yapısı (Multi-Page)

Uygulama çok sayfalı olarak tasarlanmıştır ve her sayfa ayrı bir HTML dosyasından oluşmaktadır:

- **index.html**  
  Ana sayfa. Kurumsal tanıtım alanı ve API’den gelen öne çıkan resmi tatiller listelenir.  
  Arama özelliği ile kullanıcı etkileşimi sağlanmıştır.

- **products.html**  
  Tüm resmi tatillerin listelendiği sayfadır.

- **detail.html**  
  Seçilen resmi tatile ait detay bilgiler URL parametresi kullanılarak gösterilir  
  (`detail.html?date=...`).  
  Sayfa içinde çalışan bir geri butonu bulunmaktadır.

- **about.html**  
  Kurumsal tanıtım, uygulamanın amacı, kullanılan teknolojiler ve offline çalışma mantığı açıklanmıştır.

- **faq.html**  
  Sıkça Sorulan Sorular sayfasıdır.

- **contact.html**  
  UI odaklı iletişim formu ve adres bilgileri yer almaktadır.

- **offline.html**  
  İnternet bağlantısı olmadığında gösterilen bilgilendirme sayfasıdır.

---

## 🌐 API Kullanımı (Zorunlu)

- Veri çekme işlemleri **fetch()** kullanılarak yapılmıştır.
- API en az iki farklı şekilde kullanılmıştır:
  - Resmi tatil listesi
  - Seçilen tatile ait detay bilgisi
- Aşağıdaki durumlar arayüzde ele alınmıştır:
  - **Loading durumu**
  - **Boş veri durumu**
  - **Hata durumu (Network / API erişim problemi)**

Kullanılan API:  
**Nager.Date Public Holidays API**  
🔗 https://date.nager.at

---

## ⚠️ API Çalışmazsa – Plan B (Zorunlu)

Public API’lerde yaşanabilecek erişim sorunları göz önünde bulundurulmuştur.

### Alınan Önlemler:

- API başarısız olduğunda:
  - `/data/sample.json` dosyasından örnek veriler yüklenir
  - Ekranda aşağıdaki uyarı gösterilir:  
    **“Canlı API erişilemiyor, örnek veri gösteriliyor.”**
- Bu mekanizma sayesinde uygulama tamamen çalışmaz hale gelmemektedir.

📌 Not:  
Uygulama yalnızca JSON dosyasına bağlı değildir. Canlı API önceliklidir.

---

## 🎨 CSS Çatısı Kullanımı (Zorunlu)

Uygulamada **Bootstrap 5** CSS framework’ü kullanılmıştır.

- CDN yöntemiyle projeye dahil edilmiştir
- Grid sistemi aktif olarak kullanılmıştır
- UI bileşenleri:
  - Navbar
  - Button
  - Card
  - Form elemanları
  - Alert mesajları

Bootstrap Linki:  
🔗 https://getbootstrap.com/

Ayrıca projeye özel stiller `css/style.css` dosyasında tanımlanmıştır.

---

## 📲 PWA (Progressive Web App) Özellikleri

### 📄 Manifest
`manifest.json` dosyası mevcuttur ve aşağıdaki alanları içerir:
- name
- short_name
- start_url
- display
- icons
- theme_color

### 🔧 Service Worker
`service-worker.js` dosyası ile:
- App shell cache (HTML, CSS, JS, ikonlar)
- Offline fallback (`offline.html`) sağlanmıştır

### 📥 Kurulabilirlik
Uygulama:
- HTTPS ortamında çalışmaktadır
- Tarayıcı üzerinden **install edilebilir** durumdadır

---

## 🔙 Navigasyon

- Ana sayfa dışında tüm sayfalarda çalışan bir **geri butonu** bulunmaktadır
- Navbar tüm sayfalarda sabittir ve tutarlı görünüm sunar
- Yenileme durumlarında kullanıcı ana sayfaya yönlendirilir

---

## 🛠️ Kullanılan Teknolojiler

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5
- Fetch API
- Service Worker
- PWA mimarisi

---

## 👤 Geliştirici

Bu proje bir **ders ödevi** kapsamında hazırlanmıştır.  
Eğitsel amaçlıdır ve ticari kullanım hedeflenmemektedir.

---