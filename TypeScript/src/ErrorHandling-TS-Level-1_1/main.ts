function greetUser() {
    const username = window.prompt("Bitte gib deinen Benutzernamen ein!");
    try {
        if (username === "" || username === null) {
            throw new Error("Es wurde kein Benutzername eingegeben!");
        } else {
            console.log(`Herzlich willkommen ${username}`);
        }
    } catch (error) {
        console.error(error);
        console.log("Herzlich willkommen!");
    }
}

greetUser();
