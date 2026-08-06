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
  card.innerHTML = `
    <div class="pescaito-head">
      <h3>${p.titulo}</h3>
      <span class="pescaito-precio">${p.precio}</span>
    </div>
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
    <p class="pescaito-infantil">${p.infantil}</p>`;

  aco.innerHTML =
    MENU.secciones
      .map(
        (sec) => `
    <details class="menu-cat">
      <summary>${sec.titulo}<span class="menu-n">${sec.items.length}</span></summary>
      <ul class="menu-items">
        ${sec.items
          .map(([n, precio]) => `<li><span>${n}</span><span class="menu-precio">${precio}</span></li>`)
          .join("")}
      </ul>
    </details>`
      )
      .join("") + `<p class="menu-nota">${MENU.nota}</p>`;
}

/* ---------- Patrocinadores ---------- */

function pintarPatrocinadores() {
  const grid = $("#sponsorGrid");
  if (typeof PATROCINADORES === "undefined" || !PATROCINADORES.length) {
    document.querySelector("#patrocinadores").hidden = true;
    return;
  }
  grid.innerHTML = PATROCINADORES.map((p) => {
    const contenido = `
      ${p.logo ? `<img class="sponsor-logo" src="${p.logo}" alt="" loading="lazy" />` : ""}
      <span class="sponsor-nombre">${p.nombre}</span>
      ${p.detalle ? `<span class="sponsor-detalle">${p.detalle}</span>` : ""}`;
    return p.url
      ? `<a class="sponsor-card" href="${p.url}" target="_blank" rel="noopener">${contenido}</a>`
      : `<div class="sponsor-card">${contenido}</div>`;
  }).join("");
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
  const banner = $("#installBanner");
  const btnBanner = $("#installBtn");
  const btnCerrar = $("#installDismiss");
  const btnFooter = $("#installFooterBtn");
  const iosSheet = $("#iosSheet");

  const esIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const esStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    navigator.standalone === true;
  const descartado = localStorage.getItem("installDismissed") === "1";

  let promptDiferido = null;

  // Android / Chrome: evento nativo de instalación
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    promptDiferido = e;
    btnFooter.hidden = false;
    if (!esStandalone && !descartado) banner.hidden = false;
  });

  async function instalar() {
    if (promptDiferido) {
      promptDiferido.prompt();
      await promptDiferido.userChoice;
      promptDiferido = null;
      banner.hidden = true;
    } else if (esIOS) {
      iosSheet.hidden = false;
    }
  }

  btnBanner.addEventListener("click", instalar);
  btnFooter.addEventListener("click", instalar);
  btnCerrar.addEventListener("click", () => {
    banner.hidden = true;
    localStorage.setItem("installDismissed", "1");
  });

  // iOS Safari: no hay evento nativo → sugerimos con nuestras instrucciones
  if (esIOS && !esStandalone) {
    btnFooter.hidden = false;
    if (!descartado) {
      setTimeout(() => {
        banner.hidden = false;
        btnBanner.textContent = "Ver cómo";
      }, 2500);
    }
    btnBanner.addEventListener("click", () => {
      banner.hidden = true;
      iosSheet.hidden = false;
    });
  }

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
  // farolillos encendidos entre las 20:00 y las 07:00
  const faroles = document.querySelector(".farolillos");
  function nocturno() {
    const h = new Date().getHours();
    faroles.classList.toggle("noche", h >= 20 || h < 7);
  }
  nocturno();
  setInterval(nocturno, 5 * 60 * 1000);

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
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("sw.js").catch(() => {})
  );
}

/* ---------- Arranque ---------- */

iniciarCuentaAtras();
pintarNoticias();
pintarPrograma();
pintarMenu();
pintarPatrocinadores();
iniciarNav();
iniciarReveal();
iniciarInstalacion();
iniciarCarteles();
iniciarAmbiente();
