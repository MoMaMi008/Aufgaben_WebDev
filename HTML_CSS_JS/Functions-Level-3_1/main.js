let gp = document.querySelector(".gp");
let py = document.querySelector(".py");
let bo = document.querySelector(".bo");
let bb = document.querySelector(".bb");
let button = document.querySelector("button");

console.log(gp);


gp.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    document.querySelector("h1").style.color = "purple";
    button.style.borderColor = "purple";
    button.style.color = "purple";
})

py.addEventListener("click", function () {
    document.body.style.backgroundColor = "rgb(226, 2, 226)";
    document.querySelector("h1").style.color = "yellow";
    button.style.borderColor = "yellow";
    button.style.color = "yellow";
})

bo.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color = "orange";
    button.style.borderColor = "orange";
    button.style.color = "orange";
})

bb.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    document.querySelector("h1").style.color = "lightblue";
    button.style.borderColor = "lightblue";
    button.style.color = "lightblue";
})

button.addEventListener("click", function () {
    location.reload();
})