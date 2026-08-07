/* ============================================================
   Los Informales — lógica de la web
   ============================================================ */

/* ---------- Utilidades ---------- */

const $ = (sel) => document.querySelector(sel);

function formatearFecha(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  });
}

/* ---------- Cuenta atrás ---------- */

function iniciarCuentaAtras() {
  const grid = $("#countdown");
  const label = $("#countdownLabel");
  const inicio = new Date(CASETA.inicioFeria);
  const fin = new Date(CASETA.finFeria);

  function pintar() {
    const ahora = new Date();

    if (ahora >= inicio && ahora <= fin) {
      label.textContent = "🎉 ¡Estamos de feria! Te esperamos en la caseta";
      $("#cuenta-atras").classList.add("en-feria");
      grid.innerHTML = "";
      return;
    }
    if (ahora > fin) {
      label.textContent = "La feria ha terminado… ¡hasta el año que viene! 💙";
      grid.innerHTML = "";
      return;
    }

    let resto = Math.floor((inicio - ahora) / 1000);
    const dias = Math.floor(resto / 86400); resto %= 86400;
    const horas = Math.floor(resto / 3600); resto %= 3600;
    const min = Math.floor(resto / 60);
    const seg = resto % 60;

    const celdas = [
      [dias, "días"],
      [horas, "horas"],
      [min, "min"],
      [seg, "seg"],
    ];
    grid.innerHTML = celdas
      .map(
        ([n, u]) =>
          `<div class="count-cell"><span class="count-num">${String(n).padStart(2, "0")}</span><span class="count-unit">${u}</span></div>`
      )
      .join("");
  }

  pintar();
  setInterval(pintar, 1000);
}

/* ---------- Noticias ---------- */

function pintarNoticias() {
  const grid = $("#newsGrid");
  grid.innerHTML = NOTICIAS.map(
    (n, i) => `
    <article class="news-card${i === 0 ? " destacada" : ""}">
      <span class="news-tag">${n.etiqueta}</span>
      <h3>${n.titulo}</h3>
      <p>${n.texto}</p>
      <span class="news-date">${formatearFecha(n.fecha)}</span>
    </article>`
  ).join("");
}

/* ---------- Socios ---------- */

function pintarSocios() {
  if (typeof SOCIOS === "undefined") {
    document.querySelector("#socios").hidden = true;
    return;
  }
  const d = SOCIOS.destacado;
  $("#socioDestacado").innerHTML = `
    <div class="socio-texto">
      <span class="socio-pulsera" aria-hidden="true">
        <svg viewBox="0 0 64 40"><path d="M8 20 a24 12 0 0 1 48 0 a24 12 0 0 1 -48 0 Z"/><rect x="24" y="12" width="16" height="16" rx="4"/><path d="M28 20 l3 3 l6 -6"/></svg>
      </span>
      <div>
        <h3>${d.titulo}</h3>
        <p>${d.texto}</p>
      </div>
    </div>
    ${d.imagen ? `<figure class="socio-foto">
      <img src="${d.imagen}" alt="Pulsera de socio de la caseta Los Informales 2026" loading="lazy" />
      ${d.pie ? `<figcaption>${d.pie}</figcaption>` : ""}
    </figure>` : ""}`;

  $("#socioGrid").innerHTML = SOCIOS.puntos
    .map((p) => `<article class="socio-card"><h3>${p.titulo}</h3><p>${p.texto}</p></article>`)
    .join("");
}

/* ---------- Programa ---------- */

