function sumOfNumbersDivisibleBy7And8() {
    let sum = 0;

    for (let i = 100; i <= 999; i++) {
        if (i % 7 === 0 && i % 8 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumOfNumbersDivisibleBy7And8());

