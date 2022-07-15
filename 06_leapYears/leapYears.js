const leapYears = function(theYear) {
    if (theYear % 400 == 0){
        return true;
    }
    else if( theYear % 4 == 0 && theYear % 100 != 0){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