function pintarPrograma() {
  const tabs = $("#dayTabs");
  const panel = $("#dayPanel");
  const hoy = new Date().toISOString().slice(0, 10);

  let seleccionado = PROGRAMA.findIndex((d) => d.fecha >= hoy);
  if (seleccionado === -1) seleccionado = 0;

  function pintarTabs() {
    tabs.innerHTML = PROGRAMA.map(
      (d, i) => `
      <button class="day-tab${d.fecha === hoy ? " hoy" : ""}"
              role="tab" aria-selected="${i === seleccionado}"
              data-i="${i}">${d.dia}</button>`
    ).join("");
  }

  function pintarPanel() {
    const dia = PROGRAMA[seleccionado];

    // si es hoy: atenúa lo ya pasado y destaca lo siguiente
    // (horas < 06:00 cuentan como madrugada del día siguiente)
    const esHoy = dia.fecha === hoy;
    const ahora = new Date();
    const minutosAhora = ahora.getHours() * 60 + ahora.getMinutes();
    const minutos = (hora) => {
      const [h, m] = hora.split(":").map(Number);
      return h < 6 ? (h + 24) * 60 + m : h * 60 + m;
    };
    let siguienteIdx = -1;
    if (esHoy) {
      siguienteIdx = dia.eventos.findIndex((e) => minutos(e.hora) >= minutosAhora);
    }

    panel.innerHTML =
      dia.eventos
        .map((e, i) => {
          let clase = "";
          if (esHoy && siguienteIdx !== -1) {
            if (i < siguienteIdx) clase = " pasado";
            else if (i === siguienteIdx) clase = " siguiente";
          } else if (esHoy && siguienteIdx === -1) {
            clase = " pasado";
          }
          const btnCartel = e.cartel
            ? `<button class="event-cartel" data-cartel="${e.cartel}" aria-label="Ver cartel de ${e.nombre}">Cartel</button>`
            : "";
          return `
      <div class="event-row${clase}">
        <span class="event-time">${e.hora}</span>
        <span class="event-name">${e.nombre}</span>
        <span class="event-extra">${btnCartel}<span class="event-type ${e.tipo}">${e.tipo}</span></span>
      </div>`;
        })
        .join("") || '<p class="dia-vacio">Sin actuaciones anunciadas este día… de momento 😉</p>';
    // reinicia la animación de entrada
    panel.style.animation = "none";
    void panel.offsetHeight;
    panel.style.animation = "";
  }

  tabs.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".day-tab");
    if (!btn) return;
    seleccionado = Number(btn.dataset.i);
    pintarTabs();
    pintarPanel();
  });

  pintarTabs();
  pintarPanel();
  if (seleccionado > 0) {
    tabs.querySelector('[aria-selected="true"]')?.scrollIntoView({ inline: "center", block: "nearest" });
  }
}

/* ---------- Menú ---------- */

function pintarMenu() {
  const card = $("#pescaitoCard");
  const aco = $("#menuAcordeon");
  if (typeof MENU === "undefined") {
    document.querySelector("#menu").hidden = true;
    return;
  }

  const p = MENU.pescaito;
  const horario = (p.horario || [])
    .map(
      (h) => `<span class="pescaito-hito"><b>${h.hora}</b> ${h.texto}</span>`
    )
    .join("");
  card.innerHTML = `
    <div class="pescaito-head">
      <h3>${p.titulo}</h3>
      <span class="pescaito-precio">${p.precio}</span>
    </div>
    ${horario ? `<div class="pescaito-horario">${horario}</div>` : ""}
    <div class="pescaito-bloques">
      ${p.bloques
        .map(
          (b) => `
        <div class="pescaito-bloque">
          <h4>${b.titulo}</h4>
          <ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        </div>`
        )
        .join("")}
    </div>
    <p class="pescaito-infantil">${p.infantil}</p>
    <p class="pescaito-infantil">La carta de la cena no detalla alérgenos: si tienes alergia, avísanos al reservar.</p>`;

  const chips = (al) =>
    al && al.length
      ? `<span class="alergenos">${al
          .map((c) => `<abbr class="alergeno" title="${ALERGENOS[c]}">${c}</abbr>`)
          .join("")}</span>`
      : "";

  aco.innerHTML =
    `<p class="menu-nota menu-nota-alergenos">${MENU.notaAlergenos}</p>
     <div class="alergenos-leyenda">${Object.entries(ALERGENOS)
       .map(([c, n]) => `<span><abbr class="alergeno" title="${n}">${c}</abbr> ${n}</span>`)
       .join("")}</div>` +
    MENU.secciones
      .map(
        (sec) => `
    <details class="menu-cat">
      <summary>${sec.titulo}<span class="menu-n">${sec.items.length}</span></summary>
      <ul class="menu-items">
        ${sec.items
          .map(
            ([n, precio, al]) =>
              `<li><span class="menu-nombre">${n}${chips(al)}</span><span class="menu-precio">${precio}</span></li>`
          )
          .join("")}
      </ul>
    </details>`
      )
      .join("") + `<p class="menu-nota">${MENU.nota}</p>`;
}

/* ---------- Resumen de la carta en la portada ---------- */

