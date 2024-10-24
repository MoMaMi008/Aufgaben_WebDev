import SchoolClass from "./classes/SchoolClass";
import Person from "./classes/Person";

const schoolClass_1 = new SchoolClass("1a", "Klasse 1a");
const schoolClass_2 = new SchoolClass("2a", "Klasse 1a");
const schoolClass_3 = new SchoolClass("2b", "Klasse 2a");

schoolClass_2._name = "Klasse 2a";
schoolClass_3._name = "Klasse 2b";

const person_1 = new Person(1, "Max", "Mustermann", "01.01.2000");
const person_2 = new Person(2, "Tobi", "Mayer", "25.06.1999");
const person_3 = new Person(3, "Gerd", "Gustavson", "03.08.2000");
const person_4 = new Person(4, "Friedulin", "Hammer", "16.05.2000");

schoolClass_1.addPerson(person_1);
schoolClass_1.addPerson(person_2);
schoolClass_1.addPerson(person_3);
schoolClass_1.addPerson(person_4);

schoolClass_1.showPersons();
