/*
 * @Author: FAll
 * @Date: 2022-11-25 16:44:45
 * @Description: class的继承
 */

/*
    类继承的两种方式：1、extends（继承父类)  2、implements(实现接口)
    说明：JS中只有extends,而implements是TS提供的
*/
class Animal {
    move(): void {
        console.log("走几步");
    }
}

class Dog extends Animal {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    bark(): void {
        console.log(`${this.name}在狗叫`);
    }
}

const d = new Dog("二哈");
d.move(); // 走几步
d.bark(); // 二哈在狗叫
/*
    1.通过extends关键字实现继承。
    2.子类Dog继承父类Animal,则Dog的实例对象dog就同时具有了父类Animal和子类Dog的所有属性和方法。
*/