/*
 * @Author: FAll
 * @Date: 2022-11-24 13:55:12
 * @Description: 字符串枚举
 */

// 字符串枚举没有自增长行为，因此，字符串枚举的每个成员必须有初始值
enum MyDirection {
    Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT"
}

function changeDirection(dirction: MyDirection) {
    console.log(dirction);
}
changeDirection(MyDirection.Up)