/**
 * ts 类型
 */
let a: number;
let b: string;
let c: boolean = false;
let d: any; // 任意类型 可以赋值给任意类型
let e: unknown; // 不能赋值给其他类型
let f: void;
let g: never;   // 不能是任何值，永远不会有返回结果
let h: object;  // 不实用
let i: 'a' | 'b'; // 字面量 其本身

if(typeof e === 'string') {
    b = e;
}

// 类型断言 
b = e as string;

a = 10;
b = 'hello';
c = true;

function sum(a: number, b: number): number {
    return a + b;
}

function multiReturn(flag: boolean): number | string {
    if(flag) {
        return 1;
    } else {
        return '2';
    }
}

function testNever(): never {
    throw new Error('132');
}
//{ } 用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后面加上？，表示属性是可选的
let aObject: {name: string, age?:number};
//[propName: string]:any 表示任意类型的属性
let bObject: {name: string, [propName: string]: any}

// 限制函数结构
let aFunc: (a: number, b: number) => number;
aFunc = function(a: number, b: number): number {
    return a + b;
}

let aArr: number[]; // 数组类型
let bArr: Array<number>;

/* 新增
    tuple(元组)：就是固定长度的数组
        语法：[类型， 类型， 类型]
*/
let aTu: [number, string];
aTu = [123, 'aaa'];

// 枚举
enum Gender {
    male, // 0
    female // 1
}
let gender: Gender;
gender = Gender.male;

// | &
let test1: number | string;
let test2: {name: string} & {age: number}
test2 = {name: 'aaa', age: 18}

// 类型别名
type myType = 1 | 2 | 3;
let test3: 1 | 2 | 3;
let test4: myType;
test3 = 1;