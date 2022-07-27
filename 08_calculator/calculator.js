const add = function() {
  count = 0;
  for (i=0; i<arguments.length; i++) {
    count += parseInt(arguments[i]);
  };
  return count;
};

const subtract = function(v1, v2) {
  count = 0;
  if (arguments.length === 0) {
    return 0;
  }
  for (i=0; i<arguments.length; i++) {
    if (i==0) {
      count += parseInt(arguments[i]);
    } else {
      count -= parseInt(arguments[i]);
    }
  };
  return count;
};

const sum = function(array) {
	count = 0;
  for (i=0; i<array.length; i++) {
    count += parseInt(array[i]);
  }
  return count;
};

const multiply = function(array) {
	count = 1;
  for (i=0; i<array.length; i++) {
    count = count * parseInt(array[i]);
  }
  return count;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	count = 1;
  for (i=1; i<=num; i++) {
    count = count * i;
  }
  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
