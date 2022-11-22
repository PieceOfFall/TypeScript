/*
 * @Author: FAll
 * @Date: 2022-11-22 14:54:32
 * @Description: 对象的可选属性
 */

function myAxios(config: {
    url: string
    method ? : string
}): void {
    console.log(config.url);
}

myAxios({
    url: "www.baidu.com"
})