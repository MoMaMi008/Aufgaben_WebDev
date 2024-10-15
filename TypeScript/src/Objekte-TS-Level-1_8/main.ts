type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type Student = {
    name: string;
    age: number;
    coop: boolean;
    address: Address;
    emails: string[];
};

let studentData: Student[] = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5",
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"],
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5",
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"],
    },
];

const ausgabe = (arr: Student[]) => {
    arr.forEach((student) => {
        console.log(student.name);
        console.log(student.coop);
        console.log(student.address.city);
        console.log(student.emails);
    });
};

ausgabe(studentData);
