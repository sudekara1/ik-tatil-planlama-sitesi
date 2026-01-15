const API_NEXT = "https://date.nager.at/api/v3/NextPublicHolidays/TR";

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("holidayList");
  const searchInput = document.getElementById("searchInput");
  const offlineAlert = document.getElementById("offlineAlert");



  function showOfflineMessage() {
    if (!offlineAlert) return;

    if (!navigator.onLine) {
      offlineAlert.innerHTML = `
        <div style="
          background:#ffc107;
          color:#000;
          padding:12px;
          text-align:center;
          font-weight:600;">
          ⚠️ İnternet bağlantısı yok. Offline moddasınız.
        </div>
      `;
      offlineAlert.style.display = "block";
    } else {
      offlineAlert.style.display = "none";
    }
  }


  showOfflineMessage();

 
  window.addEventListener("offline", showOfflineMessage);
  window.addEventListener("online", showOfflineMessage);

  

  if (!list) return;

  list.innerHTML = `
    <div class="text-center my-4">
      <div class="spinner-border text-primary"></div>
      <p class="mt-2">Veriler yükleniyor...</p>
    </div>
  `;

  fetch(API_NEXT)
    .then(res => {
      if (!res.ok) throw new Error("API Hatası");
      return res.json();
    })
    .then(data => {
      if (!data || data.length === 0) {
        list.innerHTML = `
          <p class="text-warning">
            Gösterilecek resmi tatil bulunamadı.
          </p>
        `;
        return;
      }

      render(data);

      if (searchInput) {
        searchInput.addEventListener("keyup", () => {
          const value = searchInput.value.toLowerCase();
          const filtered = data.filter(item =>
            item.localName.toLowerCase().includes(value)
          );

          if (filtered.length === 0) {
            list.innerHTML = `
              <p class="text-muted">
                Aramanıza uygun sonuç bulunamadı.
              </p>
            `;
            return;
          }

          render(filtered);
        });
      }
    })
    .catch(() => {
      list.innerHTML = `
        <div class="alert alert-danger">
          Veri alınırken bir hata oluştu.
          Lütfen internet bağlantınızı kontrol ediniz.
        </div>
      `;
    });

  function render(items) {
    list.innerHTML = "";

    items.slice(0, 6).forEach(item => {
      list.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h5 class="card-title">${item.localName}</h5>
              <p class="card-text">
                <strong>Tarih:</strong> ${item.date}
              </p>
              <a href="detail.html?id=${item.date}" class="btn btn-primary btn-sm">
                Detay
              </a>
            </div>
          </div>
        </div>
      `;
    });
  }
});


function goBack() {
  if (document.referrer && !document.referrer.includes("index.html")) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}
