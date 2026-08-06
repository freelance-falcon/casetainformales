/* ============================================================
   DATOS DE LA CASETA — edita este archivo para actualizar la web
   ============================================================ */

const CASETA = {
  nombre: "Los Informales",
  lema: "La caseta de los amigos",
  // Fecha de inicio de la feria (para la cuenta atrás)
  inicioFeria: "2026-09-16T22:00:00",
  finFeria: "2026-09-20T23:59:00",
  ubicacion: {
    texto: "Recinto Ferial · Calle del Medio, Caseta nº 12",
    mapsUrl: "https://maps.google.com/?q=Recinto+Ferial",
  },
  horarios: [
    { dia: "Lunes a Jueves", horas: "13:00 – 04:00" },
    { dia: "Viernes y Sábado", horas: "13:00 – 06:00" },
    { dia: "Domingo", horas: "13:00 – 02:00" },
  ],
  contacto: {
    instagram: "https://www.instagram.com/casetalosinformales",
    whatsapp: "",
    email: "",
  },
};

/* Noticias: la primera es la más reciente (sale destacada) */
const NOTICIAS = [
  {
    fecha: "2026-07-28",
    titulo: "¡Ya tenemos cartel de actuaciones!",
    texto:
      "Cerrado el programa completo de la feria. Grupos en directo todas las noches y sesión de DJ los fines de semana. Echa un vistazo al programa 👇",
    etiqueta: "Programa",
  },
  {
    fecha: "2026-07-15",
    titulo: "Nueva decoración de la caseta",
    texto:
      "Este año estrenamos toldo, iluminación nueva y más espacio en la pista. Os va a encantar.",
    etiqueta: "Caseta",
  },
  {
    fecha: "2026-07-01",
    titulo: "Abono de socios disponible",
    texto:
      "Ya puedes recoger tu abono de socio. Pregunta a cualquiera de la junta o escríbenos por Instagram.",
    etiqueta: "Socios",
  },
];

/* Patrocinadores: nombre, detalle opcional y enlace opcional.
   Si algún día hay logos: añade "logo": "assets/patrocinadores/nombre.png" */
const PATROCINADORES = [
  { nombre: "Algabterra", detalle: "Excavaciones y movimiento de tierras · 672 041 292" },
  { nombre: "Tu Mesa de Siempre", detalle: "Catering" },
  { nombre: "Hoyo10", detalle: "Café bar & copas" },
];

/* Programa: un bloque por día, con eventos ordenados por hora */
const PROGRAMA = [
  {
    dia: "Miércoles 16",
    fecha: "2026-09-16",
    eventos: [
      { hora: "22:00", nombre: "Cena de pescaíto · José Antonio Sabin", tipo: "comida", cartel: "assets/carteles/sabin.webp" },
      { hora: "00:30", nombre: "Las Zarzanas", tipo: "directo", cartel: "assets/carteles/zarzanas.webp" },
    ],
  },
  {
    dia: "Jueves 17",
    fecha: "2026-09-17",
    eventos: [
      { hora: "17:30", nombre: "Malakay Music", tipo: "directo", cartel: "assets/carteles/malakay.webp" },
      { hora: "20:00", nombre: "Caty Ocaña", tipo: "directo", cartel: "assets/carteles/caty-ocana.webp" },
      { hora: "00:30", nombre: "Grupo Magustami", tipo: "directo", cartel: "assets/carteles/magustami.webp" },
    ],
  },
  {
    dia: "Viernes 18",
    fecha: "2026-09-18",
    eventos: [
      { hora: "17:30", nombre: "Ángela Antúnez", tipo: "directo", cartel: "assets/carteles/angela-antunez.webp" },
      { hora: "20:00", nombre: "Amoloys Music Live", tipo: "directo", cartel: "assets/carteles/amoloys.webp" },
      { hora: "01:00", nombre: "Niño Brasas", tipo: "directo", cartel: "assets/carteles/nino-brasas.webp" },
    ],
  },
  {
    dia: "Sábado 19",
    fecha: "2026-09-19",
    eventos: [
      { hora: "17:30", nombre: "Grupo Kimbala", tipo: "directo", cartel: "assets/carteles/kimbala.webp" },
      { hora: "20:00", nombre: "Nando Sanz & Los Malafama", tipo: "directo", cartel: "assets/carteles/nando-sanz.webp" },
      { hora: "01:00", nombre: "Nikelao Flamenco", tipo: "directo", cartel: "assets/carteles/nikelao.webp" },
    ],
  },
  {
    dia: "Domingo 20",
    fecha: "2026-09-20",
    eventos: [],
  },
];
