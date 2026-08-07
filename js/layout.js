/* ============================================================
   Estructura común de todas las páginas (cenefa, nav, farolillos,
   pie y barra inferior). Se inyecta desde aquí para no duplicar
   marcado entre index.html y carta.html.
   ============================================================ */

const INSTAGRAM = "https://www.instagram.com/casetalosinformales";

const ICONO_INSTA =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" stroke="none"/></svg>';

const CENEFA = `<div class="valance" aria-hidden="true">
      <svg viewBox="0 0 1440 42" preserveAspectRatio="none">
        <defs>
          <pattern id="lona" width="72" height="42" patternUnits="userSpaceOnUse">
            <rect width="36" height="42" fill="#4fa8dc"/>
            <rect x="36" width="36" height="42" fill="#fdfdfb"/>
          </pattern>
        </defs>
        <path d="M0,0 H1440 V22
                 A18,14 0 0 1 1404,22 A18,14 0 0 1 1368,22 A18,14 0 0 1 1332,22
                 A18,14 0 0 1 1296,22 A18,14 0 0 1 1260,22 A18,14 0 0 1 1224,22
                 A18,14 0 0 1 1188,22 A18,14 0 0 1 1152,22 A18,14 0 0 1 1116,22
                 A18,14 0 0 1 1080,22 A18,14 0 0 1 1044,22 A18,14 0 0 1 1008,22
                 A18,14 0 0 1 972,22 A18,14 0 0 1 936,22 A18,14 0 0 1 900,22
                 A18,14 0 0 1 864,22 A18,14 0 0 1 828,22 A18,14 0 0 1 792,22
                 A18,14 0 0 1 756,22 A18,14 0 0 1 720,22 A18,14 0 0 1 684,22
                 A18,14 0 0 1 648,22 A18,14 0 0 1 612,22 A18,14 0 0 1 576,22
                 A18,14 0 0 1 540,22 A18,14 0 0 1 504,22 A18,14 0 0 1 468,22
                 A18,14 0 0 1 432,22 A18,14 0 0 1 396,22 A18,14 0 0 1 360,22
                 A18,14 0 0 1 324,22 A18,14 0 0 1 288,22 A18,14 0 0 1 252,22
                 A18,14 0 0 1 216,22 A18,14 0 0 1 180,22 A18,14 0 0 1 144,22
                 A18,14 0 0 1 108,22 A18,14 0 0 1 72,22 A18,14 0 0 1 36,22
                 A18,14 0 0 1 0,22 Z" fill="url(#lona)"/>
      </svg>
    </div>`;

