(function () {
    abstract class Animal {
        name: string;

        protected constructor(name: string) {
            this.name = name;
        }

        abstract bark(): void;
    }

    class Cat extends Animal {

        constructor(name: string) {
            super(name);
        }

        bark() {
            console.log(`${this.name}-喵喵喵`)
        }
    }

    const cat = new Cat('喵喵');
    cat.bark();
}())
