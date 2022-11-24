/*
 * @Author: FAll
 * @Date: 2022-11-24 14:00:17
 * @Description: 枚举的特点和原理
 */

/*
    枚举是TS为数不多的非JavaScript类型级扩展（不仅仅是类型）的特性之一。
    因为：其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值（枚举成员都是有值的)。
    也就是说，其他的类型会在编译为JS代码时自动移除。但是，枚举类型会被编译为JS代码！
*/

let songs: string[] = ["南山南", "成都"]

enum YourDirection {
    Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT"
}

function changeYourDirection(direction: YourDirection) {
    console.log(direction);
}
changeYourDirection(YourDirection.Up)