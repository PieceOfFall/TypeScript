/*
 * @Author: FAll
 * @Date: 2022-11-22 14:41:07
 * @Description: //对象类型
 */

// TS的对象类型注解就是在描述对象的结构
let person: {
    name: string;age: number;sayHi(name: string): void
} = {
    name: "张三",
    age: 18,
    sayHi(name) {
        console.log(`${name},你好`);
    }
}
person.sayHi("小明");

// 如果一行内只有一个属性，则分号可以省略
let teacher: {
    name: string
    age: number
    sayHi: () => void //第二种函数声明方式
}