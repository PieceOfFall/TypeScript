/*
 * @Author: FAll
 * @Date: 2022-11-24 14:00:17
 * @Description: 枚举的特点和原理
 */
/*
    编译后,enum成为了自调用的JS函数，返回了一个同名对象
*/
var songs = ["南山南", "成都"];
var YourDirection;
(function (YourDirection) {
    YourDirection["Up"] = "UP";
    YourDirection["Down"] = "DOWN";
    YourDirection["Left"] = "LEFT";
    YourDirection["Right"] = "RIGHT";
})(YourDirection || (YourDirection = {}));
function changeYourDirection(dirction) {
    console.log(dirction);
}
changeYourDirection(YourDirection.Up);
