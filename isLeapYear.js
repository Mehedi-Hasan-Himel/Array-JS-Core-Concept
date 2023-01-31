function isLeapYear(year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return true;
  } else {
    return false;
  }
}
   
const check2000 = isLeapYear(1952);
console.log(check2000);


const isMyYearLeapYear = isLeapYear(1900);
console.log(`my year: `,isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1280);
console.log(`her year: `, isHerYearLeapYear);

