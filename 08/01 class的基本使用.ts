/*
 * @Author: FAll
 * @Date: 2022-11-24 17:15:11
 * @Description: class的基本使用
 */

/*
    1.声明成员age,类型为number（没有初始值)。
    2.声明成员gender,并设置初始值，此时，可省略类型注解(TS类型推论为string类型)。
*/
class Person {
    age:number;
    gender = "男"; // gender:string
}
const p = new Person();
p.age
