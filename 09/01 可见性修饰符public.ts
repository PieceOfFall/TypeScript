/*
 * @Author: FAll
 * @Date: 2022-11-26 10:56:53
 * @Description: public修饰符
 */

class Animal {
    public move():void {
        console.log("走几步");
        
    }
}

class Dog extends Animal {
    bark():void {
        console.log("旺旺");
        
    }
}

const d = new Dog();
d.move(); // 调用父类方法