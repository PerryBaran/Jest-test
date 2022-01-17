function reverseString(string) {
    const stringToArray = string.split(""); //turns string into an array
    const reverseArray = stringToArray.reverse(); //reverses array
    const reversedString = reverseArray.join(""); //turns array into a string
    return reversedString;
}
    module.exports = reverseString;