// Permite cerrar el banner de crisis y reabrirlo con un botón flotante.
(function () {
  const STORAGE_KEY = "crisisBarDismissed";

  const bar = document.getElementById("crisis-bar");
  const closeBtn = document.getElementById("crisis-bar-close");
  const reopenBtn = document.getElementById("crisis-bar-reopen");

  if (!bar || !closeBtn || !reopenBtn) return;

  function ocultarBanner(mantenerFoco) {
    bar.classList.add("is-hidden");
    bar.setAttribute("aria-hidden", "true");
    reopenBtn.hidden = false;
    if (mantenerFoco) reopenBtn.focus();
  }

  function mostrarBanner(mantenerFoco) {
    bar.classList.remove("is-hidden");
    bar.removeAttribute("aria-hidden");
    reopenBtn.hidden = true;
    if (mantenerFoco) closeBtn.focus();
  }

  closeBtn.addEventListener("click", () => {
    ocultarBanner(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {
      /* localStorage no disponible: el cierre igual funciona en esta sesión */
    }
  });

  reopenBtn.addEventListener("click", () => {
    mostrarBanner(true);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  });

  // Recordar la preferencia entre visitas en este mismo navegador.
  try {
    if (localStorage.getItem(STORAGE_KEY) === "1") ocultarBanner(false);
  } catch (e) {}
})();
