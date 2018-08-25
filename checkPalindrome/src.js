/*
Given the string, check if it is a palindrome.
A palindrome is a string that reads the same left-to-right and right-to-left.
Example:
-For inputString = "aabaa", the output should be
 checkPalindrome(inputString) = true;
-For inputString = "abac", the output should be
 checkPalindrome(inputString) = false;
-For inputString = "a", the output should be
 checkPalindrome(inputString) = true.
*/

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
