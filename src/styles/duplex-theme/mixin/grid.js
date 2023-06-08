const createNumArray = (start = 0, end) => {
  let result = [];
  for (let i = start; i <= end; i += 1) {
    result.push(i);
  }

  return result;
};

export const loopColumnsMixin = ({ start = 0, end, contentFn }) =>
  createNumArray(start, end)
    .map((colNr) => contentFn(colNr))
    .join("");
