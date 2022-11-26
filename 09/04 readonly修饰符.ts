/*
 * @Author: FAll
 * @Date: 2022-11-26 11:17:05
 * @Description: readonly
 */

/*
    除了可见性修饰符之外，还有一个常见修饰符就是：readonly(只读修饰符)。
    readonly:表示只读，用来防止在构造函数之外对属性进行赋值。
*/

class Person {
    // 只读属性
    // 注：只要是readonly修饰的属性，必须手动提供明确的类型
    readonly age: number = 18;

    constructor(age: number) {
        this.age = age;
    }

    // setAge(age: number) {
    //     this.age = age; // ERROR: 无法分配到 "age" ，因为它是只读属性
    // }
}

/*
    1.使用readonly关键字修饰该属性是只读的，注意只能修饰属性不能修饰方法。
    2.注意：属性age后面的类型注解（比如，此处的number)如果不加，则age的类型为18（字面量类型）。
    3.接口或者{}表示的对象类型，也可以使用readonly。
*/

interface IPerson {
    readonly name: string;
}

let obj: IPerson = {
    name: "jack"
}

let obj2: {readonly name:string} = {
    name: "simon"
}

// obj.name = "mike"; // ERROR: 无法分配到 "name" ，因为它是只读属性
// obj2.name = "mike"; // ERROR: 无法分配到 "name" ，因为它是只读属性