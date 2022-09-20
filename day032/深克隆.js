var obj1 = {
  a: 1,
  b: 2,
  c: [
    33,
    44,
    {
      m: 55,
      n: 66,
      p: [77, 88],
    },
  ],
};

/**
 * 深克隆
 * @param {*} x 要克隆的数组或者对象
 * @returns 克隆结果
 */
function copy(x) {
  //根据传入的数据类型定义变量
  if (Array.isArray(x)) {
    var a = [];
  } else {
    var a = {};
  }
  //遍历
  for (var i in x) {
    //判断是不是对象
    if (typeof x[i] === "object") {
      a[i] = copy(x[i]);
    } else {
      a[i] = x[i];
    }
  }
  return a;
}

//克隆obj1给obj2
var obj2 = copy(obj1);
//打印结果
console.log(obj2);

// obj1.c.push(99);
// console.log(obj1);
// console.log(obj2);
