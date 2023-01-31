function factorialReverse(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result *= i;
    i--;
  }
  return result;
}


const result = factorialReverse(6)
console.log(result);