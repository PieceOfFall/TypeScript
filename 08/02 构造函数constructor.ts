/*
 * @Author: FAll
 * @Date: 2022-11-24 18:07:37
 * @Description: 构造函数constructor
 */

/*
    1.成员初始化（比如，age:number)后，才可以通过this.age来访问实例成员。
    2.需要为构造函数指定类型注解，否则会被隐式推断为any;构造函数不需要返回值类型。
*/
class MyPerson {
    age: number;
    gender: string;

    constructor(age: number, gender: string) {
        this.age = age;
        this.gender = gender;
    }
}

const p = new MyPerson(18, "男")
console.log(p.age,p.gender);
