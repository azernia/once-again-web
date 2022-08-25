(function (){
    /**
     * public 缺省
     * private
     * protected 当前类及子类
     */
    class Person {
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }


        getName(): string {
            return this._name;
        }

        setNme(value: string) {
            this._name = value;
        }

        getAge(): number {
            return this._age;
        }

        setAge(value: number) {
            this._age = value;
        }
    }

    const person = new Person('aaa', 18);
    console.log(person.getName(), person.getAge());
    person.setNme('aaa');
    person.setAge(14);
    console.log(person)

    class Animal {
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }


        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }
    }

    const animal = new Animal('bbb');
    console.log(animal.name);
    animal.name = 'ccc';
    console.log(animal);

}())
