type TMonster = {
    name: string;
    type: string;
    health: number;
    strength: number;
    speed: number;
};

const nameInput = document.querySelector("#nameInput") as HTMLInputElement;
const typeInput = document.querySelector("#typeInput") as HTMLInputElement;
const healthInput = document.querySelector("#healthInput") as HTMLInputElement;
const strengthInput = document.querySelector("#strengthInput") as HTMLInputElement;
const speedInput = document.querySelector("#speedInput") as HTMLInputElement;
const addMonsterBtn = document.querySelector("#addMonsterBtn") as HTMLButtonElement;
const showMonsterBtn = document.querySelector("#showMonsterBtn") as HTMLButtonElement;
const clearMonsterBtn = document.querySelector("#clearMonsterBtn") as HTMLButtonElement;

const monsterArr: object[] = [];
const error = document.createElement("p");

const createMonster = (name: string, type: string, health: number = 50, strength: number = 50, speed: number = 50) => {
    const Monster: TMonster = {
        name: name,
        type: type,
        health: health,
        strength: strength,
        speed: speed,
    };
    monsterArr.push(Monster);
};

addMonsterBtn.addEventListener("click", () => {
    if (nameInput.value && typeInput.value) {
        createMonster(nameInput.value, typeInput.value, Number(healthInput.value) === 0 ? undefined : Number(healthInput.value), Number(strengthInput.value) === 0 ? undefined : Number(strengthInput.value), Number(speedInput.value) === 0 ? undefined : Number(speedInput.value));
        nameInput.value = "";
        typeInput.value = "";
        healthInput.value = "";
        strengthInput.value = "";
        speedInput.value = "";
        error.textContent = "";
    } else {
        error.textContent = 'Bitte fülle die Felder "Name" und "Typ" aus!';
        document.body.appendChild(error);
    }
});

showMonsterBtn.addEventListener("click", () => {
    console.clear();
    console.log(monsterArr);
});

clearMonsterBtn.addEventListener("click", () => {
    console.clear();
    console.log("Alle Monster erfolgreich gelöscht!");
    while (monsterArr.length > 0) {
        monsterArr.pop();
    }
});
