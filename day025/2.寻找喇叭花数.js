/********寻找喇叭花数********/
//循环 100-999
for(var i = 100; i <= 999; i++) {
    //将i的值转为字符串
    var stri = i + "";
    //分离百位十位个位
    var num0 = Number(stri[0]);
    var num1 = Number(stri[1]);
    var num2 = Number(stri[2]);
    //判断是否为喇叭花数
    if (i === (aaa(num0) + aaa(num1) + aaa(num2))) {
        //是则输出
        console.log(i);
    }
}
//创建阶乘方法
function aaa(num){
    //创建变量储存结果
    var bbb = 1;
    //计算阶乘
    for (var j = num; j > 0; j--) {
        bbb = bbb * j;
    }
    //返回 值
    return bbb;
}