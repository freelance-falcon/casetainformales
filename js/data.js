/* ============================================================
   DATOS DE LA CASETA — edita este archivo para actualizar la web
   ============================================================ */

const CASETA = {
  nombre: "Los Informales",
  lema: "La caseta de los amigos",
  // Fecha de inicio de la feria (para la cuenta atrás)
  inicioFeria: "2026-08-21T22:00:00",
  finFeria: "2026-08-29T23:59:00",
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
    instagram: "https://instagram.com/losinformales",
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
  { nombre: "Bar El Rincón", detalle: "Tapas y buen vino" },
  { nombre: "Panadería La Espiga", detalle: "El pan de la caseta" },
  { nombre: "Deportes Vega", detalle: "Equipación del equipo" },
  { nombre: "Ferretería Ruiz", detalle: "" },
];

/* Programa: un bloque por día, con eventos ordenados por hora */
const PROGRAMA = [
  {
    dia: "Viernes 21",
    fecha: "2026-08-21",
    eventos: [
      { hora: "22:00", nombre: "Pregón y encendido del alumbrado", tipo: "acto" },
      { hora: "23:00", nombre: "Grupo Alborea", tipo: "directo" },
      { hora: "01:30", nombre: "DJ Curro", tipo: "dj" },
    ],
  },
  {
    dia: "Sábado 22",
    fecha: "2026-08-22",
    eventos: [
      { hora: "14:00", nombre: "Paella de apertura para socios", tipo: "comida" },
      { hora: "22:30", nombre: "Sur y Compás (sevillanas)", tipo: "directo" },
      { hora: "01:30", nombre: "DJ Curro", tipo: "dj" },
    ],
  },
  {
    dia: "Domingo 23",
    fecha: "2026-08-23",
    eventos: [
      { hora: "13:30", nombre: "Día de las familias · juegos para peques", tipo: "acto" },
      { hora: "21:30", nombre: "Trío Albahaca", tipo: "directo" },
    ],
  },
  {
    dia: "Lunes 24",
    fecha: "2026-08-24",
    eventos: [
      { hora: "14:00", nombre: "Concurso de tortillas", tipo: "comida" },
      { hora: "22:30", nombre: "Noche de karaoke", tipo: "acto" },
    ],
  },
  {
    dia: "Martes 25",
    fecha: "2026-08-25",
    eventos: [
      { hora: "22:30", nombre: "Cuarteto La Marea", tipo: "directo" },
    ],
  },
  {
    dia: "Miércoles 26",
    fecha: "2026-08-26",
    eventos: [
      { hora: "14:00", nombre: "Arroz del hermanamiento (caseta invitada)", tipo: "comida" },
      { hora: "22:30", nombre: "Dúo Salitre", tipo: "directo" },
    ],
  },
  {
    dia: "Jueves 27",
    fecha: "2026-08-27",
    eventos: [
      { hora: "22:00", nombre: "Concurso de sevillanas", tipo: "acto" },
      { hora: "23:30", nombre: "Grupo Alborea", tipo: "directo" },
    ],
  },
  {
    dia: "Viernes 28",
    fecha: "2026-08-28",
    eventos: [
      { hora: "22:30", nombre: "Los del Puente (rumbas)", tipo: "directo" },
      { hora: "01:30", nombre: "DJ Curro · sesión fin de feria", tipo: "dj" },
    ],
  },
  {
    dia: "Sábado 29",
    fecha: "2026-08-29",
    eventos: [
      { hora: "14:00", nombre: "Comida de clausura para socios", tipo: "comida" },
      { hora: "23:00", nombre: "Gran fin de fiesta · todos los grupos", tipo: "directo" },
    ],
  },
];
