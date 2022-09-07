/********冒泡排序********/
//原数组
var arr = [4, 11, 6, 2, 12, 9, 3, 1, 10, 8, 5, 7];
//新建变量用来做中间值
var aa = 0;
//冒泡排序
for (var i = 0; i < arr.length - 1;i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        //如果小于则交换
        if (arr[j] < arr[j + 1]) {
            aa = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = aa;
        }
    }
}
//输出结果
console.log(arr);