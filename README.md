# İK Planlama – Resmi Tatil Takip ve Planlama Uygulaması (PWA)

Bu proje, işletmelerin resmi tatil günlerini dikkate alarak
yıllık iş, izin ve operasyon planlamalarını daha verimli
şekilde yapabilmesi amacıyla geliştirilmiş çok sayfalı
bir Progressive Web App (PWA) uygulamasıdır.

Uygulama, Nager.Date Public API üzerinden resmi tatil
verilerini çekmekte ve kullanıcıya listeleme, arama
ve detay görüntüleme imkânı sunmaktadır.

---

## 📌 Proje Özellikleri

- Çok sayfalı yapı (Multi-Page Application)
- Resmi tatil listeleme ve detay sayfası
- Arama ve filtreleme özelliği
- API hata, loading ve boş veri durumları
- Offline çalışma desteği (PWA)
- Tarayıcıya install edilebilir yapı

---

## 📸 Ekran Görüntüleri ve ekran kaydı linki

https://drive.google.com/drive/folders/1z7Fk5OXFCIX4I-I4Yu9GlNxMOPVKPmE_?usp=sharing



---

## 🔌 Kullanılan API

**Nager.Date – Public Holidays API**

- API Web Sitesi:  
  https://date.nager.at

- Kullanılan Örnek Endpoint:

API üzerinden resmi tatil adı, tarihi ve açıklamaları
dinamik olarak çekilmektedir.

---

## 🎨 Kullanılan CSS Çatısı

**Bootstrap 5**

- CDN:  
  https://getbootstrap.com/

Uygulamada Bootstrap grid sistemi, kart yapıları,
butonlar ve form bileşenleri aktif olarak kullanılmıştır.

---

## 📲 PWA Özellikleri

- `manifest.json` ile install edilebilir yapı
- `service-worker.js` ile:
  - App Shell Cache
  - Offline Fallback (offline.html)
- İnternet bağlantısı olmadığında kullanıcı bilgilendirilir
- HTTPS üzerinde çalışır (GitHub Pages)

---

## 🌐 Canlı Demo

[[(https://sudekara1.github.io/ik-tatil-planlama-sitesi/)](https://sudekara1.github.io/ik-tatil-planlama-sitesi/)](https://sudekara1.github.io/ik-tatil-planlama-sitesi/)


---

## ⚙️ Kurulum ve Çalıştırma

Bu proje PWA olduğu için `file://` protokolü üzerinden
çalışmaz.

Çalıştırmak için:
- VS Code Live Server  
veya
- GitHub Pages kullanılmalıdır.
