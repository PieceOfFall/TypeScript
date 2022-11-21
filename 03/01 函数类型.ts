/*
 * @Author: FAll
 * @Date: 2022-11-20 18:51:48
 * @Description: 函数类型
 */

function add(num1: number, num2: number): number {
    return num1 + num2;
} // 第一个和第二个number是参数类型声明，第三个是返回值类型声明

const minus = (num1: number, num2: number): number => {
    return num1 - num2;
};

console.log(add(1, 2));

console.log(minus(3, 1));

// 写法二:
let minus2: (num1: number, num2: number) => number; // 声明该参数类型和返回值类型的函数

minus2 = (num1: number, num2: number) => { // 定义
    return num1 - num2;
}