const vorname = document.querySelector("#vorname") as HTMLInputElement;
const nachname = document.querySelector("#nachname") as HTMLInputElement;
const land = document.querySelector("#land") as HTMLInputElement;
const button = document.querySelector("#button") as HTMLInputElement;

type SimplePerson = {
    name: string;
    lastname: string;
    country: string;
};

button.addEventListener("click", () => {
    const person: SimplePerson = {
        name: vorname.value,
        lastname: nachname.value,
        country: land.value,
    };
    console.log(person);
});
