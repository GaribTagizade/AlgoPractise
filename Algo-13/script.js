function isPalindrome(str) {
    str = str.toLowerCase();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let string1 = "Madam";
let string2 = "Hello";

console.log(isPalindrome(string1)); 
console.log(isPalindrome(string2));