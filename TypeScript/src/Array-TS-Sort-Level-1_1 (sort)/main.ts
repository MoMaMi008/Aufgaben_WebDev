let languages: string[] = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];
const euCountries: string[] = ["Germany", "France", "Italy", "Span", "Sweden", "Denmark", "Austria", "Netherlands", "Bulgaria"];

const sortAlphabetically = (arr: string[]) => {
    return arr.sort();
};

console.log(sortAlphabetically(languages));
console.log(sortAlphabetically(euCountries));
