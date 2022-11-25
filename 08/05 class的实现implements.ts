/*
 * @Author: FAll
 * @Date: 2022-11-25 16:59:09
 * @Description: class实现接口
 */

interface Singable {
    name: string;
    sing(): void;
}

/*
    1.通过implements关键字让class实现接口。
    2.Person类实现接口Singable意味着，Person类中必须提供Singable接口中指定的所有方法和属性。
*/

class Person implements Singable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sing(): void {
        console.log(`${this.name}: 圈圈圆圆圈圈`);
    }
}

const p = new Person("小林");
p.sing();