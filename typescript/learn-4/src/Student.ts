class Student extends Person {
    /**
     * 年级
     */
    grade: number;


    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
}

const student = new Student('张三', 18, 1);
console.log(student);
