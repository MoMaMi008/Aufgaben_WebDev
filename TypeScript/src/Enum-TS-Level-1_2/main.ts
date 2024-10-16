enum PizzaSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
    Familie = "familie",
}
enum PizzaIngredients {
    Käse = "käse",
    Salami = "salami",
    Schinken = "schinken",
    Champignons = "champignons",
    Zwiebel = "zwiebel",
    Peperonie = "peperonie",
    Thunfisch = "thunfisch",
    Tomaten = "tomaten",
    Mais = "mais",
}

type Pizza = {
    sizze: PizzaSize;
    ingredients: PizzaIngredients[];
};

const pizza1: Pizza = {
    sizze: PizzaSize.Small,
    ingredients: [PizzaIngredients.Käse, PizzaIngredients.Salami],
};

const pizza2: Pizza = {
    sizze: PizzaSize.Large,
    ingredients: [PizzaIngredients.Käse, PizzaIngredients.Peperonie, PizzaIngredients.Schinken],
};

const pizza3: Pizza = {
    sizze: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Käse, PizzaIngredients.Thunfisch, PizzaIngredients.Zwiebel],
};

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
