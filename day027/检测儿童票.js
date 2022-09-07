/********检测是否可以买儿童票********/

//创建变量来储存用来测试的年龄和身高
var ages = 5;
var heig = 0.9;

//创建方法 checkTicket() 接收身高和年龄线
function checkTicket(height, age) {
	//创建方法 进行身高和年龄的判断
	return function (xxx, yyy) {
		//判断
		if (xxx < age && yyy < height) {
			//都为真 则输出
			console.log(true);
		} else {
			//有假 则输出
			console.log(false);
		}
	}
}

//传入年龄线和身高线
var aa = checkTicket(1.0, 6);  //游乐场A
var bb = checkTicket(1.2, 5);  //游乐场B
var cc = checkTicket(0.9, 7);  //游乐场C

//打印结果
aa(ages, heig);  //游乐场A
bb(ages, heig);  //游乐场B
cc(ages, heig);  //游乐场C
