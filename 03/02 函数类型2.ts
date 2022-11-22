/*
 * @Author: FAll
 * @Date: 2022-11-21 14:31:14
 * @Description: void类型、函数可选参数
 */

// 无返回值为void类型,此时返回一个值则编译器报错
function greet(name: string): void {
    console.log(`${name},你好`);
    // return 1;
}
greet("老师")


// 可选参数只可以出现在参数列表的最后面
function mySlice(start: number, end ? : number): void {
    console.log(`起始索引: ${start},结束索引: ${end}`);
}
mySlice(1)
mySlice(2)
mySlice(3, 3)