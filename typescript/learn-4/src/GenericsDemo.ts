(function (){
    function fn<T> (a: T): T {
        return a;
    }

    function fn2<T, K> (a: T, b: K) : T {
        console.log(b);
        return a;
    }

    console.log(fn<number>(1));

    interface A {
        a: number;
    }

    function fn3<T extends A>(a: T): number {
        return a.a;
    }

    fn3({a:1});

    class MyClass<T> {
        name: T;

        constructor(name: T) {
            this.name = name;
        }
    }

    const myClass = new MyClass<string>('123');
    console.log(myClass);
}())
