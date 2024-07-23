function findMissingNumber(array) {
    array.sort((a, b) => a - b);
    
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] !== array[i] + 1) {
            return array[i] + 1;
        }
    }
}
let array = [1, 2, 3, 5, 6, 7, 8];
let missingNumber = findMissingNumber(array);

console.log(missingNumber); 