const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const datesArr: Date[] = [];
datesArr.push(date1, date2, date3, date4);

for (let i = 0; i < datesArr.length; i++) {
    const element = datesArr[i];
    const pElement = document.createElement("p");
    pElement.textContent = String(element);
    document.body.appendChild(pElement);
}
