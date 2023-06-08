import { css } from "lit-element";
const style = css`
  :host {
    display: block;
    width: 100%;
    font-family: var(--duplex-fontDefault);
    font-style: normal;
    position: fixed;
  }

  .header-menu-mobile {
    height: 56px;
    background-color: var(--duplex-dark-black, #1d1d1e);
    padding: 0 8px;
  }

  .header-menu-mobile ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-menu-wrapper {
    display: none;
  }

  .menu-wrapper {
    display: none;
  }

  .wrapper-icon-mobile:first-child {
    height: 30px;
  }

  .wrapper-icon-mobile:nth-child(2) {
    height: 40px;
  }

  .icon-tlf,
  .icon-logo {
    height: 100%;
  }

  .wrapper-list-menu {
    width: 100%;
    background: #1d1d1e;
    height: 100vh;
    left: -100%;
    transition: left 0.2s ease-out 0.2s;
    position: relative;
  }

  .wrapper-list-menu.opened {
    left: 0%;
  }

  .menu-list-mobile {
    color: var(--duplex-dark-white, #ffffff);
    padding-top: 1rem;
  }

  .menu-list-mobile .menu-list-mobile-option {
    height: 48px;
    display: flex;
    align-items: center;
  }

  .menu-list-mobile-option a {
    padding: 11px 56px 11px 16px;
  }

  .menu-list-mobile-option a:hover {
    color: var(--duplex-dark-green, #99cc00);
    cursor: pointer;
  }

  @media only screen and (min-width: 834px) {
    .header-menu-mobile,
    .wrapper-list-menu {
      display: none;
    }

    .header-menu-wrapper {
      display: block;
      background-color: var(--duplex-dark-gray, #2a2a2a);
      color: var(--duplex-dark-white, #ffffff);
      height: 42px;
      display: flex;
      align-items: center;
      font-size: var(--duplex-text-size-xxxxl, 1.5rem);
    }

    .header-menu-wrapper > div {
      width: 50%;
    }

    .header-menu-tlf span {
      margin-left: 10%;
    }

    .header-menu-social ul {
      display: flex;
      justify-content: flex-end;
      margin-right: 10%;
    }

    .header-menu-social li:first-child {
      margin-right: 8px;
    }

    .header-menu-social img {
      width: 30px;
    }

    .menu-wrapper {
      display: flex;
      align-items: center;
      padding: 0 16px;
      margin-top: 4px;
      height: 67px;
      background-color: rgba(253, 253, 253, 0);
    }

    .menu-wrapper-list {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu-wrapper-list li {
      padding: 1.5rem;
      position: relative;
    }

    .menu-wrapper-list li a {
      color: var(--duplex-medium-black, #040404);
    }

    .menu-wrapper-logo {
      width: 18%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu-wrapper-logo img {
      width: 80%;
      max-width: 180px;
    }

    .menu-container-option-multiple::after {
      display: inline-block;
      content: "";
      margin-left: 5px;
      vertical-align: middle;
      border-top: 6px solid var(--duplex-dark-black, #1d1d1e);
      border-left: 6px solid transparent;
      border-right: 5px solid transparent;
      transition: transform 0.2s ease-in-out 0s;
    }

    .menu-container-option-multiple:hover:after {
      border-top: 0.35em solid var(--duplex-dark-green, #99cc00);
    }

    .menu-container-option-multiple .container-submenu {
      position: absolute;
      left: -35%;
      height: auto;
      width: 400px;
      flex-direction: column;
      align-items: flex-end;
      flex-wrap: wrap;
      box-shadow: var(--duplex-super-light-black, rgba(0, 0, 0, 0.2)) 0px 10px
        8px 0px;
      border-radius: 5px;
      padding: 16px;
      overflow: hidden;
      display: none;
      background-color: var(--duplex-light-white, #fdfdfd);
    }

    .menu-container-option-multiple:hover .container-submenu {
      display: block;
    }

    .menu-container-option-multiple:hover > a {
      color: var(--duplex-dark-green, #99cc00);
    }

    .container-submenu li {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 0px;
    }

    .container-submenu .container-submenu-option {
      color: var(--duplex-dark-green, #99cc00);
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      border-radius: 0.3rem;
    }

    .container-submenu-option:hover {
      background-color: var(--duplex-dark-green, #99cc00);
      color: white;
    }

    .container-submenu .container-submenu-option-img {
      width: 55px;
      height: 60px;
      margin-right: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 30px;
      border-radius: 2rem;
      background: white;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .container-submenu-option-img img {
      width: 30px;
    }
  }
`;

export { style };
