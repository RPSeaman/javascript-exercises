const sumAll = function(intOne, intTwo) {
    let theCount = 0;
    let starter = intOne;
    let ender = intTwo;
    if (intOne > intTwo){
            starter = intTwo;
            ender = intOne;
    }
    else if (intOne < 0 || intTwo < 0 || typeof intOne != "number" || typeof intTwo != "number"){
        return "ERROR"
    }

    for (let i = starter; i <= ender; i++){
        theCount += i;
    }

    return theCount;
}

// Do not edit below this line
module.exports = sumAll;
