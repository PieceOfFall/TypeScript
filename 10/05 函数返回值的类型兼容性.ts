/*
 * @Author: FAll
 * @Date: 2022-11-26 15:25:16
 * @Description: 函数返回值的类型兼容性
 */

// 3.返回值类型，只关注返回值类型本身即可：
/*
    1.如果返回值类型是原始类型，此时两个类型要相同，比如，左侧类型F5和F6。
    2.如果返回值类型是对象类型，此时成员多的可以赋值给成员少的，比如，右侧类型F7和F8。
*/
type F5 = () => string;
type F6 = () => string;
let f5: F5 = (): string => {
    return 'a'
};
let f6: F6 = f5;

// 返回值为对象类型
type F7 = () => {
    name: string
}
type F8 = () => {
    name: string,
    age: number
}

let f7: F7;
let f8: F8 = () => {
    return {
        name: "a",
        age: 1
    }
};
f7 = f8