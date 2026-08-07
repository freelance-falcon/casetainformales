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

/* Sección Socios: lo que hay que saber siendo socio */
const SOCIOS = {
  destacado: {
    titulo: "La pulsera es tu identificación",
    texto:
      "Llévala puesta en todo momento: es lo que te acredita como socio dentro de la caseta.",
    imagen: "assets/pulsera.webp",
    pie: "Así es la pulsera de este año, con el 5.º aniversario de la caseta.",
  },
  puntos: [
    {
      titulo: "Cena del pescaíto cubierta",
      texto: "La cena del pescaíto de los socios se cubre con el dinero común.",
    },
    {
      titulo: "20 % de descuento con ticket",
      texto:
        "El descuento se aplica solo pagando con ticket y queda reflejado en él. En efectivo pagas lo mismo que quien no es socio.",
    },
  ],
};

/* Comunicado de la junta */
const NOTICIAS = [
  {
    fecha: "2026-08-07",
    titulo: "Compra de tickets: avisa antes",
    texto:
      "Si vas a necesitar más tickets, ponte en contacto con alguno de los responsables antes que nadie, para poder organizarlo con tiempo.",
    etiqueta: "Tickets",
  },
  {
    fecha: "2026-08-07",
    titulo: "¿Ideas para la carta?",
    texto:
      "El catering está abierto a sugerencias de comidas y bebidas. Cuéntanos qué echas en falta y lo trasladamos.",
    etiqueta: "Carta",
  },
  {
    fecha: "2026-08-07",
    titulo: "Así se reparte el presupuesto",
    texto:
      "Este año, con un presupuesto más ajustado, el dinero común va a cubrir la cena del pescaíto de los socios, mantener el nivel y la cantidad de grupos en directo, hacer las mejoras necesarias en el escenario y estrenar decoración en el patio.",
    etiqueta: "Cuentas",
  },
];

/* Patrocinadores: nombre, detalle opcional y enlace opcional.
   Si algún día hay logos: añade "logo": "assets/patrocinadores/nombre.png" */
