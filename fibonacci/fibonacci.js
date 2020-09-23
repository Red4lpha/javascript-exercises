const fibonacci = function(place) {
    if (place < 1){return "OOPS";}
    let prev = 0;
    let current = 1;
    let temp = 0;
    for (i = 2;i <= place; i++){
        temp = prev + current;
        prev = current;
        current = temp;
    }
    return current;
}

module.exports = fibonacci
