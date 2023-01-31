// 1 * 2 * 3 * 4 * 5 * 6 * 7

function multiOfNumbers(numbers) {
  let result = 1;
  for (let i = 1; i <= numbers; i++) {
    result *= i;
  }
   return result;
}

const result = multiOfNumbers(9)
console.log(result);