// create a function that filters out negative numbers

function filterNegativeNumbers(arr){
    return arr.filter(num => num <= 0);
}
let numbers = [2, 5, -3, -1, -9, 4, 6]
let positiveNumbers = (filterNegativeNumbers(numbers));

console.log(positiveNumbers)