/*
 * @Author: FAll
 * @Date: 2022-11-26 11:52:29
 * @Description: 对象间的类型兼容性
 */

/*
    注意：在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型，这种说法并不准确。
    更准确的说法：对于对象类型来说，y的成员至少与×相同，则×兼容y(成员多的可以赋值给少的)。
*/
class Point {x:number;y:number}
class Point3D {x:number;y:number;z:number}

const p:Point = new Point3D()
// const p2:Point3D = new Point(); // ERROR: 类型 "Point" 中缺少属性 "z"，但类型 "Point3D" 中需要该属性

/*
    1.Point3D的成员至少与Point相同，则Point兼容Point3D。
    2.所以，成员多的Point.3D可以赋值给成员少的Point.。
*/