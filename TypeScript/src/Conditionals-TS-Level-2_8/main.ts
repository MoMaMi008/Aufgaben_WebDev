let schoolGrade: number = Math.ceil(Math.random() * 10);

switch (schoolGrade) {
    case 1:
        console.log(schoolGrade);
        console.log("sehr gut");
        break;
    case 2:
        console.log(schoolGrade);
        console.log("gut");
        break;
    case 3:
        console.log(schoolGrade);
        console.log("befriedigend");
        break;
    case 4:
        console.log(schoolGrade);
        console.log("ausreichend");
        break;
    case 5:
        console.log(schoolGrade);
        console.log("mangelhaft");
        break;
    case 6:
        console.log(schoolGrade);
        console.log("ungenügend");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(schoolGrade);
        console.log("Das ist keine gültige Schulnote.");
        break;
    default:
        break;
}
