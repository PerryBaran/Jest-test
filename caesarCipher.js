const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');    //array of letters

function cipher(string, offset) {                           //can encrypt a string or decrypt by putting the negative of a known offset
    const stringArray = string.split('');                   //array from string
    const encryptedArray = [];
    for (i = 0; i < stringArray.length; i++) {              //loops through stringArray
        for (n = 0; n < alphabet.length; n++) {             //compares stringArray to alphabet
            if (stringArray[i] === alphabet[n]) {           //if the character is in the the alphabet
                let newValue = n + offset;                  //offset it by a specified value
                while (newValue >= alphabet.length) {       //if this value is large the the alphabet length
                    newValue = newValue - alphabet.length   //subtract the alphabet length until it isn't
                } while (newValue < 0) {                    //if this value is lower than 0
                    newValue = newValue + alphabet.length   //add alphabet length until it isn't
                } encryptedArray.push(alphabet[newValue])   //add this value to a new array
                break                                       //and return to this outer loop
            } else if (n === alphabet.length - 1) {         //if this value is not in the alphabet
                encryptedArray.push(stringArray[i])         //add the value to the encrypted array
            }
        }
    }
    return encryptedArray.join('');                         //return the encrypted string
}

module.exports = cipher;