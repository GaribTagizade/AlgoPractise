function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
function sumOfPrimes(numbers) {
    let sum = 0; 

    for (let num of numbers) { 
        if (isPrime(num)) { 
            sum += num; 
        }
    }
    return sum; 
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [11, 13, 17, 19, 23, 29];

console.log(sumOfPrimes(array1));
console.log(sumOfPrimes(array2));