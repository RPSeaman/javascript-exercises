const removeFromArray = function(array, ...removes) {
    let myArray = array;
    for (let i = 0; i < removes.length; i++) {
        var theIDX = myArray.indexOf(removes[i]);
        if (theIDX == -1){
            myArray = myArray;
        }
        else{
            myArray.splice(theIDX, 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
