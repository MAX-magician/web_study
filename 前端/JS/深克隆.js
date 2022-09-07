//深克隆
function DeepClone(arr){
    //创建变量储存数组
    var clone = [];
    //循环 遍历输入进的数组
    for(var i = 0; i < arr.length; i++){
        //判断是不是数组
        if (Array.isArray(arr[i])){
            //如果是数组 则执行下面的代码 再次调用DeepClone方法 并将结果push到clone数组
            clone.push(DeepClone(arr[i]));
        }else{
            //不是数组 则直接push到clone数组
            clone.push(arr[i]);
        }
    }
    //返回结果
    return clone;
}