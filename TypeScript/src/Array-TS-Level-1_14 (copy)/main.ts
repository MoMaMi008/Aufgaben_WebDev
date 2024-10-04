const oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];
const actorsReference: string[] = oldHollywoodActors;

actorsReference.push("Marilyn Monroe");
console.log(oldHollywoodActors);
console.log(actorsReference);

const kopie1: string[] = oldHollywoodActors.concat();
const kopie2: string[] = oldHollywoodActors.slice(0);
const kopie3: string[] = [...oldHollywoodActors];

kopie1[3] = "---GEÄNDERTER WERT---";
kopie2[5] = "---GEÄNDERTER WERT---";
kopie3[2] = "---GEÄNDERTER WERT---";

console.log(kopie1);
console.log(kopie2);
console.log(kopie3);
