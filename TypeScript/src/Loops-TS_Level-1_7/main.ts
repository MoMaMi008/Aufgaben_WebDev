let counter: number = 1;

do {
    const output = document.createElement("p");
    document.body.appendChild(output);
    output.textContent = `The Counter is: ${counter}`;
    counter++;
} while (counter <= 5);
