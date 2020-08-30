const reverseString = function(word) {
    let wLength = word.length;
    let result = '';
    for(let i = 0; i < wLength; i++){
        result += word.charAt(wLength-(i+1));
    }
    return result;
}

module.exports = reverseString
