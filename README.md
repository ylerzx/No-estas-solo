# No Estás Solo/a — Salud Mental y Prevención del Suicidio

Sitio estático (HTML/CSS/JS puro, sin build ni dependencias) listo para GitHub Pages.

## Estructura

```
index.html
css/
  base.css
  crisis.css
  contenido.css
  quiz.css
  footer.css
js/
  quiz-data.js
  quiz.js
  nav.js
```

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (puede ser público o privado, pero Pages gratis requiere que sea público salvo que tengas GitHub Pro/Team).
2. Subí el **contenido de esta carpeta** (no la carpeta en sí) a la raíz del repo:
   ```bash
   git init
   git add .
   git commit -m "Sitio No Estás Solo/a"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages**.
4. En "Build and deployment" elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
5. Guardá. En 1-2 minutos el sitio queda disponible en:
   `https://TU-USUARIO.github.io/TU-REPO/`

## Notas

- Las fuentes (Fraunces, Inter) se cargan desde Google Fonts vía CDN — no hace falta alojar archivos de fuente.
- No hay imágenes locales ni assets adicionales que subir.
- El archivo `sw.js` (service worker) que venía en la carga original pertenece a otro proyecto distinto ("Mi Garaje", una app de mantenimiento vehicular con API de NHTSA) y no tiene relación con este sitio, así que no se incluyó aquí. Si en algún momento querés agregar soporte offline a este sitio, se puede escribir un service worker nuevo específico para estos archivos.
