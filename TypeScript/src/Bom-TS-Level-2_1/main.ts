const countdown = document.querySelector("#countdown") as HTMLSpanElement;
let counter: number = 10;

const interval = setInterval(() => {
    if (counter > 0) {
        counter--;
        countdown.textContent = String(counter);
    } else {
        clearInterval(interval);
        document.body.replaceChildren("");
    }
}, 1000);
