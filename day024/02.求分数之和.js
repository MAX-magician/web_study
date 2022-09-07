/********求分数之和********/
//建立数组
var scoreArr = [96, 97, 76, 87, 87, 90, 91, 99, 78, 56];
//新建变量用来储存分数的和
var aaa = 0;
//遍历数组求和
for (var i = 0; i < scoreArr.length; i++) {
    aaa += scoreArr[i];  //累加
}
//打印分数的和
console.log(aaa);