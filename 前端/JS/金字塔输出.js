var a = 10,b = "";
for (var i = 0; i < a; i++) {
	for (var j = 0; j < a-i; j++) {
		b += "☆";
	}
	b += "\n";
}
console.log(b);
// 输出结果
// ☆☆☆☆☆☆☆☆☆☆
// ☆☆☆☆☆☆☆☆☆
// ☆☆☆☆☆☆☆☆
// ☆☆☆☆☆☆☆
// ☆☆☆☆☆☆
// ☆☆☆☆☆
// ☆☆☆☆
// ☆☆☆
// ☆☆
// ☆