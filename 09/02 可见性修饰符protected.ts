/*
 * @Author: FAll
 * @Date: 2022-11-26 11:01:36
 * @Description: protected
 */

// protected:表示受保护的，仅对其声明所在类和子类中(非实例对象) 可见
class Animal {
    protected move():void {
        console.log("走几步");
        
    }
}
const a = new Animal();
// a.move() 实例对象无法访问

class Dog extends Animal {
    bark():void {
        console.log("旺旺");
        this.move(); // 子类可以访问
    }
}

const d = new Dog();
d.bark();
// d.move(); 子类实例对象也无法访问

