/*
 * @Author: FAll
 * @Date: 2022-11-22 18:14:48
 * @Description: 类型断言
 */

// 有时传递一个比之前声明的更加明确一个类型

const alink = document.getElementById('link') // 此时根据类型推断，alink是HTMLElement类型
// alink.href // ERROR: 类型“HTMLElement”上不存在属性“href”

// 此时，可以使用类型断言来指定更具体的类型 (as)
const alink2 = document.getElementById('link') as HTMLAnchorElement
alink2.href
// 另一种语法，使用<>语法，这种语法形式不常用知道即可：
const alink3 = < HTMLAnchorElement > document.getElementById('link')
