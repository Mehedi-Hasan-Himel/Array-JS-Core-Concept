// Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

function hourToMinutes(hour) {
  const Minutes = hour * 60;
  return Minutes;
}

const Time = 6;
const TimeInMinutes = hourToMinutes(Time);
console.log(Time, "Hour = ", TimeInMinutes, "Minutes");
