async function throwTimeout(fn, cb) {
  const t = setTimeout(() => {
    cb(new Error());
  }, 1000);

  const d = fn(); // heavy operation

  if (d.finally) {
    d.finally?.(() => clearTimeout(t));
    await d;
  } else {
    clearTimeout(t);
  }

  return d;
}

module.exports = throwTimeout;
