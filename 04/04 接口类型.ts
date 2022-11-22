/*
 * @Author: FAll
 * @Date: 2022-11-22 16:14:04
 * @Description: 接口的继承
 */

interface Point2D {
    x: number
    y: number
}

// 使用接口的继承
interface Point3D extends Point2D {
    z: number
}

let p3 = {
    x: 0,
    y: 1,
    z: 3
}