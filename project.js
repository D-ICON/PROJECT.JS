function calculateSum(sum) {
    return sum.reduce((a, b) => a + b, 0);
  }
  const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));

