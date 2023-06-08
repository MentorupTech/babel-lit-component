# Duplex Header

## Description

This is the duplex header.

> _This is a local component, it can not be use outside this repository._

## How to use

```js
import { LitElement, html } from 'lit-element';
import './src/duplex-header-menu';

export class DuplexComponent extends LitElement {
  static get properties() {
    return {
      logo: { type: Object },
      icontlf: { type: String },
      menuMobile: { type: Array },
      menu: { type: Object },
      menuSocial: { type: Array },
      fixedStickyMenu: { type: Boolean },
      phoneNumber: { type: String },
    };
  }

  constructor() {
    this.logo = {
      mobile: '/src/resources/img/logo_duplex_negativo_vectorial.svg',
      desktop: '/src/resources/img/logoDuplexVectorial.svg',
    };
    this.iconTlf = '/src/resources/img/icons/tlf.svg';
    this.menuMobile = ['Mantenimiento', 'Nueva Instalación'];
    this.menu = {
      Servicios: [
        {
          submenu: 'Mantenimiento',
          rl: '/servicios/mantenimiento',
          icon: '/src/resources/img/icons/mantenice-icon.svg',
        },
        {
          submenu: 'Nueva instalación',
          url: '/servicios/nueva-instalacion',
          icon: '/src/resources/img/icons/elevator-icon.svg',
        },
      ],
      Contacto: ['/contacto'],
    };

    this.phoneNumber = '900 009 383';
    this.menuSocial = [
      {
        link: 'https://es.linkedin.com/company/duplex-ascensores',
        icon: '/src/resources/img/icons/linkedin-icon.sv',
      },
    ];
  }

  render() {
    return html`
      <duplex-header-menu
        .logo=${logo}
        .icontlf=${iconTlf}
        .menuMobile=${menuMobile}
        .menu=${menu}
        phoneNumber="${phoneNumber}"
        .menuSocial="${menuSocial}"
      ></duplex-header-menu>
    `;
  }
}
```

## Properties

- **logo**(_Object_)
  : This property is used to define the path of the logo image files.
- **icontlf**(_String_)
  : This property is used to define the path of the telephone icon image file. It expects a string representing the path of the image file.
- **menuMobile**(_Array_)
  : This property is used to define the menu items for mobile devices. It expects an array of strings representing the names of the menu items.
- **menu**(_Object_)
  : This property is used to define the main menu items.

## Events

- **on-clicked-lit-header-menu-option**(_Event_)
  : Is used to signal that a header menu option has been clicked

```js script
export default {
  title: 'Layer',
};
```

## Demo

```js preview-story
import { LitElement, html } from 'lit-element';
import './duplex-header-menu';
import 'dile-modal/dile-modal';

export const Duplex = ({
  logo,
  iconTlf,
  menuMobile,
  menu,
  phoneNumber,
  menuSocial,
}) =>
  html`
    <duplex-header-menu
      .logo="${logo}"
      .icontlf="${iconTlf}"
      .menuMobile="${menuMobile}"
      phoneNumber="${phoneNumber}"
      .menuSocial="${menuSocial}"
      .menu="${menu}"
    >
      <div
        slot="menu-tlf"
        @click="${() => {
          document.getElementById('myModal').open();
        }}"
      >
        <p>Clica aquí para ver más información</p>
        <dile-modal id="myModal" style="color:black;">
          <p>Nombre: Daniel</p>
          <p>Corre: daniel@gmail.com</p>
          <button
            @click="${() => {
              document.getElementById('myModal').close();
            }}"
            style="border:none; padding:10px; background:blue; color: white; font-size: 20px;"
          >
            Cerrar
          </button>
        </dile-modal>
      </div>
      <li slot="list-media-social">Instagram</li>
    </duplex-header-menu>
  `;

Duplex.args = {
  logo: {
    mobile: '/src/resources/img/logo_duplex_negativo_vectorial.svg',
    desktop: '/src/resources/img/logoDuplexVectorial.svg',
  },
  iconTlf: '/src/resources/img/icons/tlf.svg',
  menuMobile: ['Mantenimiento', 'Nueva Instalación'],
  menu: {
    Servicios: [
      {
        submenu: 'Mantenimiento',
        url: '/servicios/mantenimiento',
        icon: '/src/resources/img/icons/mantenice-icon.svg',
      },
      {
        submenu: 'Nueva instalación',
        url: '/servicios/nueva-instalacion',
        icon: '/src/resources/img/icons/elevator-icon.svg',
      },
    ],
    Contacto: ['/contacto'],
  },
  phoneNumber: '900 009 383',
  menuSocial: [
    {
      link: 'https://es.linkedin.com/company/duplex-ascensores',
      icon: '/src/resources/img/icons/linkedin-icon.svg',
    },
  ],
};
```
