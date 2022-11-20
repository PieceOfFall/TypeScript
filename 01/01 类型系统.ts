/*
 * @Author: FAll
 * @Date: 2022-11-20 16:20:37
 * @Description: 类型系统
 */

console.log("hello,ts!");

let age: number = 18.6; //:number就是类型注解，为age变量添加了约束。约定了什么类型就只能给该变量赋值该类型的值

// age = '18' 编译期报错：不能将类型“string”分配给类型“number”

age.toFixed();

console.log(age);