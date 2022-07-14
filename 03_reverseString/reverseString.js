const reverseString = function(string) {
    let revStr = "";
    for (let i = 0; i < string.length; i++) {
        revStr += string[string.length-1-i];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
