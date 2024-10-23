const sayHello = () => {
    const output = document.createElement("p");
    document.body.appendChild(output);
    output.textContent = "Hello";
};

sayHello();

const sum = () => {
    const output = document.createElement("p");
    document.body.appendChild(output);
    output.textContent = (5 + 5).toString();
};

sum();

const multiplication = () => {
    window.alert((5 * 5).toString());
};

multiplication();

const Max: object = {
    name: "Max",
    lastname: "Mustermann",
    city: "Musterhausen",
};

const outputObject = (person: object) => {
    console.log(Object.keys(person));
};

outputObject(Max);
