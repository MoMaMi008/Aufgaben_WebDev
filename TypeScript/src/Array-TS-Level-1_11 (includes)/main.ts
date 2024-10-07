let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

console.log("Suche im normalen String:");
console.log("Piper: ", string.includes("Piper"));
console.log("piper: ", string.includes("piper"));

console.log("Suche im String, nach der Umwandlung zu Kleinbuchstaben:");
console.log("Piper: ", string.toLowerCase().includes("Piper"));
console.log("piper: ", string.toLowerCase().includes("piper"));
