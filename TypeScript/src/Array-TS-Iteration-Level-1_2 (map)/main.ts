const drinks = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];
const upperDrinks: string[] = drinks.map((drink) => {
    return "I like " + drink.toUpperCase();
});

console.log(upperDrinks);
