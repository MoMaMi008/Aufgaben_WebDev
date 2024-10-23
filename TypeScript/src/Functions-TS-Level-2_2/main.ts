const inputFirstname = document.querySelector("#inputFirstname") as HTMLInputElement;
const inputLastname = document.querySelector("#inputLastname") as HTMLInputElement;
const inputMail = document.querySelector("#inputMail") as HTMLInputElement;
const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement;

type TNewCostumer = {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
};

const greetNewUser1 = (User: TNewCostumer) => {
    switch (true) {
        case User.email === "" && User.phone === "":
            console.log(`Hello ${User.firstName} ${User.lastName}. We will not contact you.`);
            break;
        case !(User.email === "") && User.phone === "":
            console.log(`Hello ${User.firstName} ${User.lastName}. We will contact you via ${User.email}.`);
            break;
        case User.email === "" && !(User.phone === ""):
            console.log(`Hello ${User.firstName} ${User.lastName}. We will contact you via ${User.phone}.`);
            break;
        default:
            console.log(`Hello ${User.firstName} ${User.lastName}. We will contact you via ${User.email} and ${User.phone}.`);
            break;
    }
};

const greetNewUser2 = (firstName: string, lastName: string, email?: string, phone?: string) => {
    const outputArticle = document.createElement("article");
    const output = document.createElement("p");

    document.body.appendChild(outputArticle);

    switch (true) {
        case email === "" && phone === "":
            output.textContent = `Hello ${firstName} ${lastName}. We will not contact you.`;
            outputArticle.appendChild(output);
            break;
        case !(email === "") && phone === "":
            output.textContent = `Hello ${firstName} ${lastName}. We will contact you via ${email}.`;
            outputArticle.appendChild(output);
            break;
        case email === "" && !(phone === ""):
            output.textContent = `Hello ${firstName} ${lastName}. We will contact you via ${phone}.`;
            outputArticle.appendChild(output);
            break;
        default:
            output.textContent = `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}.`;
            outputArticle.appendChild(output);
            break;
    }
};

submitBtn.addEventListener("click", () => {
    const newUser: TNewCostumer = {
        firstName: inputFirstname.value,
        lastName: inputLastname.value,
        email: inputMail.value,
        phone: inputNumber.value,
    };
    greetNewUser1(newUser);

    greetNewUser2(newUser.firstName, newUser.lastName, newUser.email, newUser.phone);
});
