const logo = {
  mobile: "/src/resources/img/logo_duplex_negativo_vectorial.svg",
  desktop: "/src/resources/img/logoDuplexVectorial.svg",
};

const iconTlf = "/src/resources/img/icons/tlf.svg";

const menuMobile = [
  "Mantenimiento",
  "Nueva Instalación",
  "Ascensores",
  "Calculadora de mantenimiento",
  "Diseña tu Ascensor",
];

const menu = {
  Servicios: [
    {
      submenu: "Mantenimiento",
      url: "/servicios/mantenimiento",
      icon: "/src/resources/img/icons/mantenice-icon.svg",
    },
    {
      submenu: "Nueva instalación",
      url: "/servicios/nueva-instalacion",
      icon: "/src/resources/img/icons/elevator-icon.svg",
    },
    {
      submenu: "Modernización",
      url: "/servicios/modernizacion",
      icon: "/src/resources/img/icons/modern-icon.svg",
    },
    {
      submenu: "Accesibilidad",
      url: "/servicios/accesibilidad",
      icon: "/src/resources/img/icons/accesibility-icon.svg",
    },
  ],
  Productos: [
    {
      submenu: "Ascensores",
      url: "/productos/ascensores",
      icon: "/src/resources/img/icons/elevator-single-icon.svg",
    },
    {
      submenu: "Ascensores industríales",
      url: "/productos/industriales",
      icon: "/src/resources/img/icons/elevator-icon.svg",
    },
    {
      submenu: "Salvaescaleras",
      url: "/productos/salvaescaleras",
      icon: "/src/resources/img/icons/lit-chair-icon.svg",
    },
    {
      submenu: "Puertas de garaje",
      url: "/productos/puertas-garaje",
      icon: "/src/resources/img/icons/garaje-icon.svg",
    },
    {
      submenu: "Escaleras mecánicas",
      url: "/productos/escaleras-mecanicas",
      icon: "/src/resources/img/icons/mechanical-stair-icon.svg",
    },
  ],
  Herramientas: [
    {
      submenu: "Calculadora mantenimiento",
      url: "/herramientas/calculadora-mantenimiento",
      icon: "/src/resources/img/icons/calculator-icon.svg",
    },
    {
      submenu: "Diseña tu ascensor",
      url: "/herramientas/disena-ascensor",
      icon: "/src/resources/img/icons/desing-icon.svg",
    },
  ],
  Nosotros: [
    {
      submenu: "Quienes somos",
      url: "/quienes-somos",
      icon: "/src/resources/img/icons/isotipo-duplex.svg",
    },
    {
      submenu: "Trabaja con nosotros",
      url: "/trabaja-nosotros",
      icon: "/src/resources/img/icons/work-icon.svg",
    },
  ],
  Contacto: ["/contacto"],
};

const phoneNumber = "900 009 383";
const menuSocial = [
  {
    link: "https://es.linkedin.com/company/duplex-ascensores",
    icon: "/src/resources/img/icons/linkedin-icon.sv",
  },
];

export { logo, iconTlf, menuMobile, menu, phoneNumber, menuSocial };
