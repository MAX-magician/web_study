/********循环寻找水仙花数********/
//创建变量用来储存转换后的值
var a = [];
//循环 100~999
for (var i = 100; i < 999; i++) {
    //将i转换为数组
    a = i.toString().split("");
    // 将i的百位、十位、个位 进行三次方 并且相加判断是否等于其本身
    if ((Math.pow(Number(a[0]), 3) + Math.pow(Number(a[1]), 3) + Math.pow(Number(a[2]), 3)) === i){
        //如果满足条件则打印该数
        console.log(i);
    }
}