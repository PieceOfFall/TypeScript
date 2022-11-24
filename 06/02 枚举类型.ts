/*
 * @Author: FAll
 * @Date: 2022-11-24 13:14:10
 * @Description: TODO
 */

enum Direction {
    Up,
    Down,
    Left,
    Right
}
/*
    1.使用enum关键字定义枚举。
    2.约定枚举名称、枚举中的值以大写字母开头。
    3.枚举中的多个值之间通过，（逗号）分隔。
    4.定义好枚举后，直接使用枚举名称作为类型注解。
*/

function changeDirection(dirction: Direction) {
    console.log(dirction);
}

/*
    枚举成员是有值的，默认为：从0开始自增的数值。
    枚举成员的值为数字的枚举，称为：数字枚举
*/
changeDirection(Direction.Down)

enum Direction2 {
    Up = 2.0,
        Down = 4,
        Left = 6.1,
        Right // 7.1
}