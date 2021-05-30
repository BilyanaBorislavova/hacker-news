const increaseNumber =(
  startNumber: number,
  numberToIncrementWith: number,
  setStartNumber: (arg: number) => void,
  timeoutInMs: number,
  maxNumberToIncrementTo: number,
) => {
  const updatedNumber = startNumber + numberToIncrementWith;

  const timeout = setTimeout(() => setStartNumber(updatedNumber), timeoutInMs);

  if (updatedNumber > maxNumberToIncrementTo) {
    return clearTimeout(timeout);
  }
};

export { increaseNumber };
