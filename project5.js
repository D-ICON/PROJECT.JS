//create a function that reverse an array

function reverseArray(arr){
    return arr.slice().reverse();
}

const names = ['ola', 'ade', 'kunle', 'wale', 'tope'];

console.log(reverseArray(names));