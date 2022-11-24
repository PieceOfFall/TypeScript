/*
 * @Author: FAll
 * @Date: 2022-11-24 18:20:32
 * @Description: class实例方法
 */

class Point{
    x=1;
    y=2;

    scale(n:number){
        this.x*=n;
        this.y*=n;
    }
}

const p = new Point()
p.scale(2)
console.log(p.x,p.y);

