function countVowels(word) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++; 
        }
    }

    return count;
}

const word1 = "salam";
console.log(countVowels(word1)); // 2

const word2 = "JavaScript";
console.log(countVowels(word2)); // 3
