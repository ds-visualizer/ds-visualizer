const timeOut = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, ms);
  });
};

export default timeOut;
