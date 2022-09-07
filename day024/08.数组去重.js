/********数组去重*********/
//原数组
var arr = ["吕布", "赵云", "关羽", "典韦", "赵云", "黄忠", "关羽", "马超", "张飞", "黄忠"];
//建立新的数组
var aaa = [];
//遍历原数组
for (var i = 0; i < arr.length; i++) {
    //如果aaa中没有arr[i]这项
    if (aaa.indexOf(arr[i]) === -1) {
        //在后面加入项
        aaa.push(arr[i]);
    }
}
//输出结果
console.log(aaa);