let getraenke: string[] = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];
const ausgabe = document.createElement("ul");
document.body.appendChild(ausgabe);

const myDrinks = () => {
    getraenke.sort().forEach((getraenk) => {
        console.log(getraenk);
        const element = document.createElement("li");
        ausgabe.appendChild(element);
        element.innerHTML = `${getraenk}`;
    });
};

myDrinks();