const FAROLILLOS = `<div class="farolillos" aria-hidden="true">
      <svg class="cable" viewBox="0 0 1440 52" preserveAspectRatio="none">
        <path d="M0,18 Q720,40 1440,14" vector-effect="non-scaling-stroke"/>
      </svg>
      <svg class="farol" viewBox="0 0 48 54" aria-hidden="true">
        <line x1="24" y1="0" x2="24" y2="6" stroke="rgba(94,122,138,0.5)" stroke-width="1.6"/>
        <path d="M21 7 Q24 3.5 27 7" stroke="rgba(31,58,77,0.45)" stroke-width="1.6" fill="none"/>
        <g fill="#4fa8dc"><path d="M24.0 28.0 L24.0 8.0 Q29.5 4.1 32.7 10.0 Z"/><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L39.6 15.5 Q46.1 17.4 43.5 23.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L43.5 32.5 Q46.1 38.6 39.6 40.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L32.7 46.0 Q29.5 51.9 24.0 48.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L15.3 46.0 Q8.7 47.2 8.4 40.5 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 32.5 Q-0.5 28.0 4.5 23.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L8.4 15.5 Q8.7 8.8 15.3 10.0 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <g fill="rgba(31,58,77,0.17)"><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <ellipse cx="14" cy="16" rx="5" ry="7" fill="rgba(255,255,255,0.3)"/>
        <g fill="rgba(255,255,255,0.92)">
          <circle cx="15" cy="18" r="3.4"/><circle cx="31" cy="15" r="3.1"/>
          <circle cx="36" cy="27" r="3.2"/><circle cx="25" cy="31" r="3.5"/>
          <circle cx="13" cy="33" r="3.2"/><circle cx="21" cy="43" r="3"/>
          <circle cx="33" cy="39" r="3.2"/><circle cx="8" cy="24" r="2.6"/>
        </g>
        <circle cx="24" cy="28" r="1.6" fill="rgba(31,58,77,0.35)"/>
      </svg>
      <svg class="farol" viewBox="0 0 48 54" aria-hidden="true">
        <line x1="24" y1="0" x2="24" y2="6" stroke="rgba(94,122,138,0.5)" stroke-width="1.6"/>
        <path d="M21 7 Q24 3.5 27 7" stroke="rgba(31,58,77,0.45)" stroke-width="1.6" fill="none"/>
        <g fill="#f2699c"><path d="M24.0 28.0 L24.0 8.0 Q29.5 4.1 32.7 10.0 Z"/><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L39.6 15.5 Q46.1 17.4 43.5 23.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L43.5 32.5 Q46.1 38.6 39.6 40.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L32.7 46.0 Q29.5 51.9 24.0 48.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L15.3 46.0 Q8.7 47.2 8.4 40.5 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 32.5 Q-0.5 28.0 4.5 23.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L8.4 15.5 Q8.7 8.8 15.3 10.0 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <g fill="rgba(31,58,77,0.17)"><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <ellipse cx="14" cy="16" rx="5" ry="7" fill="rgba(255,255,255,0.3)"/>
        <g fill="rgba(255,255,255,0.92)">
          <circle cx="15" cy="18" r="3.4"/><circle cx="31" cy="15" r="3.1"/>
          <circle cx="36" cy="27" r="3.2"/><circle cx="25" cy="31" r="3.5"/>
          <circle cx="13" cy="33" r="3.2"/><circle cx="21" cy="43" r="3"/>
          <circle cx="33" cy="39" r="3.2"/><circle cx="8" cy="24" r="2.6"/>
        </g>
        <circle cx="24" cy="28" r="1.6" fill="rgba(31,58,77,0.35)"/>
      </svg>
      <svg class="farol" viewBox="0 0 48 54" aria-hidden="true">
        <line x1="24" y1="0" x2="24" y2="6" stroke="rgba(94,122,138,0.5)" stroke-width="1.6"/>
        <path d="M21 7 Q24 3.5 27 7" stroke="rgba(31,58,77,0.45)" stroke-width="1.6" fill="none"/>
        <g fill="#e8a63c"><path d="M24.0 28.0 L24.0 8.0 Q29.5 4.1 32.7 10.0 Z"/><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L39.6 15.5 Q46.1 17.4 43.5 23.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L43.5 32.5 Q46.1 38.6 39.6 40.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L32.7 46.0 Q29.5 51.9 24.0 48.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L15.3 46.0 Q8.7 47.2 8.4 40.5 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 32.5 Q-0.5 28.0 4.5 23.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L8.4 15.5 Q8.7 8.8 15.3 10.0 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <g fill="rgba(31,58,77,0.17)"><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <ellipse cx="14" cy="16" rx="5" ry="7" fill="rgba(255,255,255,0.3)"/>
        <g fill="rgba(255,255,255,0.92)">
          <circle cx="15" cy="18" r="3.4"/><circle cx="31" cy="15" r="3.1"/>
          <circle cx="36" cy="27" r="3.2"/><circle cx="25" cy="31" r="3.5"/>
          <circle cx="13" cy="33" r="3.2"/><circle cx="21" cy="43" r="3"/>
          <circle cx="33" cy="39" r="3.2"/><circle cx="8" cy="24" r="2.6"/>
        </g>
        <circle cx="24" cy="28" r="1.6" fill="rgba(31,58,77,0.35)"/>
      </svg>
      <svg class="farol" viewBox="0 0 48 54" aria-hidden="true">
        <line x1="24" y1="0" x2="24" y2="6" stroke="rgba(94,122,138,0.5)" stroke-width="1.6"/>
        <path d="M21 7 Q24 3.5 27 7" stroke="rgba(31,58,77,0.45)" stroke-width="1.6" fill="none"/>
        <g fill="#4fa8dc"><path d="M24.0 28.0 L24.0 8.0 Q29.5 4.1 32.7 10.0 Z"/><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L39.6 15.5 Q46.1 17.4 43.5 23.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L43.5 32.5 Q46.1 38.6 39.6 40.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L32.7 46.0 Q29.5 51.9 24.0 48.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L15.3 46.0 Q8.7 47.2 8.4 40.5 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 32.5 Q-0.5 28.0 4.5 23.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L8.4 15.5 Q8.7 8.8 15.3 10.0 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <g fill="rgba(31,58,77,0.17)"><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <ellipse cx="14" cy="16" rx="5" ry="7" fill="rgba(255,255,255,0.3)"/>
        <g fill="rgba(255,255,255,0.92)">
          <circle cx="15" cy="18" r="3.4"/><circle cx="31" cy="15" r="3.1"/>
          <circle cx="36" cy="27" r="3.2"/><circle cx="25" cy="31" r="3.5"/>
          <circle cx="13" cy="33" r="3.2"/><circle cx="21" cy="43" r="3"/>
          <circle cx="33" cy="39" r="3.2"/><circle cx="8" cy="24" r="2.6"/>
        </g>
        <circle cx="24" cy="28" r="1.6" fill="rgba(31,58,77,0.35)"/>
      </svg>
      <svg class="farol" viewBox="0 0 48 54" aria-hidden="true">
        <line x1="24" y1="0" x2="24" y2="6" stroke="rgba(94,122,138,0.5)" stroke-width="1.6"/>
        <path d="M21 7 Q24 3.5 27 7" stroke="rgba(31,58,77,0.45)" stroke-width="1.6" fill="none"/>
        <g fill="#f2699c"><path d="M24.0 28.0 L24.0 8.0 Q29.5 4.1 32.7 10.0 Z"/><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L39.6 15.5 Q46.1 17.4 43.5 23.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L43.5 32.5 Q46.1 38.6 39.6 40.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L32.7 46.0 Q29.5 51.9 24.0 48.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L15.3 46.0 Q8.7 47.2 8.4 40.5 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 32.5 Q-0.5 28.0 4.5 23.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L8.4 15.5 Q8.7 8.8 15.3 10.0 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <g fill="rgba(31,58,77,0.17)"><path d="M24.0 28.0 L32.7 10.0 Q39.3 8.8 39.6 15.5 Z"/><path d="M24.0 28.0 L43.5 23.5 Q48.5 28.0 43.5 32.5 Z"/><path d="M24.0 28.0 L39.6 40.5 Q39.3 47.2 32.7 46.0 Z"/><path d="M24.0 28.0 L24.0 48.0 Q18.5 51.9 15.3 46.0 Z"/><path d="M24.0 28.0 L8.4 40.5 Q1.9 38.6 4.5 32.5 Z"/><path d="M24.0 28.0 L4.5 23.5 Q1.9 17.4 8.4 15.5 Z"/><path d="M24.0 28.0 L15.3 10.0 Q18.5 4.1 24.0 8.0 Z"/></g>
        <ellipse cx="14" cy="16" rx="5" ry="7" fill="rgba(255,255,255,0.3)"/>
        <g fill="rgba(255,255,255,0.92)">
          <circle cx="15" cy="18" r="3.4"/><circle cx="31" cy="15" r="3.1"/>
          <circle cx="36" cy="27" r="3.2"/><circle cx="25" cy="31" r="3.5"/>
          <circle cx="13" cy="33" r="3.2"/><circle cx="21" cy="43" r="3"/>
          <circle cx="33" cy="39" r="3.2"/><circle cx="8" cy="24" r="2.6"/>
        </g>
        <circle cx="24" cy="28" r="1.6" fill="rgba(31,58,77,0.35)"/>
      </svg>
    </div>`;

