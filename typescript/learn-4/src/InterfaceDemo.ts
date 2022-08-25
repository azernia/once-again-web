(function (){
    interface Person {
        name: string;
        age: number;

        sayHello(): void;
    }

    class Student implements Person {
        age: number;
        name: string;


        constructor(age: number, name: string) {
            this.age = age;
            this.name = name;
        }

        sayHello(): void {
        }

    }

    const personImpl: Person = {
        name: 'aaa',
        age: 18,
        sayHello() {
            console.log(123)
        }
    }

}())
