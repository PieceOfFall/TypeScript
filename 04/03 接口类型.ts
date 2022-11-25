/*
 * @Author: FAll
 * @Date: 2022-11-22 15:06:06
 * @Description: 接口类型
 */

// 当一个对象的类型被多次复用的时候，一般使用接口(interface)来描述对象的类型,从而达到复用的目的
/*
   解释:
   1、使用interface关键字来声明接口
   2、接口名称 ,可以是任意合法的变量名称
   3、声明接口后,直接使用接口名称作为变量类型
   4、不同于自定义类型type,接口只可以给对象指定类型
*/

// 接口方式声明类型
interface IPerson {
    name: string
    age: number
    sayHi(): void
}

let person: IPerson = {
    name: "刘老师",
    age: 18,
    sayHi() {}
}

// 类型别名方式声明类型
type IPerson2 = {
    name: string
    age: number
    sayHi(): void
}

let person2: IPerson2 = {
    name: "刘老师",
    age: 18,
    sayHi() {}
}
