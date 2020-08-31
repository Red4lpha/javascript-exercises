const leapYears = function(year) {
    //this is a leap year...unless..
    if ((year%4) == 0 ){
        //not a leap year..unless
        if ((year%100) == 0){
            //a leap year
            if ((year%400)==0) {return true;}
            else return false;
        }
        return true;
    }
    else return false;
}

module.exports = leapYears