/* enlaces: en la portada son anclas; fuera de ella apuntan a la portada */
function enlacesNav(enPortada) {
  const raiz = enPortada ? "" : "./";
  return [
    { href: `${raiz}#socios`, texto: "Socios", sec: "socios" },
    { href: `${raiz}#noticias`, texto: "Comunicado", sec: "noticias" },
    { href: `${raiz}#programa`, texto: "Programa", sec: "programa" },
    { href: "carta", texto: "Menú", sec: "menu" },
  ];
}

const ICONOS_TABBAR = {
  inicio:
    '<svg class="tabbar-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11 L12 4 L20 11 M6 10 V19 H18 V10 M10 19 V14 H14 V19"/></svg>',
  noticias:
    '<svg class="tabbar-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10 V14 H7 L14 18 V6 L7 10 Z M17 9 A4.5 4.5 0 0 1 17 15 M19.5 6.5 A8 8 0 0 1 19.5 17.5"/></svg>',
  socios:
    '<svg class="tabbar-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.5 A8.5 8.5 0 0 1 20.5 9.5 M3.5 14.5 A8.5 8.5 0 0 0 20.5 14.5 M3.2 9.5 h17.6 v5 H3.2 Z"/></svg>',
  programa:
    '<svg class="tabbar-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18 V6 L19 4 V16 M9 18 A2.5 2.5 0 1 1 4 18 A2.5 2.5 0 1 1 9 18 M19 16 A2.5 2.5 0 1 1 14 16 A2.5 2.5 0 1 1 19 16 M9 9 L19 7"/></svg>',
  menu:
    '<svg class="tabbar-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3 V21 M4.5 3 V8 A2.5 2.5 0 0 0 9.5 8 V3 M15.5 12.5 V21 M15.5 12.5 C15.5 8 16.5 3.5 19.5 3 V21"/></svg>',
};

