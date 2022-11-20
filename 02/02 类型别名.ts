/*
 * @Author: FAll
 * @Date: 2022-11-20 18:06:00
 * @Description: 类型别名
 */

// 没有类型别名时:
let arr: (number | string)[] = [1,3,5,'a','b'];
let arr1: (number | string)[] = [1,'x',2,'y'];

/*
   类型别名 (自定义类型) : 为任意类型起名
   使用场景 : 当同一类型(复杂)被多次使用时，可以通过类型别名，简化该类型的使用
   解释 :   1、使用type关键字来创建类型别名
            2、类型别名 (比如，此处的CustomArray)，可以是任意合法的变量名称
            3、创建类型别名后，直接使用该类型别名作为变量的类型注解即可
*/

// 使用类型别名后:
type CustomArray = (number | string)[]
let arr2: CustomArray = [1,'a',2,'b']