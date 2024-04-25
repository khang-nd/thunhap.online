export const toArray = <T>(input: T | T[]) => {
  return Array.isArray(input) ? input : [input];
};

export const emptyArray = (length: number) => {
  return Array.from({ length }, (_, i) => i);
};
