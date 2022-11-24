/*
 * @Author: FAll
 * @Date: 2022-11-22 18:30:20
 * @Description: 字面量类型
 */

let str1 = "hello,TS";
const str2 = "hello,TS";

/*
    1.str1是一个变量(let),它的值可以是任意字符串，所以类型为：string。
    2.str2是一个常量(const),它的值不能变化只能是'Hello TS',所以，它的类型为：'Hello TS'。
*/

let age: 18 = 18;
// age = 19 //ERROR: 不能将类型“19”分配给类型“18”

let direction: "up" | "down" | "left" | "right"; // 配合联合类型时，类似枚举
// direction = "in"; // ERROR: 不能将类型“"in"”分配给类型“"up" | "down" | "left" | "right"”