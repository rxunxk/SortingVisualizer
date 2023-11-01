export const generateArray = (n: number): number[] => {
  const arr = [];
  while (n > 0) {
    arr.push(Math.floor(Math.random() * 999) + 1);
    n--;
  }
  return arr;
};

export const findLargest = (z: number[]): number => {
  let large = z[0];
  for (let i = 0; i < z.length; i++) {
    if (z[i] > large) {
      large = z[i];
    }
  }
  return large;
};
