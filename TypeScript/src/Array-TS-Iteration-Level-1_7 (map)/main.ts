let fruits: string[] = ["🍇", "🍌", "🍒", "🍎"];

const saft: string[] = fruits.map((fruit) => {
    fruit += "🥤";
    return fruit;
});

console.log(saft);
