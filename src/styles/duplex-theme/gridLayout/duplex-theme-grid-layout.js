import { unsafeCSS } from "lit-element";
import { borderBoxSizingGenerator } from "../generators/box-sizing";
import {
  mediaBreakpointUpGenerator,
  mediaBreakpointUpDedupeGenerator,
} from "../generators/breakpoints";
import { breakPoints } from "../valuesTheme/breakpoints";
import { columns, containerMaxWidths, gutterWidths } from "../valuesTheme/grid";

export const gridComponentStyle = unsafeCSS(`
  ${[".container", ".container-fluid", ".row", ".col", '[class^="col-"]']
    .map((selector) => borderBoxSizingGenerator(unsafeCSS(selector)).cssText)
    .join("")}

  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  ${mediaBreakpointUpDedupeGenerator({
    dedupableMap: gutterWidths,
    breakPoints,
    contentFn: (bp) => `
      .container {
        padding-right: ${gutterWidths.get(bp)}px;
        padding-left: ${gutterWidths.get(bp)}px;
      }
    `,
  })}

  ${Array.from(containerMaxWidths)
    .map(([bp]) =>
      mediaBreakpointUpGenerator({
        name: bp,
        breakPoints,
        contentFn: () => `
          .container {
            max-width: ${containerMaxWidths.get(bp)}px
          }
        `,
      })
    )
    .join("")}

  .container-fluid {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  ${mediaBreakpointUpDedupeGenerator({
    dedupableMap: gutterWidths,
    breakPoints,
    contentFn: (bp) => `
      .container-fluid {
        padding-right: ${gutterWidths.get(bp)}px;
        padding-left: ${gutterWidths.get(bp)}px;
      }
     `,
  })}

  .row {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  ${mediaBreakpointUpDedupeGenerator({
    dedupableMap: gutterWidths,
    breakPoints,
    contentFn: (bp) => `
      .row {
        margin-right: -${gutterWidths.get(bp) / 2}px;
        margin-left: -${gutterWidths.get(bp) / 2}px;
      }
    `,
  })}

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  .no-gutters > .col, .no-gutters > [class^="col-"] {
    padding-right: 0;
    padding-left: 0;
  }

  .col, [class^="col-"] {
    position: relative;
    width: 100%;
    min-height: 1px;
  }

  ${mediaBreakpointUpDedupeGenerator({
    dedupableMap: gutterWidths,
    breakPoints,
    contentFn: (bp) => `
      .col, [class^="col-"] {
          padding-right: ${gutterWidths.get(bp) / 2}px;
          padding-left: ${gutterWidths.get(bp) / 2}px}`,
  })}

  ${Array.from(breakPoints)
    .map(([bp]) => {
      const infix = mediaBreakpointNameGenerator({ bp, breakPoints });
      return mediaBreakpointUpGenerator({
        name: bp,
        breakPoints,
        contentFn: () => `
            .col${infix} {
              -ms-flex-preferred-size: 0;
              flex-basis: 0;
              -ms-flex-positive: 1;
              flex-grow: 1;
              max-width: 100%;
            }

            .col${infix}-auto {
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              width: auto;
              max-width: none;
            }

            ${loopColumnsMixin({
              start: 1,
              end: columns,
              contentFn: (colNr) => `
                .col${infix}-${colNr} {
                  -ms-flex: 0 0 ${(colNr / columns) * 100}%;
                  flex: 0 0 ${(colNr / columns) * 100}%;
                  max-width: ${(colNr / columns) * 100}%;
                 }
                `,
            })}
          `,
      });
    })
    .join("")}

`);
