/**
 * Helper function that returns the proper infix nam for breakpoint
 * @param {String} bp
 * @param {Map} breakpoints - list of existing breakpoints
 * @returns {string}
 */
export const mediaBreakpointNameGenerator = ({ bp, breakPoints }) => {
  const bpName = `\\@${bp}`;
  return breakPoints.get(bp) ? `-${bpName}` : "";
};

export const mediaBreakpointUpDedupeGenerator = ({
  dedupableMap,
  breakPoints,
  contentFn,
}) => {
  const handle = new Set();

  return Array.from(dedupableMap)
    .map(([bp]) => {
      if (!handle.has(dedupableMap.get(bp))) {
        handle.add(dedupableMap.get(bp));
        return mediaBreakpointUpGenerator({
          name: bp,
          breakPoints,
          contentFn: () => contentFn(bp),
        });
      }
      return "";
    })
    .join("");
};

/**
 * Generate media break point dynamic
 * @param name
 * @param breakPoints
 * @param contentFn
 * @returns {*}
 */
export const mediaBreakpointUpGenerator = ({
  name,
  breakPoints,
  contentFn,
}) => {
  const min = breakPoints.get(name) || null;

  return min
    ? `
    @media (min-width: ${min}px) {
      ${contentFn()}
    }
  `
    : contentFn();
};
