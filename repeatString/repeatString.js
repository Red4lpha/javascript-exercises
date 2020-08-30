const repeatString = function(word, repeatNum) {
    if (repeatNum === 0) { return '';} 
    else if (repeatNum < 0) {return 'ERROR';}
    else if (repeatNum > 0){
        let result = word;
        for(let i = 0; i < repeatNum-1; i++){
            result += word;
        }
        return result;
    }

}

module.exports = repeatString
