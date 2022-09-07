/********求和********/
//创建方法
function fun(a, b){
    //创建变量储存结果
    var aaa = 0;
    //循环相加
    for (var i = a; i <= b; i++) {
        aaa += i;
    }
    //返回结果
    return aaa;
}
//调用 并打印结果
console.log(fun(3, 7));