function pintarAvisoCarta() {
  const caja = $("#cartaAviso");
  if (!caja || typeof MENU === "undefined") return;

  const platos = MENU.secciones.reduce((n, s) => n + s.items.length, 0);
  const p = MENU.pescaito;

  caja.innerHTML = `
    <p class="carta-resumen">
      <strong>${platos} platos y bebidas</strong> con sus precios y alérgenos,
      más el menú de la <strong>cena del pescaíto</strong> del miércoles 16
      (${p.precio}).
    </p>
    <p class="carta-alergenos">${MENU.notaAlergenos}</p>
    <a class="btn btn-primary" href="carta">Ver la carta completa</a>`;
}

/* ---------- Patrocinadores ---------- */

function pintarPatrocinadores() {
  const grid = $("#sponsorGrid");
  if (typeof PATROCINADORES === "undefined" || !PATROCINADORES.length) {
    document.querySelector("#patrocinadores").hidden = true;
    return;
  }
  grid.innerHTML = PATROCINADORES.map((p, i) => {
    const contenido = `
      ${p.logo
        ? `<span class="sponsor-marco"><img class="sponsor-logo" src="${p.logo}" alt="${p.nombre}" loading="lazy" /></span>
           <span class="sponsor-nombre sr-only">${p.nombre}</span>`
        : `<span class="sponsor-nombre">${p.nombre}</span>`}
      ${p.detalle ? `<span class="sponsor-detalle">${p.detalle}</span>` : ""}`;
    if (p.ficha) {
      return `<button class="sponsor-card sponsor-card--ficha" data-ficha="${i}">
        ${contenido}<span class="sponsor-vermas">Ver más</span>
      </button>`;
    }
    return p.url
      ? `<a class="sponsor-card" href="${p.url}" target="_blank" rel="noopener">${contenido}</a>`
      : `<div class="sponsor-card">${contenido}</div>`;
  }).join("");
}

/* ---------- Ficha de patrocinador ---------- */

const ICONOS_ENLACE = {
  web: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12 h18 M12 3 a14 14 0 0 1 0 18 a14 14 0 0 1 0 -18"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 11 v6 M8 8 v0.1 M12 17 v-6 M12 13 a2.5 2.5 0 0 1 4.5 1.5 V17"/></svg>',
  tel: '<svg viewBox="0 0 24 24"><path d="M6 3.5 h3 l1.5 4 l-2 1.5 a11 11 0 0 0 6 6 l1.5 -2 l4 1.5 v3 a2 2 0 0 1 -2.2 2 C11 19.5 4.5 13 4 5.7 A2 2 0 0 1 6 3.5 Z"/></svg>',
  email: '<svg viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3.6 7 L12 13 L20.4 7"/></svg>',
};

function iniciarFichas() {
  const modal = $("#fichaModal");
  const cuerpo = $("#fichaCuerpo");

  function abrir(p) {
    const f = p.ficha;
    cuerpo.innerHTML = `
      ${p.logo ? `<span class="ficha-logo"><img src="${p.logo}" alt="" /></span>` : ""}
      <h3 class="ficha-nombre">${p.nombre}</h3>
      ${p.detalle ? `<p class="ficha-detalle">${p.detalle}</p>` : ""}
      <p class="ficha-resumen">${f.resumen}</p>
      ${f.servicios && f.servicios.length
        ? `<ul class="ficha-servicios">${f.servicios.map((s) => `<li>${s}</li>`).join("")}</ul>`
        : ""}
      ${f.enlaces && f.enlaces.length
        ? `<div class="ficha-enlaces">${f.enlaces
            .map(
              (e) =>
                `<a class="ficha-enlace" href="${e.url}"${
                  e.tipo === "web" || e.tipo === "linkedin"
                    ? ' target="_blank" rel="noopener"'
                    : ""
                }>${ICONOS_ENLACE[e.tipo] || ""}<span>${e.texto}</span></a>`
            )
            .join("")}</div>`
        : ""}`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function cerrar() {
    modal.hidden = true;
    cuerpo.innerHTML = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (ev) => {
    const card = ev.target.closest(".sponsor-card--ficha");
    if (card) {
      abrir(PATROCINADORES[Number(card.dataset.ficha)]);
      return;
    }
    if (!modal.hidden && (ev.target === modal || ev.target.closest(".ficha-close"))) cerrar();
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && !modal.hidden) cerrar();
  });
}

