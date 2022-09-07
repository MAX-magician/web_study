/********求最低分********/
//建立数组
var scoreArr = [96, 97, 76, 87, 87, 90, 91, 99, 78, 56];
//建立储存中间值的变量
var aaa = 0;
//对数组进行排序
for (var i = 0; i < scoreArr.length-1; i++) {
    for (var j = 0; j < scoreArr.length-1-i; j++) {
        if (scoreArr[j] > scoreArr[j+1]) {
            aaa = scoreArr[j];
            scoreArr[j] = scoreArr[j+1];
            scoreArr[j+1] = aaa;
        }
    }
}
//输出最低分
console.log(scoreArr[0]);