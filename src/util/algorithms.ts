export const findLargest = (z: number[]): number => {
  let large = z[0];
  for (let i = 0; i < z.length; i++) {
    if (z[i] > large) {
      large = z[i];
    }
  }
  return large;
};
