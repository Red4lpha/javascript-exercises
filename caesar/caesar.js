const caesar = function(cypher, shiftFactor) {
    let newCyph = "";
    let place = 0;
    let temp = 0;
    //if the shift factor is beyond 26/-26
    if(shiftFactor > 26){
        shiftFactor = shiftFactor%26;
    }
    if(shiftFactor > -26){
        shiftFactor = shiftFactor%-26;
    }
    for(i = 0; i < cypher.length; i++){
        place = cypher.charCodeAt(i);
        //If the character is uppercase
        if(place >= 65 && place <= 90){
            //if the shifting will cause it to overflow pass Z
            if(place + shiftFactor > 90){
                temp = (place+shiftFactor) - 90;
                newCyph += String.fromCharCode(64 + temp);
                continue;  
            }
            if(place + shiftFactor < 65){
                temp = (65 - (place+shiftFactor));
                newCyph += String.fromCharCode(91 - temp);
                continue;  
            }
            newCyph += String.fromCharCode(place+shiftFactor);
        }
        //If the character is lowercase
        else if(place >= 97 && place <= 122){
            //if the shifting will cause it to overflow pass Z
            if(place + shiftFactor > 122){
                temp = (place+shiftFactor) - 122;
                newCyph += String.fromCharCode(96 + temp);
                continue;  
            }
            if(place + shiftFactor < 97){
                temp = (97 - (place+shiftFactor));
                newCyph += String.fromCharCode(123 - temp);
                continue;  
            }
            newCyph += String.fromCharCode(place+shiftFactor);
        }
        else {newCyph += cypher[i];}
    }
    return newCyph;
}

module.exports = caesar
