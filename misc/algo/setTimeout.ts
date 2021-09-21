const timeout = (fn: Function, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, ms);
  });
};

export default timeout;
