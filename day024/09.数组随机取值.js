/********数组随机取值********/
//建立数组
var general = [
                "吕布","赵云","典韦","关羽","马超",
                "张飞","黄忠","许储","孙策","太史慈",
                "夏侯敦","夏侯渊","张辽","张颌","徐晃",
                "庞德","甘宁","周泰","魏延"
            ];
//建立数组用来存放三个不重复的值
var aaa = [];
//当aaa中有三个随机数时结束循环
while(aaa.length < 3) {
    //生成随机数 0-18
    var bbb = Math.floor(Math.random()*19);
    //检测是否重复
    if (aaa.indexOf(bbb) === -1){
        //不重复则存入数组
        aaa.push(bbb);
    }
}
//输出三名武将的名字
for(var i = 0; i < aaa.length; i++){
    console.log(general[aaa[i]]);
}