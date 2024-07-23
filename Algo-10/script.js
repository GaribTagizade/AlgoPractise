function range(start,end){
    let array =[]
    for(let i=start;i<=end;i++){
        array.push(i);
    }
    return array;
}

let start=5;
let end=9;
let resultArray = range(start, end);
console.log(resultArray);

