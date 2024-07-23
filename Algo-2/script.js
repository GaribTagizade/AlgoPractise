function ucreqemlieded() {
    let sum = 0;
    for (let i = 100; i < 1000; i++) {
        if (i%10 === 0) {
            sum +=i
        }
    }
    return sum;
}
console.log(ucreqemlieded());