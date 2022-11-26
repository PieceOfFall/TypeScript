/*
 * @Author: FAll
 * @Date: 2022-11-26 11:58:46
 * @Description: 接口间的类型兼容性
 */

/*
    除了class之外，TS中的其他类型也存在相互兼容的情况，包括：1接口兼容性    2函数兼容性等。
    接口之间的兼容性，类似于class.。并且，class和interface之间也可以兼容。
*/
interface Point {
    x: number;
    y: number
}
interface Point2D {
    x: number;
    y: number
}

let p1: Point = {
    x: 1,
    y: 2
};
let p2: Point2D = p1;

interface Point3D {
    x: number;
    y: number;
    z: number
}
let p3: Point3D = {
    x: 1,
    y: 2,
    z: 3
};
p2 = p3;

// class和interface之间也是可以兼容的
class Point4D {
    x: number = 1;
    y: number = 2;
    z: number = 3;
    time: number = 4;
}
let p4: Point2D = new Point4D();