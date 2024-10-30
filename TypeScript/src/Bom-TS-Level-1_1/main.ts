window.setTimeout(() => {
    console.log("Dieser Text erscheint nach einer Sekunde!");
}, 1000);

let counter: number = 10;

setTimeout(() => {
    console.log("Start: Warten für 3 Sekunden...");

    const interval = window.setInterval(() => {
        switch (counter) {
            case 10:
            case 8:
            case 7:
            case 6:
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
                console.log(counter);
                counter--;
                break;
            case 9:
                console.log(counter);
                console.log("Erledigt, du hast 3 Sekunden verschwendet.");
                counter--;
                break;
            case 0:
                console.log("Endlich feierabend!");
                clearInterval(interval);
                break;
            default:
                break;
        }
    }, 1000);
}, 3000);
