import { breakPoints } from "./breakpoints";

export const gutterWidths = new Map();
export const containerMaxWidths = new Map();

export const gutter0 = 16;
export const gutter600 = 16;
export const gutter720 = 24;
export const gutter840 = 24;
export const gutter1280 = 24;

gutterWidths.set("0", gutter0);
gutterWidths.set("600", gutter600);
gutterWidths.set("720", gutter720);
gutterWidths.set("840", gutter840);
gutterWidths.set("1280", gutter1280);

containerMaxWidths.set(
  "600",
  breakPoints.get("600") - gutterWidths.get("600") * 2
);
containerMaxWidths.set(
  "700",
  breakPoints.get("720") - gutterWidths.get("720") * 2
);
containerMaxWidths.set(
  "840",
  breakPoints.get("840") - gutterWidths.get("840") * 2
);
containerMaxWidths.set(
  "1280",
  breakPoints.get("1280") - gutterWidths.get("1280") * 2
);

export const columns = 12;
