const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const url = `https://ygrqansxcfgymfjnregf.supabase.co/rest/v1/dataset?category=eq.${category}`;
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
    .then(showItems);
}

function showItems(items) {
  document.querySelector("h1").textContent = category;
  items.forEach(showItem);
}

function showItem(item) {
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("img").src = `img/${item.category}.webp`;
  copy.querySelector("img").alt = item.model;
  copy.querySelector("h3").textContent = item.model;
  copy
    .querySelector(".seeMore")
    .setAttribute("href", `product.html?id=${item.objectId}`);
  //append til DOM
  document.querySelector("main").appendChild(copy);
}
