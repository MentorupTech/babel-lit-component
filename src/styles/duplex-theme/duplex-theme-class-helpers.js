import { css } from "lit-element";

const themeClass = css`
  /**Titles */
  .duplex-title-blue {
    color: var(--duplex-medium-light-blue, rgba(24, 37, 170, 0.8));
    font-size: var(--duplex-text-size-xxxxxl, 1.625rem);
    margin-bottom: 1rem;
  }

  .duplex-title-green {
    color: var(--duplex-medium-green, rgba(153, 204, 0, 0.9));
    font-size: var(--duplex-text-size-xxxxxl, 1.625rem);
    margin-bottom: 1rem;
  }

  .duplex-first-title-white {
    color: #f9f9ff;
    position: relative;
    text-align: center;
    top: -60%;
    font-size: 1.5rem;
    font-weight: 400;
  }

  /**Class container */
  .duplex-container-padding-content {
    position: relative;
    left: 0;
    padding: 0 1rem;
    color: var(--duplex-dark-gray, #2a2a2a);
    top: 60%;
  }

  /**Buttons */
  .duplex-primary-button {
    height: 48px;
    width: 80%;
    background-color: var(--duplex-dark-green, #99cc00);
    border-color: var(--duplex-dark-green, #99cc00);
    margin: 16px 0;
    text-decoration: none;
    color: white;
    border-radius: 10px;
    font-size: var(--duplex-text-size-xl, 1.375rem);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .duplex-primary-button:hover {
    background-color: var(--duplex-super-dark-green, #86b300);
  }
`;

export { themeClass };
