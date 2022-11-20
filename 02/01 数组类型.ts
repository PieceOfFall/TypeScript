/*
 * @Author: FAll
 * @Date: 2022-11-20 17:29:08
 * @Description: 数组类型
 */

// 对象类型在TS中更加细化，每个具体的对象都有自己的类型语法

// 数组类型的两种写法:
let numbers: number[] = [1,3,5]; // (推荐写法)
let string: Array<string> = ['a','b','c']

// | (竖线)在TS中叫做联合类型（由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种）
let arr: (number | string)[] = [1,'a',2,'b']; // 表示这首先是个数组，数组中可以出现number类型和string类型

let variable: number | string[] = 123 // 表示既可以是number类型，也可以是string类型的数组


