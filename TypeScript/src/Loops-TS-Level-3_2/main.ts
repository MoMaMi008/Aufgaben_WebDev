let numbers: number[] = [];

for (let i = 0; i < 5; i++) {
    const newNumber: number = Math.ceil(Math.random() * 100);
    numbers.push(newNumber);
}
console.log(numbers);

const findDevisors = (num: number): number[] => {
    const devisors: number[] = [];
    for (let i = 2; i < Math.ceil(num / 2); i++) {
        if (num % i === 0) {
            devisors.push(i);
        }
    }
    return devisors;
};

const devisorsOutput = (arr: number[]) => {
    arr.forEach((number) => {
        let devisors: number[] = [];

        if (number % 2 === 0) {
            devisors = findDevisors(number);

            for (let i = 0; i < devisors.length; i++) {
                const element = devisors[i];
                const output = document.createElement("p");
                document.body.appendChild(output);
                output.textContent = `${number} ist durch ${element}`;
            }
        } else {
            const output = document.createElement("p");
            document.body.appendChild(output);
            output.textContent = `${number} ist eine Primzahl und ist deshalb nur durch 1 und sich selbst teilbar.`;
        }
    });
};

devisorsOutput(numbers);
