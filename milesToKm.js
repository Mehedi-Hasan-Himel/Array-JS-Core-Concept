function milesToKm(miles) {
   const km = miles * 1.60934;
   return km;
}

const myTrip = 100;
const myTripInKm = milesToKm(myTrip);
console.log(myTripInKm);
