// sort an array of numbers in decending order

function sortNumberDescending(arr){
    return arr.slice().sort((a, b) => b - a); 
}

const numbers = [6, 7, 9, 3, 1, 2, 8];

console.log(sortNumberDescending(numbers))