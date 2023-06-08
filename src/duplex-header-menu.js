import { LitElement, html } from 'lit-element';
import { shareStyle } from './styles/duplex-theme/duplex-theme';
import { style } from './styles/lit-header-menu-style';
import { styleIconSvg } from './styles/lit-header-menu-icon-style';

class DuplexHeaderMenu extends LitElement {
  static get styles() {
    return [shareStyle, styleIconSvg, style];
  }

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

  firstUpdated() {
    super.firstUpdated();
    window.addEventListener('scroll', (event) => {
      let menu = this.shadowRoot.querySelector('.menu-wrapper');
      this._handleScrollSticky(event, menu);
    });
  }

  constructor() {
    super();
    this.logo = {};
    this.icontlf = '';
    this.menuMobile = [];
    this.menu = {};
    this.menuSocial = [];
    this.fixedStickyMenu = false;
    this.phoneNumber = '';
  }

  render() {
    return html`
      <section class="wrapper-lit-header-menu">
        ${this._headerMenuMobile()} ${this._headerMenuDesktop()}
      </section>
    `;
  }

  _handleScrollSticky(event, menu) {
    let valueBackground = window.scrollY / 100;
    menu.style.backgroundColor = `rgba(253,253,253, ${valueBackground})`;
  }

  _headerMenuDesktop() {
    return html`
      <div class="header-menu-wrapper">
        <div class="header-menu-tlf">
          ${this.phoneNumber
            ? html` <span>Telefono: <a>${this.phoneNumber}</a></span>`
            : html`<slot class="modal-container" name="menu-tlf"></slot>`}
        </div>
        <div class="header-menu-social">
          <ul>
            ${this.menuSocial.length
              ? this.menuSocial.map(({ link, icon }) => {
                  return html`
                    <li>
                      <a href="${link}">
                        <img src="${icon}" alt="icon-media-social" />
                      </a>
                    </li>
                  `;
                })
              : html`<slot name="list-media-social"></slot>`}
          </ul>
        </div>
      </div>
      <nav class="menu-wrapper">
        <div class="menu-wrapper-logo">
          <a href="/" @click="${this._navUrlMenu}" class="link-home-image">
            <img
              src="/src/resources/img/logoDuplexVectorial.svg"
              alt="logo duplex"
            />
          </a>
        </div>
        <ul class="menu-wrapper-list">
          ${Object.keys(this.menu).map((services) => {
            return html`
              <li
                @click="${services === 'Contacto' ? this._navUrlMenu : null}"
                class="menu-container-option-${this.menu[services].length !== 1
                  ? 'multiple'
                  : 'single'}"
              >
                <a
                  href="${services === 'Contacto'
                    ? this.menu[services][0]
                    : '#'}"
                  >${services}</a
                >
                ${this._headerSubmenu(this.menu[services])}
              </li>
            `;
          })}
        </ul>
      </nav>
    `;
  }

  _headerSubmenu(submenu) {
    if (submenu.length !== 1) {
      return html`
        <ul class="container-submenu">
          ${submenu.map((submenu) => {
            return html`
              <li>
                <a
                  class="container-submenu-option"
                  href="${submenu['url']}"
                  @click="${this._navUrlMenu}"
                >
                  <div class="container-submenu-option-img">
                    <img src="${submenu['icon']}" alt="" />
                  </div>
                  <h4 class="submenu-option-value">${submenu['submenu']}</h4>
                </a>
              </li>
            `;
          })}
        </ul>
      `;
    }
  }

  _headerMenuMobile() {
    if (this.logo && this.icontlf && this.menuMobile) {
      return html`
        <nav class="header-menu-mobile">
          <ul>
            <li class="wrapper-icon-mobile">
              <a href="tel:+34913556430">
                <img src="${this.icontlf}" alt="" class="icon-tlf" />
              </a>
            </li>
            <li class="wrapper-icon-mobile">
              <img
                src="/src/resources/img/logo_duplex_negativo_vectorial.svg"
                alt=""
                class="icon-logo"
              />
            </li>
            <li
              class="wrapper-hamburger-mobile"
              @click="${this._hamburSvgOpen}"
            >
              <div class="wrapper_button">
                <div class="hamburger__icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <section class="wrapper-list-menu">${this._menuMobileList()}</section>
      `;
    }
  }

  _menuMobileList() {
    return html`
      <nav class="menu-list-mobile">
        <ul>
          ${this.menuMobile.map((option) => {
            return html`
              <li class="menu-list-mobile-option">
                <a>${option}</a>
              </li>
            `;
          })}
        </ul>
      </nav>
    `;
  }

  _hamburSvgOpen() {
    const hamburguer = this.shadowRoot.querySelector('.hamburger__icon');
    hamburguer.classList.toggle('open');
    const wrapperMenuList = hamburguer.closest(
      '.header-menu-mobile'
    ).nextElementSibling;
    wrapperMenuList.classList.toggle('opened');
  }

  _navUrlMenu(event) {
    event.preventDefault();
    const _handleUrl = () => {
      if (event.target.nodeName === 'H4') {
        const urlTarget = event.target.closest('.container-submenu-option');
        return urlTarget.getAttribute('href');
      }
      if (event.target.nodeName === 'IMG') {
        const urlTarget = event.target.closest('.link-home-image');
        return urlTarget.getAttribute('href');
      }
      return event.target.getAttribute('href');
    };

    const propertiesUrlMenu = {
      newUrl: _handleUrl(),
    };

    this.dispatchEvent(
      new CustomEvent('on-clicked-lit-header-menu-option', {
        bubbles: true,
        composed: true,
        detail: {
          ...propertiesUrlMenu,
        },
      })
    );
  }
}

window.customElements.define('duplex-header-menu', DuplexHeaderMenu);
