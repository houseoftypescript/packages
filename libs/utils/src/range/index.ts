export const range = (min: number, max?: number) => {
  let startNumber = 0;
  let arrayLength = min;
  if (max !== undefined && max !== null && max > min) {
    arrayLength = max - min;
    startNumber = min;
  }
  return [...Array(arrayLength).keys()].map(
    (number: number) => startNumber + number
  );
};

export default range;
