/**
 * readonly 只读
 * static 静态
 */
class Person {
    // /**
    //  * 姓名
    //  */
    // readonly name: string = 'aaa';
    // /**
    //  * 年龄
    //  */
    // static readonly age: number = 18;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello')
    }
}

const person = new Person('aaa', 18);
person.sayHello();
console.log(person);
