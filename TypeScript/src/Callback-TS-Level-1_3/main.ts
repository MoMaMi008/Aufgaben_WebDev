function sayHello(name: string, callback: (param: string) => void) {
    console.log(`Hallo ${name}`);
    callback("Willkommen zurück!");
}

function greetingCallback(message: string) {
    console.log(message);
}

sayHello("Moritz", greetingCallback);
