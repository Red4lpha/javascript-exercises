const getTheTitles = function(objArray) {
    let first = objArray[0];
    let second = objArray[1];
    let temp = [];
    temp[0] = first.title; 
    temp[1] = second.title; 
    return temp;
}

module.exports = getTheTitles;
