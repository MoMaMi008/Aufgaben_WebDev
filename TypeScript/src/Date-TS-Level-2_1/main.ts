const actDate = new Date();
console.log(actDate);

const day = actDate.getDate().toString().padStart(2, "0");
const month = actDate.getMonth().toString().padStart(2, "0");
const year = actDate.getFullYear();

console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);

const hoursLocal = actDate.getHours().toString().padStart(2, "0");
const minutesLocal = actDate.getMinutes().toString().padStart(2, "0");

const hoursUTC = actDate.getUTCHours().toString().padStart(2, "0");
const minutesUTC = actDate.getUTCMinutes().toString().padStart(2, "0");

console.log(`Local Time: ${hoursLocal}:${minutesLocal} Uhr`);
console.log(`UTC Time: ${hoursUTC}:${minutesUTC} Uhr`);
