function getmaxNumber(numbers){
    let largest = numbers[0];
    for (let i=0;i<numbers.length;i++){
        const element = numbers[i];
        if(element>largest){
            largest=element;
        }
    }
    return largest;
}

let numberArray = [34,75,21,43,90,65,87,66];
let largestNumberIs = getmaxNumber(numberArray);
console.log(largestNumberIs);