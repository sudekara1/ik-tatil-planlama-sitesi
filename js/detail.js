document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  const [year, month, day] = id.split("-");
  const API_YEAR = `https://date.nager.at/api/v3/PublicHolidays/${year}/TR`;

  const holidayDetails = {
    "01-01": {
      importance: "Yeni yılın başlangıcıdır. Ulusal ve uluslararası resmi tatildir.",
      duration: "1 Gün",
      impact: "Düşük operasyon"
    },
    "04-23": {
      importance: "TBMM’nin açılışı anısına çocuklara armağan edilmiştir.",
      duration: "1 Gün",
      impact: "Orta operasyon"
    },
    "05-01": {
      importance: "İşçi ve emekçilerin haklarını simgeler.",
      duration: "1 Gün",
      impact: "Düşük operasyon"
    },
    "10-29": {
      importance: "Türkiye Cumhuriyeti’nin ilan edildiği gündür.",
      duration: "1.5 Gün",
      impact: "Minimum operasyon"
    }
  };

  fetch(API_YEAR)
    .then(res => {
      if (!res.ok) throw new Error("API Hatası");
      return res.json();
    })
    .then(data => {
      const holiday = data.find(h => h.date === id);

      if (!holiday) {
        document.getElementById("detailContent").innerHTML =
          "<div class='alert alert-warning'>Detay bulunamadı.</div>";
        return;
      }

      const key = `${month}-${day}`;

      const extra = holidayDetails[key] || {
        importance: "Bu resmi tatil ulusal takvimde yer almaktadır.",
        duration: "1 Gün",
        impact: "Standart operasyon"
      };

      renderDetail(holiday, extra);
    })
    .catch(() => {
      document.getElementById("detailContent").innerHTML =
        "<div class='alert alert-danger'>Detaylar yüklenemedi.</div>";
    });
});

function renderDetail(holiday, extra) {
  document.getElementById("hName").innerText = holiday.localName;
  document.getElementById("hDate").innerText = holiday.date;
  document.getElementById("hImportance").innerText = extra.importance;
  document.getElementById("hDuration").innerText = extra.duration;
  document.getElementById("hImpact").innerText = extra.impact;
}
