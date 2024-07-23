function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

let array = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9];
let uniqueArray = removeDuplicates(array);

console.log(uniqueArray); 