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