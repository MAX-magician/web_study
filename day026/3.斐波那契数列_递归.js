/********斐波那契数列********/

//创建变量保存前两位数
var bbb = [1, 1];

/**
 * 递归计算斐波那契数列
 * @param {number} number 要输出斐波那契数列的长度
 * @returns 数列
 */
function aaa(number) {
    //如果数列长度达到指定值
    if (bbb.length === number){
        //结束递归
        return bbb;
    }else if (bbb.length > number){
        //返回错误信息
        return "输入的值有误";
    }
    //在数列末尾添加前两项的和
    bbb.push(bbb[bbb.length - 2] + bbb[bbb.length - 1]);
    //调用本身
    return aaa(number);
}

//输出结果
console.log(aaa(7));