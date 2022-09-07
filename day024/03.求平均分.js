/********求平均分********/
//建立数组
var scoreArr = [96, 97, 76, 87, 87, 90, 91, 99, 78, 56];
//新建变量用来储存分数
var aaa = 0;
//遍历求和
for (var i = 0; i < scoreArr.length; i++) {
    aaa += scoreArr[i];
}
//求平均
aaa = aaa / (scoreArr.length);
//输出平均分
console.log(aaa);