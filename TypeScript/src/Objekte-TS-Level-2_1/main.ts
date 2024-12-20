type EdelmetallPreis = {
    name: string;
    preiseGramEuro: number;
    veraenderung: string;
};

let edelMetallPreise: EdelmetallPreis[] = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

const output = document.querySelector("#output") as HTMLElement;

edelMetallPreise.forEach((metal: EdelmetallPreis) => {
    const zeile = document.createElement("tr");
    const name = document.createElement("td");
    const preis = document.createElement("td");
    const veraenderung = document.createElement("td");

    name.innerText = metal.name;
    preis.textContent = `${metal.preiseGramEuro}`;
    veraenderung.innerText = metal.veraenderung;

    zeile.appendChild(name);
    zeile.appendChild(preis);
    zeile.appendChild(veraenderung);

    output.appendChild(zeile);
});
