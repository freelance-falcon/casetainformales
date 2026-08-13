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
    pie: "Así es la pulsera de este año, con el quinto aniversario de la caseta.",
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
  {
    nombre: "Algabterra",
    detalle: "Excavaciones y movimiento de tierras",
    logo: "assets/patrocinadores/algabterra.webp",
    ficha: {
      resumen:
        "Excavaciones y movimiento de tierras con maquinaria de calidad. Profesionalidad, seriedad y trabajos garantizados en cada obra.",
      servicios: [
        "Excavaciones y movimiento de tierras.",
        "Maquinaria de calidad y personal profesional.",
        "Trabajos garantizados, con compromiso y seriedad.",
      ],
      enlaces: [
        { tipo: "tel", texto: "672 041 292", url: "tel:+34672041292" },
        { tipo: "email", texto: "Algabterra@gmail.com", url: "mailto:Algabterra@gmail.com" },
      ],
    },
  },
  {
    nombre: "Tu Mesa de Siempre",
    detalle: "Catering de ferias",
    logo: "assets/patrocinadores/tu-mesa.webp",
    ficha: {
      resumen:
        "Catering especialista en ferias andaluzas. Gestionan ocho casetas en la Feria de Sevilla —entre ellas la Caseta de Farmacia— y el catering de casetas y eventos institucionales en municipios de toda la provincia.",
      servicios: [
        "Cocina propia con cocineros cualificados y cadena de frío gestionada internamente.",
        "Marisco fresco cocido a diario, pan de panadería y chacina cortada a cuchillo.",
        "Repartos diarios para tener siempre el producto más fresco.",
        "Plantilla permanente de 30 personas.",
        "Seguro de responsabilidad civil de hasta 1.000.000 € y registro sanitario 26.0013356 S/E.",
      ],
      enlaces: [
        { tipo: "web", texto: "cateringjoaquinjaen.com", url: "https://www.cateringjoaquinjaen.com" },
        { tipo: "tel", texto: "611 078 337", url: "tel:+34611078337" },
        { tipo: "email", texto: "info@cateringjoaquinjaen.com", url: "mailto:info@cateringjoaquinjaen.com" },
      ],
    },
  },
  {
    nombre: "Hoyo10",
    detalle: "Café bar & copas · La Algaba",
    logo: "assets/patrocinadores/hoyo10.webp",
    ficha: {
      resumen:
        "Lo que empieza como un café a media tarde termina en copa y cachimba. Local con terraza en la calle Peligro, con actuaciones en directo en las fechas grandes.",
      servicios: [
        "Coctelería propia.",
        "Cachimbas.",
        "Tres pantallas para ver todo el fútbol.",
        "Terraza y actuaciones en directo en fechas señaladas.",
      ],
      enlaces: [
        { tipo: "mapa", texto: "C/ Peligro, 9 · La Algaba", url: "https://maps.google.com/?q=Calle+Peligro+9,+La+Algaba,+Sevilla" },
        { tipo: "tel", texto: "661 85 54 14", url: "tel:+34661855414" },
        { tipo: "instagram", texto: "@hoyo10algaba", url: "https://www.instagram.com/hoyo10algaba" },
      ],
    },
  },
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
  {
    nombre: "Grupo PR Palets",
    detalle: "Palets y embalajes",
    logo: "assets/patrocinadores/pr-palets.webp",
    ficha: {
      resumen:
        "Soluciones logísticas integrales de palets y embalajes en Sevilla y Andalucía. Certificados en calidad (ISO 9001), medioambiente (ISO 14001) y seguridad laboral (ISO 45001).",
      servicios: [
        "Fabricación de palets a medida o estándar, embalajes, jaulas y plataformas.",
        "Compra y recuperación de palets usados para su restauración.",
        "Tratamiento térmico certificado NIMF-15 para exportación.",
        "Transporte con flota propia, puerta a puerta.",
        "Alquiler de cubas para residuos de madera y transformación en biomasa.",
      ],
      enlaces: [
        { tipo: "web", texto: "grupoprpalets.es", url: "https://grupoprpalets.es/" },
        { tipo: "tel", texto: "635 40 32 43", url: "tel:+34635403243" },
        { tipo: "email", texto: "administracion@grupoprpalets.com.es", url: "mailto:administracion@grupoprpalets.com.es" },
        { tipo: "horario", texto: "Lunes a viernes, 07:00–18:00" },
      ],
    },
  },
  {
    nombre: "Secosum",
    detalle: "Seguridad y suministros medioambientales",
    logo: "assets/patrocinadores/secosum.webp",
    ficha: {
      resumen:
        "Empresa de La Algaba dedicada a la seguridad y el medioambiente, centrada en el suministro industrial sobre una base innovadora y eficiente en el sector andaluz.",
      servicios: [
        "Seguridad industrial: sistemas de bloqueo y control.",
        "Control de derrames: alfombras, esteras y productos absorbentes.",
        "Iluminación LED, interior y exterior.",
        "Ferretería y herramienta: martillos, destornilladores, sierras y taladros.",
        "Manipulación y almacenaje: remolques, elevadores, contenedores, carretillas y grúas.",
        "Escaleras, guantes y equipos de protección.",
        "Estudio energético gratuito de agua, luz y gas.",
      ],
      enlaces: [
        { tipo: "web", texto: "secosum.com", url: "https://secosum.com/" },
        { tipo: "mapa", texto: "C/ Julio Romero de Torres, s/n · La Algaba", url: "https://maps.google.com/?q=Calle+Julio+Romero+de+Torres,+La+Algaba,+Sevilla" },
        { tipo: "tel", texto: "605 09 75 74", url: "tel:+34605097574" },
        { tipo: "email", texto: "srs@secosum.com", url: "mailto:srs@secosum.com" },
      ],
    },
  },
  {
    nombre: "Podas Laura SL",
    detalle: "Jardinería y podas · La Algaba",
    logo: "assets/patrocinadores/podas-laura.webp",
    ficha: {
      resumen:
        "Jardinería y podas en La Algaba, incluidos los trabajos en altura con técnicas de trepa para árboles de gran porte.",
      servicios: [
        "Poda de árboles y palmeras, también en altura.",
        "Mantenimiento y cuidado de jardines.",
      ],
      enlaces: [
        { tipo: "mapa", texto: "C/ Senda del Medio, 18 · La Algaba", url: "https://maps.google.com/?q=Calle+Senda+del+Medio+18,+La+Algaba,+Sevilla" },
        { tipo: "tel", texto: "671 517 863", url: "tel:+34671517863" },
        { tipo: "email", texto: "podaslaura30@gmail.com", url: "mailto:podaslaura30@gmail.com" },
        { tipo: "web", texto: "podaslaura.com", url: "https://www.podaslaura.com" },
      ],
    },
  },
  {
    nombre: "Rufino",
    detalle: "Contratación de artistas y eventos",
    logo: "assets/patrocinadores/rufino.webp",
    ficha: {
      resumen:
        "Contratación de artistas y organización de eventos: quien pone la música y el espectáculo en ferias, casetas y celebraciones.",
      servicios: [
        "Contratación de artistas y grupos en directo.",
        "Organización y producción de eventos.",
      ],
      enlaces: [
        { tipo: "tel", texto: "618 71 40 29", url: "tel:+34618714029" },
      ],
    },
  },
  {
    nombre: "Velázquez Coca",
    detalle: "Climatización y energía solar térmica",
    logo: "assets/patrocinadores/velazquez-coca.webp",
    ficha: {
      resumen:
        "Mantenimiento, reparación e instalación de equipos de climatización y de energía solar térmica.",
      servicios: [
        "Mantenimiento, instalación y reparación de equipos de climatización.",
        "Mantenimiento, instalación y reparación de energía solar térmica.",
        "Suministro de equipos, para comodidad del cliente.",
        "Maquinaria profesional que mejora la seguridad de trabajadores y clientes.",
      ],
      enlaces: [
        { tipo: "tel", texto: "691 309 939", url: "tel:+34691309939" },
        { tipo: "email", texto: "jvelazquezcoca@gmail.com", url: "mailto:jvelazquezcoca@gmail.com" },
      ],
    },
  },
  {
    nombre: "SABORes La Algaba",
    detalle: "Restaurante · La Algaba",
    logo: "assets/patrocinadores/sabores.webp",
    ficha: {
      resumen:
        "Restaurante en la calle Mercurio de La Algaba. Reserva mesa por teléfono y síguelos en Instagram para ver sus platos y novedades.",
      servicios: [],
      enlaces: [
        { tipo: "mapa", texto: "C/ Mercurio, 29 · La Algaba", url: "https://maps.google.com/?q=Calle+Mercurio+29,+La+Algaba,+Sevilla" },
        { tipo: "tel", texto: "613 66 86 67 · reservas", url: "tel:+34613668667" },
        { tipo: "instagram", texto: "@sabores_laalgaba", url: "https://www.instagram.com/sabores_laalgaba" },
      ],
    },
  },
  {
    nombre: "José A. Sevilla",
    detalle: "Construcciones y reformas",
    logo: "assets/patrocinadores/jose-sevilla.webp",
    ficha: {
      resumen:
        "Construcción y reformas integrales: obra nueva, rehabilitación y reformas de vivienda, con trato directo y presupuesto sin compromiso.",
      servicios: [
        "Reformas integrales de vivienda, cocinas y baños.",
        "Obra nueva y ampliaciones.",
        "Albañilería, solería y alicatado.",
        "Fachadas, cubiertas e impermeabilizaciones.",
        "Presupuesto sin compromiso.",
      ],
      enlaces: [
        { tipo: "tel", texto: "615 96 37 60", url: "tel:+34615963760" },
        { tipo: "tel", texto: "657 80 81 98", url: "tel:+34657808198" },
      ],
    },
  },
  {
    nombre: "Andalucía Color",
    detalle: "Pinturas y decoración · La Algaba",
    logo: "assets/patrocinadores/andalucia-color.webp",
    ficha: {
      resumen:
        "Dale color a tu tierra. Tienda de pinturas en La Algaba, con asesoramiento para elegir producto, color y acabado en cada trabajo.",
      servicios: [
        "Pintura para interior y exterior.",
        "Esmaltes, barnices y protectores para madera y metal.",
        "Impermeabilizantes y revestimientos de fachada.",
        "Preparación de colores a medida.",
        "Herramienta y material de pintura: rodillos, brochas, cintas y protecciones.",
      ],
      enlaces: [
        { tipo: "mapa", texto: "Avda. Andalucía, 1 · La Algaba", url: "https://maps.google.com/?q=Avenida+Andalucia+1,+41980+La+Algaba,+Sevilla" },
        { tipo: "tel", texto: "955 11 57 41", url: "tel:+34955115741" },
        { tipo: "tel", texto: "617 00 25 73", url: "tel:+34617002573" },
        { tipo: "email", texto: "andaluciacolor@gmail.com", url: "mailto:andaluciacolor@gmail.com" },
      ],
    },
  },
  {
    nombre: "IF Fontanería",
    detalle: "Instalaciones de fontanería",
    logo: "assets/patrocinadores/if-fontaneria.webp",
    ficha: {
      resumen:
        "Empresa de fontanería consolidada en el sector desde hace más de 15 años, dedicada a la instalación, reparación y mantenimiento de sistemas de fontanería, con amplia experiencia también en mantenimiento de piscinas. La profesionalidad y la formalidad quedan garantizadas.",
      servicios: [
        "Instalación, reparación y mantenimiento de fontanería.",
        "Mantenimiento de piscinas.",
        "Servicio en hogares, empresas y edificios comerciales.",
        "Diagnóstico de fugas, obstrucciones y bajadas de presión, con asesoramiento en mantenimiento preventivo.",
        "Presupuesto sin ningún compromiso.",
      ],
      enlaces: [
        { tipo: "tel", texto: "685 24 96 08", url: "tel:+34685249608" },
        { tipo: "email", texto: "ifontdm@hotmail.com", url: "mailto:ifontdm@hotmail.com" },
      ],
    },
  },
  {
    nombre: "Matrolo Pladur",
    detalle: "Montaje de pladur · La Algaba",
    logo: "assets/patrocinadores/matrolopladur.webp",
    ficha: {
      resumen:
        "Montaje e instalación de pladur y yeso laminado con más de 20 años de experiencia, en viviendas, locales y oficinas.",
      servicios: [
        "Tabiques de pladur.",
        "Trasdosados directos, semidirectos y autoportantes.",
        "Falsos techos continuos y registrables, en yeso laminado y escayola.",
        "Aislamientos acústicos entre estancias.",
        "Aislamientos térmicos para mayor eficiencia y confort.",
        "Muebles de pladur a medida: estanterías y mobiliario.",
      ],
      enlaces: [
        { tipo: "web", texto: "matrolopladur.com", url: "https://matrolopladur.com/" },
        { tipo: "mapa", texto: "C/ Amapola, 19 · La Algaba", url: "https://maps.google.com/?q=Calle+Amapola+19,+41980+La+Algaba,+Sevilla" },
        { tipo: "tel", texto: "624 14 19 36", url: "tel:+34624141936" },
        { tipo: "email", texto: "info@matrolopladur.com", url: "mailto:info@matrolopladur.com" },
        { tipo: "instagram", texto: "@instalaciones_matrolo", url: "https://www.instagram.com/instalaciones_matrolo" },
      ],
    },
  },
  {
    nombre: "No te preocupes",
    detalle: "Bar · C/ Peligro, La Algaba",
    ficha: {
      resumen:
        "Un bar de amigos y buen ambiente en la calle Peligro. De los de entrar a tomar una y quedarse.",
      servicios: [],
      enlaces: [
        { tipo: "mapa", texto: "C/ Peligro · La Algaba", url: "https://maps.google.com/?q=Calle+Peligro,+La+Algaba,+Sevilla" },
      ],
    },
  },
  {
    nombre: "AI Delfos",
    detalle: "Software e inteligencia artificial",
    logo: "assets/patrocinadores/aidelfos.webp",
    ficha: {
      resumen:
        "Software e inteligencia artificial para la excelencia operativa. Digitalización nueva o mejora de la que ya tienes: primero rediseñamos el proceso y después lo automatizamos, con IA y sin IA.",
      servicios: [
        "Digitalización de procesos, desde cero o sobre lo que ya existe.",
        "Rediseño del proceso antes de automatizarlo.",
        "Automatización con y sin inteligencia artificial.",
      ],
      enlaces: [
        { tipo: "web", texto: "aidelfos.com", url: "https://aidelfos.com" },
        { tipo: "email", texto: "m.falcon@aidelfos.com", url: "mailto:m.falcon@aidelfos.com" },
      ],
    },
  },
  {
    nombre: "Majaralgaba",
    detalle: "Estaciones de servicio Repsol",
    logo: "assets/patrocinadores/majaralgaba.webp",
    ficha: {
      resumen:
        "Estaciones de servicio Repsol en La Algaba y La Rinconada, con tienda, boxes de lavado y recarga eléctrica.",
      servicios: [
        "Venta de carburante y AdBlue.",
        "Recarga eléctrica para vehículos.",
        "Tienda Supercor.",
        "Boxes de lavado, túnel y aspiradoras.",
      ],
      enlaces: [
        { tipo: "mapa", texto: "E.S. La Algaba · Ctra. A-8079 PK-2", url: "https://maps.google.com/?q=Estacion+de+servicio+Repsol+La+Algaba+A-8079" },
        { tipo: "tel", texto: "955 78 80 01 · La Algaba", url: "tel:+34955788001" },
        { tipo: "tel", texto: "954 90 59 30 · La Rinconada", url: "tel:+34954905930" },
      ],
    },
  },
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
      { hora: "16:30", nombre: "Josemi Carrasco", tipo: "directo", cartel: "assets/carteles/josemi-carrasco.webp" },
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
