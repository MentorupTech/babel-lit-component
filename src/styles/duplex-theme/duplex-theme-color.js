import { css } from "lit-element";

const themeColor = css`
  :host,
  html {
    /** CORE PALETE */
    /** Green */
    --duplex-super-dark-green: #86b300;
    --duplex-dark-green: #99cc00;

    /** Blue */
    --duplex-dark-blue: #1825aa;

    /** White */
    --duplex-dark-white: #ffffff;
    --duplex-medium-white: #f9f9ff;
    --duplex-light-white: #fdfdfd;
    --duplex-super-light-white: #eff5f5;

    /** Gray */
    --duplex-dark-gray: #2a2a2a;
    --duplex-medium-gray: #50596c;

    /** Black */
    --duplex-dark-black: #1d1d1e;
    --duplex-medium-black: #040404;

    /** Yellow */
    --duplex-dark-yellow: #f3f7cc;

    /** SECONDARY PALETE */
    /** Green */
    --duplex-green: #c4d600;
    --duplex-medium-green: rgba(153, 204, 0, 0.9);

    /** Blue */
    --duplex-medium-blue: rgba(24, 37, 170, 0.9);
    --duplex-medium-light-blue: rgba(24, 37, 170, 0.8);
    --duplex-light-blue: rgba(24, 37, 170, 0.6);

    /** white */
    --duplex-medium-light-white: rgba(255, 255, 255, 0.6);

    /** Gray */
    --duplex-light-gray: rgba(52, 52, 54, 0.8);

    /** Black */
    --duplex-medium-light-black: rgba(0, 0, 0, 0.5);
    --duplex-light-black: rgba(0, 0, 0, 0.8);
  }
`;

export { themeColor };
