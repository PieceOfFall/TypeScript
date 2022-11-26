/*
 * @Author: FAll
 * @Date: 2022-11-26 11:06:52
 * @Description: private
 */

// private:表示私有的，只在当前类中可见，对实例对象以及子类也是不可见的
class Animal {
    private __run__() {
        console.log("正在运行");

    }
}

class Dog extends Animal {}

const a = new Animal();
// a.__run__(); // ERROR: 属性“__run__”为私有属性，只能在类“Animal”中访问。
const d = new Dog();
// d.__run__(); // ERROR: 属性“__run__”为私有属性，只能在类“Animal”中访问