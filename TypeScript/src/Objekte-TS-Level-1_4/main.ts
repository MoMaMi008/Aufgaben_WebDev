type Pet = {
    tiertyp: string;
    namen: string[];
};

let unsereHaustiere: Pet[] = [
    {
        tiertyp: "Katze",
        namen: ["Gipsy", "Nala", "Dinky"],
    },
    {
        tiertyp: "Hunde",
        namen: ["Knöpfchen", "Pinselchen", "Droopy"],
    },
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

console.log(unsereHaustiere[1].namen);

unsereHaustiere[1].namen[2] = "Snoppy";
unsereHaustiere[0].namen[2] = "Pinky";
console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

const hamster: Pet = {
    tiertyp: "Hamster",
    namen: ["Ella", "Diego", "Kunibert"],
};
unsereHaustiere.push(hamster);
console.log(unsereHaustiere);
