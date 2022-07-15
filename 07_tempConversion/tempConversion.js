const ftoc = function(theFTemp) {
  let cTemp = (theFTemp-32) * (5/9);
  let cTempR = Math.round(cTemp * 10) /10;
  return cTempR
};

const ctof = function(theCTemp) {
  let fTemp = (theCTemp * (9/5)) + 32;
  let fTempR = Math.round(fTemp * 10) /10;
  return fTempR
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
