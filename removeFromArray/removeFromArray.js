const removeFromArray = function(initialArray,...removalList) {
    let results = initialArray;
    for(let x = 0; x < results.length; x++){
        for(y = 0; y < removalList.length; y++){
            if (results[x] === removalList[y]){
                results.splice(x,1);
                //since our array decreases in size, so must the irriator
                x--;
                }
        }        
    }
return results;
}
module.exports = removeFromArray

