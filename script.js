(function () {
  "use strict";

  var WHATSAPP = "5215531571844";

  // Menú móvil
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Formulario: arma el mensaje y abre WhatsApp
  var form = document.getElementById("wa-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var texto =
        "Hola Gen DRD4, soy " + d.get("nombre").trim() + ". " +
        "Me interesa: " + d.get("ruta") + ". " +
        "Viajaríamos " + d.get("personas") + " persona(s)." +
        (d.get("mensaje").trim() ? " " + d.get("mensaje").trim() : "");
      window.open(
        "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto),
        "_blank",
        "noopener"
      );
    });
  }

  // Año del pie de página
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
