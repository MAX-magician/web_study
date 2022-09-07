/********数组深克隆********/

//创建原数组
var arr1 = [33, 44, [55, 66], [77, 88, [99, 11], [22, 33]]];
//创建变量储存克隆完的数组
var arr2 = [];

//深克隆
function aaa(arr){
    //创建变量储存数组
    var clone = [];
    //循环 遍历输入进的数组
    for(var i = 0; i < arr.length; i++){
        //判断是不是数组
        if (Array.isArray(arr[i])){
            //如果是数组 则执行下面的代码 再次调用aaa方法 并将结果push到clone数组
            clone.push(aaa(arr[i]));
        }else{
            //不是数组 则直接push到clone数组
            clone.push(arr[i]);
        }
    }
    //返回结果
    return clone;
}

//克隆arr1给arr2
arr2 = aaa(arr1);
//输出结果
console.log(arr2);

/* arr1[3][2].push(99);
console.log(arr1);
console.log(arr2); */