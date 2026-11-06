const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

function setMenu(open) {
  if (!menuButton || !menu) return;
  menu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "Cerrar" : "Menú";
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    setMenu(!menu.classList.contains("is-open"));
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setMenu(false);
      menuButton.focus();
    }
  });
}

function isLink(value) {
  if (typeof value !== "string") return false;
  const text = value.trim();
  return /^https?:\/\//i.test(text) || /^mailto:/i.test(text);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function applyLaunch(config) {
  const play = typeof config.googlePlay === "string" ? config.googlePlay.trim() : "";
  const launched = config.estado === "publicado" && /^https?:\/\//i.test(play);
  document.querySelectorAll("[data-store-cta]").forEach((link) => {
    if (launched) {
      link.textContent = "Descargar en Google Play";
      link.href = play;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.textContent = "Conoce cómo funciona";
      link.href = "#como-funciona";
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
  document.querySelectorAll("[data-store-note]").forEach((note) => {
    note.hidden = launched;
  });
}

function applyCities(config) {
  const box = document.querySelector("[data-cities]");
  const title = document.querySelector("[data-cities-title]");
  const cities = Array.isArray(config.ciudades)
    ? config.ciudades.map((city) => String(city).trim()).filter(Boolean)
    : [];
  if (!box || cities.length === 0) return;
  if (title) title.textContent = "Dónde está SEU";
  box.innerHTML = `<p>SEU está disponible en:</p><ul class="city-list">${cities
    .map((city) => `<li>${escapeHtml(city)}</li>`)
    .join("")}</ul>`;
}

function applyDrivers(config) {
  const channel = typeof config.registroConductores === "string" ? config.registroConductores.trim() : "";
  document.querySelectorAll("[data-driver-cta]").forEach((link) => {
    if (isLink(channel)) {
      link.textContent = "Quiero registrarme";
      link.href = channel;
      if (/^https?:\/\//i.test(channel)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    } else {
      link.textContent = "Ver cómo registrarme";
      link.href = "#registro-conductor";
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
}

function applyPayments(config) {
  const answer = document.querySelector("[data-pay-answer]");
  if (!answer) return;
  const methods = Array.isArray(config.pagos) ? config.pagos : [];
  const online = methods.includes("en_linea");
  const cash = methods.includes("efectivo") || methods.length === 0;
  if (online && cash) {
    answer.textContent = "Puedes pagar en efectivo al conductor o con pago en línea. Las dos opciones se ven en la app.";
  } else if (online) {
    answer.textContent = "En esta versión el pago se hace en línea, dentro de la app.";
  } else {
    answer.textContent = "En esta versión pagas en efectivo, directo al conductor. El pago en línea se muestra en la app solo cuando esté habilitado.";
  }
}

fetch("/site.config.json")
  .then((response) => (response.ok ? response.json() : null))
  .then((config) => {
    if (!config || typeof config !== "object") return;
    applyLaunch(config);
    applyCities(config);
    applyDrivers(config);
    applyPayments(config);
  })
  .catch(() => {});
