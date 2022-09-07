/********计算数组中各元素的和********/
//建立数组
var arr = [1, 2, "炸弹", 3, 4, "炸弹", 5];
//建立遍历用来储存各元素的和
var aaa = 0;
//遍历
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "炸弹"){
        //如果遇到炸弹则忽略
        continue;
    }
    aaa += arr[i]; //累加
}
//输出结果
console.log(aaa);