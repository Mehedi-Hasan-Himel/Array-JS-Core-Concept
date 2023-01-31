function factorial(numbers) {
  let result = 1;
  for (let i = numbers; i >= 1; i--) {
    result *= i;
    console.log(i);
  }
   return result;
}

const fact = factorial(9);
console.log(`factorial of 9 : `, fact);
