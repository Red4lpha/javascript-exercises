const sumAll = function(firstNum, secondNum) {
    //we dont allow negative numbers
    if ((firstNum || secondNum) < 0){return 'ERROR'; } 
    else if ((typeof firstNum && typeof secondNum) === "number" ) {
    
        //sorts the higher number to first position
        sortNumbers = function(firstNum, secondNum){
            if (firstNum >= secondNum)  { return [firstNum, secondNum] }
            else { return [secondNum, firstNum]; }
        }
        let sorted = sortNumbers(firstNum, secondNum);
        let biggerNum = sorted[0];
        let smallerNum = sorted[1];
        let sum = 0;
        //if (biggerNum == smallerNum) {return }
        while (smallerNum <= biggerNum) {
            sum += smallerNum;
            smallerNum++;
        } 
        return sum;
    }
    //all else return ERROR
    else return 'ERROR'; 


}

module.exports = sumAll
