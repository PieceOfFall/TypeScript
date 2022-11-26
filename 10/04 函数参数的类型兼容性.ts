/*
 * @Author: FAll
 * @Date: 2022-11-26 14:57:33
 * @Description: 函数参数的类型兼容性
 */

/*
    函数之间兼容性比较复杂，需要考虑：1参数个数2参数类型3返回值类型。
    1.参数个数，参数多的兼容参数少的（或者说，参数少的可以赋值给多的）
*/
type F1 = (a: number) => void;
type F2 = (a: number, b: number) => void;

let f1: F1 = (a: number) => {
    console.log(a);
};
let f2: F2 = f1;

const arr = ["a", "b", "c", "d"]
arr.forEach(() => {})
arr.forEach((item) => {})

/*
    1.参数少的可以赋值给参数多的，所以，f1可以赋值给f2。
    2.数组forEach方法的第一个参数是回调函数，该示例中类型为：(value:string,index:number,array:string)=>void。
    3.在JS中省略用不到的函数参数实际上是很常见的，这样的使用方式，促成了TS中函数类型之间的兼容性。
    4.并且因为回调函数是有类型的，所以，TS会自动推导出参数item、index、array的类型。
*/

// 2.参数类型，相同位置的参数类型要相同（原始类型）或兼容(对象类型)。
interface Point2D {
    x: number;
    y: number
}
interface Point3D {
    x: number;
    y: number;
    z: number
}
type F2D = (p: Point2D) => void;
type F3D = (p: Point3D) => void;
let f2d: F2D = (p: Point2D) => {};
let f3d: F3D;
f3d = f2d; // 此时需要把参数列表对象/接口较小的赋值给较大的