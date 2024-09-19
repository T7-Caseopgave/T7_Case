const url = `https://ygrqansxcfgymfjnregf.supabase.co/rest/v1/dataset`;
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncnFhbnN4Y2ZneW1mam5yZWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4ODgxMjcsImV4cCI6MjA0MTQ2NDEyN30.OaocAW4F9ewkORvf5NfLjnu-GhaBq0_7uH17bhwje94";
window.addEventListener("DOMContentLoaded", init);

const catagories = [];

function init() {
  fetch(url, {
    method: "GET",
    headers: {
      apikey: key,
    },
  })
    .then((res) => res.json())
    .then(showCategories);
}

function showCategories(items) {
  items.forEach(showCategory);
}

function showCategory(item) {
  console.log("item", item);
  const currentCatagory = item.category;

  //hvis kategorien ikke fremgår i arrayet:
  if (!catagories.includes(currentCatagory)) {
    //tilføj category til array
    catagories.push(currentCatagory);
    //fanger template
    const template = document.querySelector("template").content;
    //laver kopi
    const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector("#catImg").src = `img/${item.img}.webp`;
    copy.querySelector("a").textContent = item.category;
    copy.querySelector("a").href = `productlist.html?category=${item.category}`;
    //appender
    document.querySelector(".letterGroup ol").appendChild(copy);
  }
}
