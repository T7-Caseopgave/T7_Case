const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
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
  //breadcrumbs
  document.querySelector("li.item").textContent = item[0].model;
  document.querySelector("li.cat").textContent = item[0].category;
  //billede + produktinformation
  document.querySelector(".productImg").src = `img/${item[0].category}.webp`;
  document.querySelector(".productImg").alt = item[0].model;
  document.querySelector("h1").textContent = item[0].model;
  document.querySelector(
    ".productInfo p.subtle"
  ).textContent = `${item[0].subcategory}, ${item[0].brand}`;
  document.querySelector(".productInfo p.tags").textContent = item[0].tags;
}
