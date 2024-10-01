const salesMonth: number = Math.ceil(Math.random() * 12);
const totalSales: number = Math.ceil(Math.random() * 9000 + 1000);

let month: string = "";
let sales: string = "";

switch (salesMonth) {
    case 1:
    case 2:
    case 3:
        month = "1. Quartal";
        break;
    case 4:
    case 5:
    case 6:
        month = "2. Quartal";
        break;
    case 7:
    case 8:
    case 9:
        month = "3. Quartal";
        break;
    case 10:
    case 11:
    case 12:
        month = "4. Quartal";
        break;
    default:
        break;
}

switch (true) {
    case totalSales >= 1000 && totalSales <= 2500:
        sales = "schlecht";
        break;
    case totalSales >= 2501 && totalSales <= 5000:
        sales = "mittelmäßig";
        break;
    case totalSales >= 5001 && totalSales <= 7500:
        sales = "hoch";
        break;
    case totalSales >= 7501 && totalSales <= 10000:
        sales = "unglaublich";
        break;
    default:
        break;
}

console.log(`Im ${month} war der Umsatz ${sales}.`);
