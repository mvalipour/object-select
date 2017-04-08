module.exports = function (obj, ...keys) {
  const res = {};
  const apply = (k) => k instanceof Array ?
      k.forEach(apply) :
      res[k] = obj[k];

  apply(keys);
  return res;
};
