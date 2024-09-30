function intro2(paramName) {
    let name = "SuperCoder"
    console.log("Hi " + name + ". Mein Name ist " + paramName + ".");
}
//übergebene werte, welche keine variable sind, müssen in "" gesetzt werden!
intro2("Moritz");
intro2("Max");

function intro3(name, stadt, alter) {
    console.log(`Hallo! Mein Name ist ${name}. Ich bin ${alter} Jahre alt und komme aus ${stadt}.`);
}
intro3("Max", "Berlin", "30");

function math(a, b) {
    console.log(a * b);
    console.log(a / b);
}
math(10, 2);
math(30, 20);
math(5, 0);