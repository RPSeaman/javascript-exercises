const palindromes = function (string) {
    var string = string.toLowerCase();
    var cleanString = "";
    for (var i = 0; i < string.length; i++) {
        if (/^[a-zA-Z]+$/.test(string[i]) == true) {
            cleanString += string[i];
        }
    }
    var backwards = "";
    for (var i = cleanString.length-1; i >= 0; i--) {
        backwards = backwards.concat(cleanString[i]);
    }
    //return backwards;
    return backwards === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