/* ---------- Navegación: sombra + sección activa ---------- */

function iniciarNav() {
  const nav = $("#nav");
  window.addEventListener(
    "scroll",
    () => nav.classList.toggle("scrolled", window.scrollY > 10),
    { passive: true }
  );

  const enlaces = [...document.querySelectorAll(".nav-links a")];
  const tabs = [...document.querySelectorAll(".tabbar-item")];
  const secciones = [...new Set([...enlaces, ...tabs].map((a) => a.getAttribute("href")))]
    .map((href) => $(href));

  function activar(id) {
    enlaces.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
    tabs.forEach((a) => a.classList.toggle("active", a.dataset.sec === id));
  }

  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((en) => {
        if (en.isIntersecting) activar(en.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  secciones.forEach((s) => s && obs.observe(s));

  // arriba del todo → "inicio"
  window.addEventListener(
    "scroll",
    () => { if (window.scrollY < 120) activar("inicio"); },
    { passive: true }
  );
}

/* ---------- Animaciones de aparición ---------- */

function iniciarReveal() {
  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

/* ---------- Instalación como app (PWA) ---------- */

function iniciarInstalacion() {
  const btnFooter = $("#installFooterBtn");
  const iosSheet = $("#iosSheet");

  const esIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const esStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    navigator.standalone === true;

  let promptDiferido = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    promptDiferido = e;
    if (!esStandalone) btnFooter.hidden = false;
  });

  btnFooter.addEventListener("click", async () => {
    if (promptDiferido) {
      promptDiferido.prompt();
      await promptDiferido.userChoice;
      promptDiferido = null;
    } else if (esIOS) {
      iosSheet.hidden = false;
    }
  });

  if (esIOS && !esStandalone) btnFooter.hidden = false;

  $("#iosClose").addEventListener("click", () => (iosSheet.hidden = true));
  iosSheet.addEventListener("click", (e) => {
    if (e.target === iosSheet) iosSheet.hidden = true;
  });
}

/* ---------- Lightbox de carteles ---------- */

function iniciarCarteles() {
  const modal = $("#cartelModal");
  const img = $("#cartelImg");

  document.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".event-cartel");
    if (btn) {
      img.src = btn.dataset.cartel;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      return;
    }
    if (!modal.hidden && (ev.target === modal || ev.target.closest(".cartel-close"))) {
      cerrar();
    }
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && !modal.hidden) cerrar();
  });

  function cerrar() {
    modal.hidden = true;
    img.src = "";
    document.body.style.overflow = "";
  }
}

/* ---------- Ambiente: farolillos de noche + parallax del banner ---------- */

function iniciarAmbiente() {
  // parallax sutil del banner (solo escritorio, respeta reduced-motion)
  const img = document.querySelector(".hero-img");
  const reducido = matchMedia("(prefers-reduced-motion: reduce)");
  let pintando = false;
  window.addEventListener(
    "scroll",
    () => {
      if (reducido.matches || window.innerWidth < 768) return;
      if (pintando) return;
      pintando = true;
      requestAnimationFrame(() => {
        img.style.transform = `translateY(${Math.min(window.scrollY * 0.16, 90)}px)`;
        pintando = false;
      });
    },
    { passive: true }
  );
}

/* ---------- Service worker ---------- */

if ("serviceWorker" in navigator) {
  const teniaControlador = !!navigator.serviceWorker.controller;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js", { updateViaCache: "none" })
      .then((reg) => {
        // busca versiones nuevas al volver a la app
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") reg.update();
        });
      })
      .catch(() => {});
  });

  // cuando entra un service worker nuevo, recarga una vez para
  // asegurar que HTML, CSS y JS son de la misma versión
  let recargado = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!teniaControlador || recargado) return;
    recargado = true;
    location.reload();
  });
}

/* ---------- Arranque ---------- */

const PAGINA = document.querySelector("#socios") ? "portada" : "carta";

pintarLayout(PAGINA);

if (PAGINA === "portada") {
  iniciarCuentaAtras();
  pintarNoticias();
  pintarSocios();
  pintarPrograma();
  pintarAvisoCarta();
  pintarPatrocinadores();
  iniciarNav();
  iniciarReveal();
  iniciarCarteles();
  iniciarFichas();
  iniciarAmbiente();
}

if (PAGINA === "carta") {
  pintarMenu();
}

iniciarInstalacion();
