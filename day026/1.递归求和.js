/**
 * 递归求和
 * @param {number} number 从1计算到number
 * @returns
 */
function add(number){
    if (number === 1){
        return 1;
    }
    return number + add(number - 1);
}

//输出结果 1~100
console.log(add(100));