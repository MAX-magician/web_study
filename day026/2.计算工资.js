/********计算工资********/

//入职时工资
var money = 10000;
//每年工资涨幅
var zzz = 0.05;

/**
 * 计算工资 每年增加5%
 * @param {number} years 工作年数
 * @returns
 */
function aaa(years){
    if (years === 1){
        return money;
    }
    return aaa(years - 1) * (1 + zzz);
}

//输出结果 第n年的月薪
console.log(aaa(20));