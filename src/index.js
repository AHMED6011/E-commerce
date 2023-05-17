window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min";

document
  .querySelectorAll("[data-bs-toggle='tooltip']")
  .forEach((item) => new bootstrap.Tooltip(item));

let vAddToCard = document.querySelectorAll(".add-to-card-btn");

vAddToCard.forEach((item) => {
  item.addEventListener("click", () => {
    alert("تم الأضافة الى عربة الشراء");
  });
});
