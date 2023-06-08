import { css } from "lit-element";
const styleIconSvg = css`
  .hamburger__icon {
    width: 23px;
    height: 20px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  .hamburger__icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: var(--duplex-dark-green);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  /* Icon 3 */

  .hamburger__icon span:nth-child(1) {
    top: 0px;
  }

  .hamburger__icon span:nth-child(2),
  .hamburger__icon span:nth-child(3) {
    top: 9px;
  }

  .hamburger__icon span:nth-child(4) {
    top: 18px;
  }

  .hamburger__icon.open span:nth-child(1) {
    top: 9px;
    width: 0%;
    left: 50%;
  }

  .hamburger__icon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .hamburger__icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .hamburger__icon.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;

export { styleIconSvg };
