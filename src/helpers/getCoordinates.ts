// converts from id location to array coordinates
export const getCoordinates = (idY: number, idX: number) => {
  const macroY = Math.floor((idY - 1) / 3) * 3;
  const microY = Math.floor((idX - 1) / 3);
  const y = macroY + microY;

  const macroX = Math.floor((idY - 1) % 3) * 3;
  const microX = Math.floor((idX - 1) % 3);
  const x = macroX + microX;

  return { x, y };
};
