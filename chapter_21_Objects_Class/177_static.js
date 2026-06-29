class Student {
    constructor(name_stud, age, PhoneNo) {
        this.name_student = name_stud;
        this.age = age;
        this.PhoneNo = PhoneNo;
    }
    static name = "Playwirght2X";
    static mentor_name = "Pramod";

    static display() {
        console.log("Hi, I am  common function");

    }
}

const s1 = new Student("Deepika", 34, "24234234");
const s2 = new Student("Deeksha", 40, "24234234");

console.log(s1.name_student); // Deepika
console.log(s2.name_student);// Deeksha


console.log(Student.name);
console.log(Student.mentor_name);

