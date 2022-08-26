const ftoc = function(fah) {
  let cel = (fah - 32) * 5/9;
  let celRound = Math.round(cel * 10) / 10;
  return celRound;
};

const ctof = function(cel) {
  let fah = (cel * 9/5) + 32;
  let fahRound = Math.round(fah * 10) / 10;
  return fahRound;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
