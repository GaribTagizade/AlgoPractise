function reverseString(word) {
    // Tərsdən yazmaq üçün boş bir string yaradılır
    let reversed = "";

    // Sözü sonuncu hərfdən başlayaraq tərsinə oxuyuruq
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i]; // Hər hərfi tərsinə əlavə edirik
    }

    // Tərsinə yazılmış sözü geri qaytarırıq
    return reversed;
}

// Funksiyanı yoxlamaq üçün nümunələr
const word1 = "salam";
console.log(reverseString(word1)); // "malas"

const word2 = "JavaScript";
console.log(reverseString(word2)); // "tpircSavaJ"
