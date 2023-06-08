import { html } from "lit-html";
import "../src/duplex-header-menu";
import {
  logo,
  iconTlf,
  menuMobile,
  menu,
  phoneNumber,
  menuSocial,
} from "../mocks/lit-header-menu-data-mock.js";

export default {
  title: "Welcome",
};

export const Welcome = () => html`
  <duplex-header-menu
    .logo="${logo}"
    .icontlf="${iconTlf}"
    .menuMobile="${menuMobile}"
    .menu="${menu}"
    phoneNumber="${phoneNumber}"
    .menuSocial="${menuSocial}"
  ></duplex-header-menu>
`;
