//calculate the sum of numbers within an array

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
    let numbers = [23, 72, 81, 39, 21, 19, 72]  

    console.log(sumArray(numbers))