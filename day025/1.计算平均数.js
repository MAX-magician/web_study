/********计算平均数********/
//创建方法
function aaa(){
    //创建变量用来储存数的和
    var bbb = 0;
    //遍历求和
    for (var i = 0; i < arguments.length; i++) {
        bbb += arguments[i];
    }
    //计算平均数
    bbb = bbb / arguments.length;
    //返回 值
    return bbb;
}
//调用 并储存返回值
var ccc = aaa(1, 2, 3, 4);
//控制台打印结果
console.log(ccc);