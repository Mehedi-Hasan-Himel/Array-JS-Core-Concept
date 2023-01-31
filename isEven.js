function isEven(number) {
   const reminder = number % 2;
   if (reminder === 0) {
      return true
   } else {
      return false
   }
}

const myNumberIsEven = isEven(3);
console.log(myNumberIsEven);

const herNumberIsEven = isEven(4);
console.log(herNumberIsEven);
