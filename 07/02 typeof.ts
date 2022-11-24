/*
 * @Author: FAll
 * @Date: 2022-11-24 15:59:23
 * @Description: typeof
 */

// JS中提供了typeof操作符，用来在JS中获取数据的类型
console.log(typeof "Hello,TS"); // string

// TS也提供了typeof操作符：可以在类型上下文中引用变量或属性的类型 (类型查询)
// 使用场景：根据已有变量的值，获取该值的类型，来简化类型书写。
let p = {
    x: 1,
    y: 2
};

function formatPoint(point: typeof p) {
    console.log(point);
}
formatPoint({
    x: 2,
    y: 3
}); // { x: 2, y: 3 }

/*
    1.使用typeof操作符来获取变量p的类型，结果与第一种（对象字面量形式的类型）相同。
    2.typeof出现在类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文（区别于JS代码）。
    3.注意：typeof只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）。
*/

let num: typeof p.x;
// let ret:typeof formatPoint({x:1,y:2}); // ERROR

