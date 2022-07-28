const fibonacci = function(theOne) {
    if (theOne < 0) {
        return "OOPS";
    }
    if (theOne.typeof == "string") {
        return 1;
    }
    if (theOne == 1) {
        return 1;
    }
    if (theOne == 2) {
        return 1;
    }
    if (theOne > 2) {
        return fibonacci(theOne - 1) + fibonacci(theOne - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
