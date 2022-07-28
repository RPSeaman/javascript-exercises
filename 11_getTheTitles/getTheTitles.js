const getTheTitles = function(theArray) {
    const theTiles = theArray.map(function(element){
        return element.title;
    });
    return theTiles;
};

// Do not edit below this line
module.exports = getTheTitles;
