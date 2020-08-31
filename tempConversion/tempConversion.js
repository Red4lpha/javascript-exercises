function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
const ftoc = function(num) {
  let results = ((num-32)*(5/9));
  //rounding
  results = round(results, 1);
  return results;
}

const ctof = function(num) {
  let results = ((num*(9/5)+32));
  //rounding
  results = round(results, 1);
  return results;
}

module.exports = {
  ftoc,
  ctof
}
