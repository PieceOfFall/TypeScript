/*
 * @Author: FAll
 * @Date: 2022-11-22 16:39:29
 * @Description: 类型推论
 */

/*
    在TS中，某些没有明确指出类型的地方，TS的类型推论机制会帮助提供类型。
    换句话说：由于类型推论的存在，这些地方，类型注解可以省略不写！
    发生类型推论的2种常见场景：
    1、声明变量并初始化时
    2、决定函数返回值时
*/
let age = 18
// age = '20' // ERROR: 不能将类型“string”分配给类型“number”

let a // 在变量没有直接初始化时，不会进行类型推断，此时需要手动添加类型注解
a = 1
a = "s"

// 函数返回值类型会根据函数定义自动推断(函数参数类型还是一定要写的)
function add(num1:number,num2:number) {
    return num1 + num2
} 

console.log(1);
