/********移除数组中的无效********/
//建立数组
var arr = ["有效", "无效", "有效", "无效", "无效", "有效"];
//遍历数组
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "无效") {
        //删除该项
        arr.splice(i, 1);
        //重置i的值
        i = 0;
    }
}
//输出结果
console.log(arr);