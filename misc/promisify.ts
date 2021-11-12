const promisify = async (cb: () => any) => {
  return cb();
};

export default promisify;
