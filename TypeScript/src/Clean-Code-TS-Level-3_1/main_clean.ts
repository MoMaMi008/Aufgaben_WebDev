function filterThem(a: string[], b: string): string {
    const ret = a.concat();
    if (b === "rev") {
        ret.reverse();
    } else if (b === "no") {
        ret;
    } else if (b === "asc") {
        ret.sort((a, b) => a.localeCompare(b));
    } else if (b === "") {
        ret;
    }
    return ret.toString();
}

function filterThem2(a: Task[], b: string): string {
    const ret = a.concat();
    if (b === "rev") {
        ret.reverse();
    } else if (b === "no") {
        ret;
    } else if (b === "asc") {
        ret.sort((a, b) => b.name.localeCompare(a.name));
    } else if (b === "") {
        ret;
    }

    return ret.toString();
}

// This function will proces all the tasks
function processTasks(): void {
    //Todo: implement later
    console.log("implement later");
}

enum TaskType {
    Urgent = 4,
    NotUrgent = 2,
    Info = 1,
}

type Task = {
    name: string;
    type: string;
};

const tasks: string[] = [];
let array2: Task[] = [];

// Get the input from the user for a task
const input1 = prompt("Bitte geben Sie eine Aufgabe ein:");
tasks.push(input1 || "");
let inputObject1 = { name: input1 || "" };
array2.push(inputObject1);
// Log the task to the console
console.log("Aufgabe erstellt " + input1 + " von todo");

// Get the input from the user for a task
const input2 = prompt("Bitte geben Sie noch eine Aufgabe ein:");
tasks.push(input2 || "");
let inpObj2 = { name: input2 || "" };
array2.push(inpObj2);

console.log("debug1 - after 2");

// Log the task to the console
console.log("Aufgabe erstellt " + input2 + " von todo");
// Get the input from the user for a task
const input3 = prompt("Bitte geben Sie noch eine Aufgabe ein:");
tasks.push(input3 || "");
let io3 = { name: input3 || "" };
array2.push(io3);
// Log the task to the console
console.log("Aufgabe erstellt " + input3 + " von todo");

console.log("debug1");

if (tasks[0] === "") {
    tasks.shift();
} else if (tasks[1] === "") {
    tasks.shift();
} else if (tasks[2] === "") {
    tasks.shift();
}
// no good user input - clear the other tasks too
if (!tasks.length) {
    array2 = [];
} else {
    filterThem(tasks, "asc");
    filterThem2(array2, "asc");
}
//not urgent as default - fix later
array2.forEach((e) => {
    (e as Task).type = TaskType.NotUrgent;
});

console.log("debug7 - before result outside");
let resultOutside = 0;

if (tasks.length > 0 && tasks.length < 3 && array2.length > 0 && array2.length < 3) {
    console.log("Die Anzahl der Aufgaben liegt zwischen 1 und 2.");
} else if (tasks.length > resultOutside) {
    console.log("Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.");
}

processTasks();
