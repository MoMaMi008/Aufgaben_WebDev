let codingLanguages: string[] = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];
const euCountries: string[] = ["Germany", "France", "Italy", "Span", "Sweden", "Denmark", "Austria", "Netherlands", "Bulgaria"];

const sortDescending = (a: string, b: string) => {
    return b.localeCompare(a);
};

console.log(codingLanguages.sort(sortDescending));
console.log(euCountries.sort(sortDescending));
