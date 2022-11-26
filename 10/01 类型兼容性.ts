/*
 * @Author: FAll
 * @Date: 2022-11-26 11:38:39
 * @Description: 类型兼容性的说明
 */

/*
    两种类型系统：1 Structural Type System（结构化类型系统) 2 Nominal Type System（标明类型系统)。
    TS采用的是结构化类型系统，也叫做duck typing(鸭子类型)，类型检查关注的是值所具有的形状。
    也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。
*/
let arr = ["a", "b", "c"]
arr.forEach(item => {})
arr.forEach((item, index) => {})
arr.forEach((item, index, array) => {})


/*
1.Point和Point2D是两个名称不同的类。
2.变量p的类型被显示标注为Point类型，但是，它的值却是Point2D的实例，并且没有类型错误。
3.因为TS是结构化类型系统，只检查Point和Point2D的结构是否相同（相同，都具有×和y两个属性，属性类型也相同）。
4.但是，如果在Nominal Type System中（比如，C#、Java等)，它们是不同的类，类型无法兼容。
*/
class Point{x:number;y:number}  
class Point2D{x:number;y:number}

const p:Point = new Point2D; // 不报错，类型系统认为他们同一个类型