function pintarLayout(pagina) {
  const enPortada = pagina === "portada";
  const raiz = enPortada ? "" : "./";

  // cenefa justo debajo del cartel
  document.querySelector(".hero").insertAdjacentHTML("beforeend", CENEFA);

  // navegación superior
  const enlaces = enlacesNav(enPortada);
  document.querySelector(".hero").insertAdjacentHTML(
    "afterend",
    `<nav class="nav" id="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="${raiz}#inicio">
          <span class="nav-dot" aria-hidden="true"></span>Los Informales
        </a>
        <div class="nav-links">
          ${enlaces
            .map(
              (e) =>
                `<a href="${e.href}"${
                  !enPortada && e.sec === "menu" ? ' class="active"' : ""
                }>${e.texto}</a>`
            )
            .join("")}
        </div>
        <a class="nav-insta" href="${INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram de la caseta">${ICONO_INSTA}</a>
      </div>
    </nav>`
  );

  // cuerda de farolillos al principio del contenido
  document.querySelector("main").insertAdjacentHTML("afterbegin", FAROLILLOS);

  // pie
  document.querySelector("main").insertAdjacentHTML(
    "afterend",
    `<footer class="footer">
      <a class="footer-insta" href="${INSTAGRAM}" target="_blank" rel="noopener">${ICONO_INSTA}@casetalosinformales</a>
      <p class="credito">engineered by <span>@manuelfalcon</span></p>
      <button class="btn btn-ghost btn-small" id="installFooterBtn" hidden>Instalar como app</button>
    </footer>`
  );

  // barra inferior (móvil)
  const secciones = [
    { href: `${raiz}#inicio`, sec: "inicio", texto: "Inicio" },
    { href: `${raiz}#socios`, sec: "socios", texto: "Socios" },
    { href: `${raiz}#noticias`, sec: "noticias", texto: "Aviso" },
    { href: `${raiz}#programa`, sec: "programa", texto: "Programa" },
    { href: "carta", sec: "menu", texto: "Menú" },
  ];
  document.body.insertAdjacentHTML(
    "beforeend",
    `<nav class="tabbar" id="tabbar" aria-label="Navegación principal">
      ${secciones
        .map(
          (s) =>
            `<a href="${s.href}" class="tabbar-item${
              (enPortada && s.sec === "inicio") || (!enPortada && s.sec === "menu")
                ? " active"
                : ""
            }" data-sec="${s.sec}">${ICONOS_TABBAR[s.sec]}<span class="tabbar-label">${s.texto}</span></a>`
        )
        .join("")}
    </nav>`
  );
}
