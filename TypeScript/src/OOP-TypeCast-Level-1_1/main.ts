import IStudent from "./interfaces/IStudents";

function procedStudent(student: IStudent) {
    console.log(`Processing ${student.name} ...`);
}

const student1 = { name: "Thorsten", age: 17 };
const student1AsIStudent = student1 as IStudent;

procedStudent(student1AsIStudent);

const student2 = { age: 22 };
const student2AsIStudent = student2 as IStudent;

procedStudent(student2AsIStudent);
// Ausgabe: "Processing undefined ..."
