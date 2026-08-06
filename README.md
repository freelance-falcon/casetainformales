# Los Informales — Web de la caseta

Web estática + PWA (instalable como app en Android y iPhone). Sin dependencias ni build: HTML, CSS y JS planos.

## ⚠️ Falta un paso: la imagen de cabecera

Guarda la imagen del cartel como:

```
assets/header.png
```

Mientras no exista, la web usa `assets/header.svg` (una recreación aproximada) como respaldo automático.

## Editar contenido

Todo el contenido vive en [js/data.js](js/data.js):

- `CASETA` — nombre, fechas de la feria (cuenta atrás), ubicación, horarios y contacto.
- `NOTICIAS` — la primera del array sale destacada en rosa.
- `PROGRAMA` — un bloque por día con sus eventos (`tipo`: `directo`, `dj`, `comida` o `acto`).

Al cambiar contenido, sube la versión de caché en [sw.js](sw.js) (`informales-v2` → `v3`, etc.) para que los móviles con la app instalada reciban lo nuevo.

## Probar en local

```bash
python3 -m http.server 8642 --directory /Users/falcon/Projects/freelance/casetainformales
```

Abre http://localhost:8642

## Publicar

Cualquier hosting estático con HTTPS (obligatorio para que funcione como PWA):

- **GitHub Pages**: sube la carpeta a un repo → Settings → Pages.
- **Netlify / Vercel / Cloudflare Pages**: arrastra la carpeta y listo.

## Instalación como app

- **Android/Chrome**: aparece banner propio "Llévanos en el bolsillo" (evento `beforeinstallprompt`).
- **iPhone/Safari**: iOS no tiene instalación automática; a los 2,5 s se muestra el banner con instrucciones «Añadir a pantalla de inicio».
- Funciona sin conexión gracias al service worker ([sw.js](sw.js)): HTML/JS red-primero, resto caché-primero.