const PATROCINADORES = [
  { nombre: "Algabterra", detalle: "Excavaciones y movimiento de tierras", logo: "assets/patrocinadores/algabterra.webp" },
  { nombre: "Tu Mesa de Siempre", detalle: "Catering", logo: "assets/patrocinadores/tu-mesa.webp" },
  { nombre: "Hoyo10", detalle: "Café bar & copas", logo: "assets/patrocinadores/hoyo10.webp" },
  {
    nombre: "Grup Algaba",
    detalle: "Andamios, lonas y maquinaria",
    logo: "assets/patrocinadores/grup-algaba.webp",
    ficha: {
      resumen:
        "Servicio integral para obra basado en la seguridad, la planificación y la adaptación a cada proyecto, con oficina técnica propia y transporte para responder con agilidad.",
      servicios: [
        "Andamios: soluciones seguras para trabajos en altura, rehabilitación y accesos complejos.",
        "Lonas: sistemas de protección, cerramientos y cubiertas.",
        "Maquinaria: suministro de equipos para el desarrollo de los trabajos.",
        "Protectores de andamio ALGABA-ECO, desarrollados por ellos para mejorar la seguridad.",
      ],
      enlaces: [
        { tipo: "web", texto: "andamioslaalgaba.es", url: "https://www.andamioslaalgaba.es/" },
        { tipo: "linkedin", texto: "LinkedIn", url: "https://www.linkedin.com/company/grupalgaba/" },
        { tipo: "tel", texto: "93 638 60 79", url: "tel:+34936386079" },
        { tipo: "email", texto: "info@andamioslaalgaba.es", url: "mailto:info@andamioslaalgaba.es" },
      ],
    },
  },
  { nombre: "Grupo PR Palets", detalle: "", logo: "assets/patrocinadores/pr-palets.webp" },
  { nombre: "Secosum", detalle: "Seguridad, construcción y suministros", logo: "assets/patrocinadores/secosum.webp" },
  { nombre: "Podas Laura", detalle: "Poda y jardinería", logo: "assets/patrocinadores/podas-laura.webp" },
  { nombre: "Rufino", detalle: "", logo: "assets/patrocinadores/rufino.webp" },
  { nombre: "Velázquez Coca", detalle: "Climatización", logo: "assets/patrocinadores/velazquez-coca.webp" },
  { nombre: "SABORes", detalle: "", logo: "assets/patrocinadores/sabores.webp" },
  { nombre: "José A. Sevilla", detalle: "Construcciones y reformas", logo: "assets/patrocinadores/jose-sevilla.webp" },
  { nombre: "Andalucía Color", detalle: "Pinturas · Avda. Andalucía 1, La Algaba", logo: "assets/patrocinadores/andalucia-color.webp" },
  { nombre: "IF Fontanería", detalle: "Instalaciones de fontanería", logo: "assets/patrocinadores/if-fontaneria.webp" },
  { nombre: "Majaralgaba", detalle: "Estaciones de servicio Repsol", logo: "assets/patrocinadores/majaralgaba.webp" },
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
const ALERGENOS = {
  GL: "Gluten", HU: "Huevos", SU: "Sulfitos", PE: "Pescado", LA: "Lácteos",
  SO: "Soja", MO: "Moluscos", FS: "Frutos secos", CR: "Crustáceos", CA: "Cacahuetes",
};

const MENU = {
  notaAlergenos: "Alérgenos según la carta del catering. Puede haber trazas: si tienes alergia, consúltanos en barra antes de pedir.",
  nota: "Todos los días hay guisos del día y sugerencias del chef — pregunta en barra.",
  secciones: [
    { titulo: "Bebidas", items: [
      ["Cerveza Cruzcampo 25", "2,00 €", ["GL"]], ["Cerveza Cruzcampo 40", "3,50 €", ["GL"]],
      ["Cerveza sin alcohol 0,0", "2,00 €", ["GL"]], ["Refresco", "2,50 €"],
      ["Zumos (piña y melocotón)", "2,00 €", ["LA"]], ["Agua mineral / con gas", "1,50 €"],
      ["Copa de Rioja / Ribera", "4,00 €", ["SU"]], ["Copa de Verdejo / Frizzante", "4,00 €", ["SU"]],
      ["Tinto de verano 40", "3,50 €", ["SU"]], ["Fino ½", "10,00 €", ["SU"]],
      ["Manzanilla ½", "8,00 €", ["SU"]], ["Manzanilla ½ superior", "12,00 €", ["SU"]],
      ["Jarra de rebujito", "11,50 €", ["SU"]], ["Combinados XL", "6,00 €"],
      ["Combinados Seagram XL", "7,00 €"], ["Combinados Premium XL", "8,50 €"],
    ]},
    { titulo: "Entrantes y varios", items: [
      ["Salmorejo guarnecido", "7,00 €", ["GL", "HU", "SU"]], ["Guiso del día (consúltanos)", "7,00 €"],
      ["Pisto con huevo", "8,00 €", ["HU"]], ["Tomate con melva canutera", "9,00 €", ["SU", "PE"]],
      ["Aliño del día (consúltanos)", "7,00 €"], ["Caldo del puchero", "2,50 €"],
      ["Aceitunas gordales", "3,00 €"], ["Almendras", "3,50 €", ["FS"]],
      ["Panera de pan y picos", "2,00 €", ["GL"]],
    ]},
    { titulo: "Montaditos y bocados", items: [
      ["Montadito de lomo", "3,00 €", ["GL"]], ["Montadito de lomo con jamón", "3,50 €", ["GL"]],
      ["Pincho de pollo", "3,50 €", ["GL"]], ["Hamburguesa", "6,50 €", ["GL", "LA", "HU"]], ["Serranito", "7,50 €", ["GL"]],
    ]},
    { titulo: "Chacinas", items: [
      ["Jamón ibérico", "18,00 €", ["GL"]], ["Caña de lomo ibérica", "16,00 €", ["GL"]],
      ["Queso viejo de oveja", "13,00 €", ["GL", "LA"]], ["Bandeja de surtido ibérico", "20,00 €", ["GL", "LA"]],
      ["Pan ibérico (salmorejo y jamón)", "14,00 €", ["GL", "SU"]],
      ["Hojaldre invertido con anchoa", "14,00 €", ["GL", "LA", "PE"]],
      ["Pan con chicharrón de Cádiz y queso", "14,00 €", ["GL", "LA", "SU"]],
    ]},
    { titulo: "Carnes", items: [
      ["Carrillada al oloroso", "14,00 €", ["GL", "SU"]], ["Lagartito ibérico", "15,00 €", ["GL"]],
      ["Solomillo al mojo picón", "13,50 €", ["GL", "SU"]],
      ["Solomillo a la sevillana (pimiento y jamón ibérico)", "13,50 €", ["GL", "LA"]],
      ["Solomillo al whisky", "13,50 €", ["GL", "SU"]], ["Presa ibérica", "18,00 €", ["GL"]],
      ["Presa ibérica con jamón", "20,00 €", ["GL"]],
    ]},
    { titulo: "De la huerta y de la granja", items: [
      ["Huevos fritos con patatas y jamón", "14,00 €", ["GL", "HU"]],
      ["Huevos a la flamenca (panadera, pisto, huevo y jamón)", "14,00 €", ["GL", "HU"]],
      ["Revuelto de bacalao dorado", "14,00 €", ["GL", "HU", "PE"]], ["Revuelto ibérico", "14,00 €", ["GL", "HU"]],
      ["Patatas arrieras", "14,00 €", ["GL", "HU", "CR", "LA"]], ["Tortilla de patatas", "6,50 €", ["GL", "HU"]],
      ["Pimiento frito", "7,50 €", ["GL"]],
    ]},
    { titulo: "Pescaíto frito", items: [
      ["Pescado del día (boquerón, pijota…)", "13,50 €", ["GL", "PE"]], ["Choco frito", "13,50 €", ["GL", "PE"]],
      ["Cazón en adobo", "12,50 €", ["GL", "PE", "SU"]], ["Dados de corvina", "12,50 €", ["GL", "PE"]],
      ["Bacalao frito", "12,50 €", ["GL", "PE"]],
    ]},
    { titulo: "Mariscos y concha", items: [
      ["Gamba blanca de Huelva", "s/m", ["CR", "SU"]], ["Langostino tigre", "s/m", ["CR", "SU"]],
      ["Capirote (langostino y alioli)", "13,00 €", ["CR", "GL", "HU", "SU"]],
    ]},
    { titulo: "Fritura", items: [
      ["Lagrimita de pollo", "12,50 €", ["GL", "LA"]], ["Buñuelo de marisco", "14,50 €", ["GL", "CR", "SU", "MO", "PE"]],
      ["Flamenquín casero XL", "14,50 €", ["GL", "LA", "CA", "SO", "HU"]], ["Pellizquito al mojo", "14,50 €", ["GL", "SU"]],
      ["Croquetas caseras (consúltanos)", "12,50 €", ["GL", "LA"]],
    ]},
    { titulo: "Cafetería y dulce", items: [
      ["Café y descafeinado", "2,00 €"], ["Pastelería gourmet", "12,00 €", ["HU", "LA", "GL", "FS", "SO"]],
    ]},
  ],
  pescaito: {
    titulo: "Cena del pescaíto · miércoles 16",
    precio: "30 € por persona",
    horario: [
      { hora: "22:00", texto: "Copa de bienvenida" },
      { hora: "22:30", texto: "Comienza la cena" },
    ],
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
