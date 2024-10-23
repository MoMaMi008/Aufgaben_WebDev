let person = {
    vorname: "Anton",
    nachname: "Fish",
    alter: 34,
    familienstand: "ledig",
    groesse: "1,78 cm",
    zeigeProfil: function () {
        const einträge = Object.entries(this).slice(0, -1);
        console.log(einträge); // Zum leichteren verstehen von [key, value]
        einträge.forEach(([key, value]) => {
            const output = document.createElement("p");
            document.body.appendChild(output);
            output.textContent = `${key}: ${value}`;
        });
    },
};

person.zeigeProfil();

let person2 = {
    vorname: "Antje",
    nachname: "FLeisch",
    alter: 50,
    familienstand: "verheiratet",
    groesse: "1,90 cm",
    zeigeProfil: () => {
        const einträge = Object.entries(person2).slice(0, -1);
        console.log(einträge); // Zum leichteren verstehen von [key, value]
        einträge.forEach(([key, value]) => {
            const output = document.createElement("p");
            document.body.appendChild(output);
            output.textContent = `${key}: ${value}`;
        });
    },
};

person2.zeigeProfil();
