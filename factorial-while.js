function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result *= num;
    num++;
  }
  return result;
}


const result = factorial(6)
console.log(result);