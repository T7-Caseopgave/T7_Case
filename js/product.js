const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("objectId");
const url = `https://ygrqansxcfgymfjnregf.supabase.co/rest/v1/dataset?objectId=eq.${id}`;
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncnFhbnN4Y2ZneW1mam5yZWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4ODgxMjcsImV4cCI6MjA0MTQ2NDEyN30.OaocAW4F9ewkORvf5NfLjnu-GhaBq0_7uH17bhwje94";
window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch(url, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then(showItem);
}

function showItem(item) {
  document.querySelector("h1").textContent = item.model;
  document.querySelector("img").src = `img/${item.categori}.webp`;
  document.querySelector("img").alt = item.model;
  document.querySelector(".productInfo h2").textContent = item.brand;
}
