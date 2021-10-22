const distance = (position1: number[], position2: number[]): number => {
  const [x1, y1] = position1;
  const [x2, y2] = position2;
  const ans = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return ans;
};

export default distance;
