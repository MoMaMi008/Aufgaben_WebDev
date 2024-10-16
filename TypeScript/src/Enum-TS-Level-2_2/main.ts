enum Colors {
    gelb = "#FFFF00",
    orange = "#FFA500",
    pink = "#FFC0CB",
    blau = "#0000FF",
    lila = "#800080",
    grau = "#808080",
}

const colors: string[] = [Colors.gelb, Colors.orange, Colors.pink, Colors.blau, Colors.lila, Colors.grau];

function getKeyByValue(enumObj: any, value: string): string {
    return Object.keys(enumObj).find((key) => enumObj[key] === value);
}

for (let i = 0; i < colors.length; i++) {
    const button = document.createElement("button");
    document.body.appendChild(button);

    button.textContent = getKeyByValue(Colors, colors[i]);
    button.style.backgroundColor = colors[i];
}
