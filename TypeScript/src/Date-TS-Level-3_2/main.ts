import { differenceInHours, differenceInSeconds, differenceInYears, format } from "date-fns";

const dateNow = new Date();
const dateOld = new Date(0);

console.log("Vergangene Jahre seit 1970: ", differenceInYears(dateNow, dateOld));
console.log("Vergangene Stunden seit 1970: ", differenceInHours(dateNow, dateOld));
console.log("Vergangene Sekunden seit 1970: ", differenceInSeconds(dateNow, dateOld));

const myBirthday = new Date(2000, 11, 14);

console.log(format(myBirthday, "dd.MM.yyyy kk:mm:ss"));
console.log(format(myBirthday, "dd.MM.yyyy kk:mm"));
console.log(format(myBirthday, "dd.MM.yyyy"));
console.log(format(myBirthday, "dd. MMMM yyyy"));
console.log(format(myBirthday, "kk:mm"));
console.log(format(myBirthday, "eeee"));
console.log(format(myBirthday, "MMMM"));
console.log(format(myBirthday, "dd"), "des", format(myBirthday, "MMMM"), "im Jahre des Herrn", format(myBirthday, "yyyy"));
