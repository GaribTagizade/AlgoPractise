function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null;
    }

    let max = arr[0];

    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    
    return max;
}

const numbers = [1, 23, 45, 67, 89, 34, 23];
console.log(findMaxNumber(numbers)); // 89

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // null
