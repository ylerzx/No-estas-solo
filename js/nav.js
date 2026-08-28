// Resalta el enlace de navegación correspondiente a la sección visible.
(function () {
  const links = document.querySelectorAll(".nav-tabs a");
  const secciones = Array.from(links).map((a) =>
    document.querySelector(a.getAttribute("href"))
  );

  if (!("IntersectionObserver" in window) || !secciones.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        links.forEach((a) => {
          a.style.background = a.getAttribute("href") === id ? "" : "";
          a.setAttribute("aria-current", a.getAttribute("href") === id ? "true" : "false");
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  secciones.forEach((s) => s && obs.observe(s));
})();
