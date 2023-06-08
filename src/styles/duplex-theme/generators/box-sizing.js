import { css } from "lit-element";

const borderBoxSizingGenerator = (selector) => css`
  ${selector},
  ${selector}::before,
  ${selector}::after {
    box-sizing: border-box;
  }
`;

export { borderBoxSizingGenerator };
