/*
 * @Author: FAll
 * @Date: 2022-11-24 14:24:07
 * @Description: any类型
 */

// 当值的类型为ay时，可以对该值进行任意操作，并且不会有代码提示(失去类型保护)
let obj: any = {
    x: 0
}

// 访问不存在的属性 或者 赋值
obj.y
obj.z = 1

// 当作函数调用
obj()

// 赋值给其他类型的变量
let n: number = obj
// 隐式具有any类型的情况：1.声明变量不提供类型也不提供默认值 2.函数参数不加类型
let a //a:any

function add(num1, num2) {} // num1、num2:any
