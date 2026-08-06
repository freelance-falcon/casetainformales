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
      { hora: "22:30", nombre: "Cena de pescaíto · José Antonio Sabin", tipo: "comida", cartel: "assets/carteles/sabin.webp" },
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
    eventos: [
      { hora: "16:30", nombre: "Josemi Carrasco", tipo: "directo" },
    ],
  },
];

/* Carta de la caseta y menú de la cena del pescaíto (catering Tu Mesa de Siempre) */
const MENU = {
  nota: "Todos los días hay guisos del día y sugerencias del chef — pregunta en barra.",
  secciones: [
    { titulo: "Bebidas", items: [
      ["Cerveza Cruzcampo 25", "2,00 €"], ["Cerveza Cruzcampo 40", "3,50 €"],
      ["Cerveza sin alcohol 0,0", "2,00 €"], ["Refresco", "2,50 €"],
      ["Zumos (piña y melocotón)", "2,00 €"], ["Agua mineral / con gas", "1,50 €"],
      ["Copa de Rioja / Ribera", "4,00 €"], ["Copa de Verdejo / Frizzante", "4,00 €"],
      ["Tinto de verano 40", "3,50 €"], ["Fino ½", "10,00 €"],
      ["Manzanilla ½", "8,00 €"], ["Manzanilla ½ superior", "12,00 €"],
      ["Jarra de rebujito", "11,50 €"], ["Combinados XL", "6,00 €"],
      ["Combinados Seagram XL", "7,00 €"], ["Combinados Premium XL", "8,50 €"],
    ]},
    { titulo: "Entrantes y varios", items: [
      ["Salmorejo guarnecido", "7,00 €"], ["Guiso del día (consúltanos)", "7,00 €"],
      ["Pisto con huevo", "8,00 €"], ["Tomate con melva canutera", "9,00 €"],
      ["Aliño del día (consúltanos)", "7,00 €"], ["Caldo del puchero", "2,50 €"],
      ["Aceitunas gordales", "3,00 €"], ["Almendras", "3,50 €"],
      ["Panera de pan y picos", "2,00 €"],
    ]},
    { titulo: "Montaditos y bocados", items: [
      ["Montadito de lomo", "3,00 €"], ["Montadito de lomo con jamón", "3,50 €"],
      ["Pincho de pollo", "3,50 €"], ["Hamburguesa", "6,50 €"], ["Serranito", "7,50 €"],
    ]},
    { titulo: "Chacinas", items: [
      ["Jamón ibérico", "18,00 €"], ["Caña de lomo ibérica", "16,00 €"],
      ["Queso viejo de oveja", "13,00 €"], ["Bandeja de surtido ibérico", "20,00 €"],
      ["Pan ibérico (salmorejo y jamón)", "14,00 €"],
      ["Hojaldre invertido con anchoa", "14,00 €"],
      ["Pan con chicharrón de Cádiz y queso", "14,00 €"],
    ]},
    { titulo: "Carnes", items: [
      ["Carrillada al oloroso", "14,00 €"], ["Lagartito ibérico", "15,00 €"],
      ["Solomillo al mojo picón", "13,50 €"],
      ["Solomillo a la sevillana (pimiento y jamón ibérico)", "13,50 €"],
      ["Solomillo al whisky", "13,50 €"], ["Presa ibérica", "18,00 €"],
      ["Presa ibérica con jamón", "20,00 €"],
    ]},
    { titulo: "De la huerta y de la granja", items: [
      ["Huevos fritos con patatas y jamón", "14,00 €"],
      ["Huevos a la flamenca (panadera, pisto, huevo y jamón)", "14,00 €"],
      ["Revuelto de bacalao dorado", "14,00 €"], ["Revuelto ibérico", "14,00 €"],
      ["Patatas arrieras", "14,00 €"], ["Tortilla de patatas", "6,50 €"],
      ["Pimiento frito", "7,50 €"],
    ]},
    { titulo: "Pescaíto frito", items: [
      ["Pescado del día (boquerón, pijota…)", "13,50 €"], ["Choco frito", "13,50 €"],
      ["Cazón en adobo", "12,50 €"], ["Dados de corvina", "12,50 €"],
      ["Bacalao frito", "12,50 €"],
    ]},
    { titulo: "Mariscos y concha", items: [
      ["Gamba blanca de Huelva", "s/m"], ["Langostino tigre", "s/m"],
      ["Capirote (langostino y alioli)", "13,00 €"],
    ]},
    { titulo: "Fritura", items: [
      ["Lagrimita de pollo", "12,50 €"], ["Buñuelo de marisco", "14,50 €"],
      ["Flamenquín casero XL", "14,50 €"], ["Pellizquito al mojo", "14,50 €"],
      ["Croquetas caseras (consúltanos)", "12,50 €"],
    ]},
    { titulo: "Cafetería y dulce", items: [
      ["Café y descafeinado", "2,00 €"], ["Pastelería gourmet", "12,00 €"],
    ]},
  ],
  pescaito: {
    titulo: "Cena del pescaíto · miércoles 16",
    precio: "30 € por persona",
    infantil: "Menú infantil (hasta 12 años): lagrimitas, croquetas y hamburguesa con patatas + postre + bebida ilimitada — 15 €",
    bloques: [
      { titulo: "Para empezar", items: ["Almendras fritas"] },
      { titulo: "Aperitivos fríos", items: [
        "Jamón ibérico", "Caña de lomo ibérica", "Queso curado de oveja",
        "Pan ibérico (salmorejo con jamón)", "Pan con chicharrón de Cádiz y queso",
        "Salpicón de marisco", "Taquitos de tortilla",
      ]},
      { titulo: "Aperitivos calientes", items: [
        "Choco", "Adobo", "Dados de bacalao", "Dados de corvina",
        "Croquetas caseras", "Flamenquín casero", "Lagrimita de pollo",
      ]},
      { titulo: "Un toque dulce", items: ["Degustación de pastelería", "Copa de cava"] },
      { titulo: "Bodega", items: ["Agua mineral, refrescos, cerveza, fino, blanco y tinto selección y rebujito"] },
    ],
  },
};
