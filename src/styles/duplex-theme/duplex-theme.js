import { fonts } from "./duplex-theme-font-family";
import { themeColor } from "./duplex-theme-color";
import { fontSize } from "./duplex-theme-text-size";
import { normalize } from "./duplex-theme-normalize";
import { themeClass } from "./duplex-theme-class-helpers";

const shareStyle = [normalize, fonts, themeColor, fontSize, themeClass];

export { shareStyle };
