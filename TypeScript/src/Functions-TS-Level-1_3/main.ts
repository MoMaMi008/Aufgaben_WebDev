function showPersonInfo(name:string, city:string, age:number) {
    return (`Hallo mein Name ist ${name}. Ich bin ${age.toFixed(0)} Jahre alt. Ich komme aus ${city}.`);
}

console.log(showPersonInfo("Peter", "Hamburg", 56));
