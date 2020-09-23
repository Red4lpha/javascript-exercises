const palindromes = function(rawPalin) {
    let trimPalin = rawPalin.replace(/[ ,.!]/g, "");
    trimPalin = trimPalin.toLowerCase();
    //return trimPalin;
    for(i = 0; i < trimPalin.length; i++){
        if (trimPalin[i] != trimPalin[(trimPalin.length-1)-i]) {return false;} 
    }
    return true;  
}

module.exports = palindromes
