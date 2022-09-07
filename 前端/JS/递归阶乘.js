/**
 * 递归计算阶乘
 * @param {number} number 要递归的数字
 * @returns
 */
function aaa(number) {
	if (number === 1) {
		return 1;
	}
	return number * aaa(number - 1);
}
console.log(aaa(6));
