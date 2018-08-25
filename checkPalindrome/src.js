//Given the string, check if it is a palindrome.
//A palindrome is a string that reads the same left-to-right and right-to-left.

function checkPalindrome(inputString) {
    let j = inputString.length - 1;
    for (let i = 0; i < inputString.length/2; i++) {
        if (inputString[i] != inputString[j]) {
            return false;
        }
        j--;
    }
    return true;
}
