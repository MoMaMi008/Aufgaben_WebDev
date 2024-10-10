const addToFifty = () => {
    let i: number = 0;
    for (i; i < 50; ) {
        i += Math.ceil(Math.random() * 10);
        console.log(i);
    }
    console.log("Angehalten bei: " + i + "> 50.");
};

addToFifty();
