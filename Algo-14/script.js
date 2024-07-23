function areAllDivisible(array,number){
    for(let i=0;i<array.length;i++){
        if(array[i]%number==0){
            return true;
        }
        else{
            return false;
        }
    }
}
let array1=[10,20,30,40];
let number1=10;
let array2=[17,25,37,40];
let number2=10;
console.log(areAllDivisible(array1,number1));
console.log(areAllDivisible(array2,number2));