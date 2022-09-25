# 前端笔记

## 单词

> transition ： 过渡；
>
> opacity ： 透明度；
>
> infinite ： 无穷；

# 部分说明

### 返回顶部小按钮

> 固定定位；
>
> bottom	left=50%；	margin-left = 内容区的一般多；
>
> 或者 直接bottom 和 right 进行定位。

### 浏览器私有前缀 (为了兼容性)

> 不同浏览器有不同的私有前缀，用来对实验性的CSS属性加以标识

### 文字与选项联动 绑定文字

> 一、
>
> ```html
> <label><input type="checkbox" id="11" class="check" /> 测试</label>
> ```
>
> 二、
>
> ```html
> <input type="checkbox" id="check1" value="123" name="name" class="check">
> <label for="check1">姓名</label>
> <br>
> <input type="checkbox" id="check2" value="456" name="name" class="check">
> <label for="check2">密码</label>
> ```

## 过渡与动画

### transition 过渡

> transition： [属性名] [总执行时间] [速率曲线] [开始执行时间] ；
>
> 例：transition： width 1s linear 0s；  单个属性过渡；多个过渡用逗号隔开；
>
> 过渡所有的：transition ：all 1s linear 0s；
>
> 可以过渡的 宽高 偏移 倒角 背景色 透明度 文字颜色 变形；

```css
div{
    width:300px;
    height:300px;
    transition: width 1s linear 0s , hright 1s linear 0s ;
}
div:hover{
    width: 500px;
    height: 500px;
}
```

### 速度曲线

> linear 匀速；
>
> ease 开始很慢； 默认

### 动画的定义和调用

> keyframes => 关键帧；
>
> alternate 让动画在2 4 6 ·····   次时逆向执行；
>
> animation : name 5s linear 0s infinite alternate ;      重复次数无穷 且 双数反向

``` css
div {
    /*调用*/
    animation: 动画名 动画时长 速度曲线 延迟时间 执行次数；
}

/*定义*/
@keyframes 动画名称 {
    from{}
    to{}
}
/*定义多关键帧*/
@keyframes 动画名 {
    0%{}
    25%{}
    50%{}
    75%{}
    100%{}
}
```

## 切图

> PS 				切图
>
> 像素大师		测量

## 解决margin塌陷问题 --子元素带着父元素变化

> 转换成行内块
>
> 触发bfc:
>
> ​	overflow: hidden;
>
> ​	浮动 固定定位 绝对定位

## 继承问题

> 百分之多少的 先计算 再继承
>
> ​	下面例子中 son 的line-height 的实际值是 40px；

```css
.aa{
    font-size: 20px;
    line-height: 200%;
}
.aa .son{
    font-size: 15px;
}
```

## 防止父元素塌陷 float时

> 清楚浮动
>
> ​		高度直接写死  --  代码量少 但是有兼容性问题
>
> ​		添加新元素  -- 代码量少 但不优雅
>
> ​		伪元素  -- 仅用css 只支持ie8+
>
> ​		触发bfc -- css 但是使用overflow时要注意
>
> ​			hidden auto 

```html
<!-- 第二种 添加新元素 -->
<style>
    .bb{
        ....
        float:right;
    }
</style>
<body>
   <div class="aa">
        <div class="bb"></div>
       <div class="bb"></div>
       <div class="bb"></div>
       <div class="bb"></div>
       <div class="clearfix"> </div>
    </div>
</body>
```

```css
//第三种方法   定义一个原子类
.clearfix::after{
    content: "";
    display: block;
    clear: both;
}
```
## BFC

>  块级格式化上下文
>
>  ​	注意触发的条件
>
>  ​	拥有BFC是一个完全独立空间 这个空间里的子元素渲染不会影响外面的布局
>
>  两是两不是：
>
>  ​	触发bfc的条件
>
>  ​	1.`dispaly` 是 `flex` / `inline-block` / `table-cell` / `flow-root` 等
>
>  ​	2.`position` 是 `absolute` 或者 `fixed`
>
>  ​	3.`overflow` 不是 `visible`
>
>  ​	4.`float` 不是 `none`
## 基线对齐问题

> vertical-align
>
> baseline－将支持valign特性的对象的内容与基线对齐
> sub－垂直对齐文本的下标
> super－垂直对齐文本的上标
> top－将支持valign特性的对象的内容与对象顶端对齐
> text-top－将支持valign特性的对象的文本与对象顶端对齐
> middle－将支持valign特性的对象的内容与对象中部对齐
> bottom－将支持valign特性的对象的文本与对象底端对齐
> text-bottom－将支持valign特性的对象的文本与对象顶端对齐

> 图片和文字有上下关系时出问题也是基线问题
>
> ![Snipaste_2022-08-15_21-44-10](E:\SYSTEM\图片\Snipaste_2022-08-15_21-44-10.png)
>
> 这张图片中VIEW MORE无法居中对其就是因为文字和图片中基线的问题 在同一个div里面

## 画三角形

> <div style="width: 0;height: 0;border-top: 200px solid #000;border-left: 200px solid red;border-right: 200px solid olivedrab;border-bottom: 200px solid aquamarine;"></div>
>
> ```css
> div{
>     width: 0;
>     height: 0;
>     border-top: 200px solid #000;
>     border-left: 200px solid red;
>     border-right: 200px solid olivedrab;
>     border-bottom: 200px solid aquamarine;
> }
> ```
>
> 但是如果只保留其中一个的话 要用transparent(透明)
>
> <div style="width: 0;height: 0;border-top: 200px solid transparent;border-left: 200px solid red;border-right: none;border-bottom: 200px solid transparent;"></div>
>
> ```css
> div{
>     width: 0;
>     height: 0;
>     border-top: 200px solid transparent;
>     border-left: 200px solid red;
>     border-right: none;
>     border-bottom: 200px solid transparent;
> }
> ```

# JS

### 三元表达式

> 变量  =  (条件)  ? [true_value]  :  [false_value] ;

```js
var a = 22;
var x = (a > 20) ? "真" : "假";
console.log(x);  //真
```

### 判断是否包含某属性

> in Operator
>
> 如果指定属性在指定对象或者原型链中，则in Operator返回true
>
> 返回布尔值

```js
var obj = {a: 33, b: 44,};
console.log("a" in obj);  //true
//缺点 属性来自对象的原型 也会返回true
console.log("toString" in obj);  //true
```

> Reflect.has()
>
> 作用和缺点同 in Operator

```js
console.log(Reflect.has(obj, "a"));  //true
```

> hasOwnProperty()
>
> 指示对象是否有自己的属性作为它自己的属性 而不是继承的属性
>
> 返回布尔值

```js
console.log(hasOwnProperty("a"));   //true
console.log(hasOwnProperty("toString"));   //false
```

### typeof

> 用来检测变量的类型；
>
> NaN => not a number 他是一个数字类型的值
>
> 数字没有长度概念 只有字符串、数组才有长度

### prompt 提示

> 可以进行输入 和alert类似 但不相同 点击确定返回string 点击取消返回null

## 字符处理 小括号表明他是一个方法

### 判断是不是NaN

> 用isNaN()来判断
>
> 因为NaN != NaN，所以无法用 [变量名] = NaN; 来判断

### charAt() 

>  可以输出字符串里面某一位 从0开始编号

### substring(a,b)

> 从a开始到b的前一个结束 [a,b) 只写一个数字的话 从a输出到结束

### substr(a,b)

> 从第a开始往后b位数 b省略的话从a输出到结束 a要是负数的话从字符串尾部开始往前数

### slice(a,b) 

> 上网查查 没听

### substring和slice的区别

> substring中的a不可以是负数 但是slice中可以 是从尾端开始
>
> ​	如果substring中的a是负数的话 会变成0
>
> slice中的a必须小于b 否则会找不到字符 在substring中会自动转换

### substring substr slice对比

> substring与slice基本相同 [a,b)

### toUpperCase与toLowerCase

> Up全大写 Low全小写

### indexOf()

> 指定字符 首次出现在字符串中的位置
>
> ​	有就显示位置 没有就-1
>
> ​	过滤敏感词汇之类的功能

### 布尔值 boolean

> 布尔值只有真和假 定义时不加引号

### 字符转换

> Number()
>
> String()
>
> Boolean() 数字里面 除了0和NaN是false之外 其他都是true
>
> ​				字符串里面 空字符串 null undefine 是false 
>
> ​				只要不是空字符串 就是true  关键点：var a = "0";

|  原始值   | 转换为数字 | 转换为字符串 | 转换为布尔值 |
| :-------: | :--------: | :----------: | :----------: |
|   false   |     0      |   "false"    |    false     |
|   true    |     1      |    "true"    |     true     |
|     0     |     0      |     "0"      |    false     |
|    "o"    |     0      |     "0"      |     true     |
|   "20"    |     20     |     "20"     |     true     |
|   null    |     0      |    "null"    |    false     |
| undefined |    NaN     | "undefined"  |    false     |
|    NaN    |    NaN     |    "NaN"     |    false     |
| Infinity  |  Infinity  |  "Infinity"  |     true     |



### 精度问题 IEEE754

> 在js中0.1+0.2！=0.3 会等于0.30000000001
>
> 所以可以用toFixed来规定保留多少位小数

### 幂运算和开根号

> js没有提供这两种方法 但是可以通过Math来调用
>
> Math.pow(2,3) 幂运算 二的三次方
>
> Math.sqrt(4) 开根号 前面是对4进行开方

### 取整

> 向上取整 Math.ceil(2.4);  //3
>
> 向下取整 Math.floor(2.4)； //2
>
> 四舍五入 Math.round(2.4);  //2
>
> ​								   2.5   //3

### 短路运算

> a = 3&&6;    //6
>
> 都真则真
>
> 如果前面的是真 则返回后面的
>
> 如果前面是假 则短路 不执行后面的 返回前面的
>
> x=a||b;
>
> 前面为真 后面不看
>
> 适用于赋予默认值

### 逻辑运算符的顺序

> 非 > 与 > 或

## 循环类问题

> break  跳出循环
>
> continue 结束本次循环

``` js
// continue 例子
// 这个循环输出结果应为01234 但是因为continue的存在 所以 输出结果为0124
for (var a = 0; a < 5; a++){
    if(a === 3){
        continue;
    }
    console.log(a);
}
```

## 数组

### 判断是不是数组：

> 用typeof判断的话 是一个object
>
> 要用Array.isArray()来判断数组的类型

### 字符串转数组

> split:
>
> ​		split里面如果是空字符串 就是每个字符拆成一个
>
> ​		如果里面有字符串 则按设定的规则进行拆分

```js
var str1 = "hello";
console.log(str1.split());   //输出结果为 ['hello']
console.log(str1.split(""));   //输出结果为 ['h', 'e', 'l', 'l', 'o']
var str2 = "he-ll-o";
console.log(str2.split("-"));   //输出结果为 ['he', 'll', 'o']
```

### 数组转字符串

> join：
>
> ​		连接数组中的元素生成字符串
>
> ​		传的是连接符

```js
var arr = ['a', 'b', 'c', 'd'];
console.log(arr.join());    //"abcd"
console.log(arr.join("$"));   //"a$b$c$d"
```

### 常用方法

> push:
>
> ​		在数组结尾加一个
>
> ​		返回值是最新数组的长度

```js
var a = ['a', 'b', 'c'];
var b = a.push('d');
// b = 4
// 变化    a = ['a', 'b', 'c'];   ->   a = ['a', 'b', 'c', 'd'];
```

> unshift：
>
> ​		在数组开头添加一个
>
> ​		插入多个用逗号隔开  按unshift()里的顺序进行插入 其实就是插入了一次

> pop:
>
> ​		末位淘汰，删掉数组中最后一个 不需要传值
>
> ​		返回值是删除的那个元素

> shift：
>
> ​		在数组开头删一个 不需要传值
>
> ​		返回值是删除的元素

> splice:
>
> ​		替换数组中的元素
>
> ​		splice( [数组要替换的元素下标] ,  [要替换的位数] ,   [要替换进去的元素] );
>
> ​		返回值是被替换的元素

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];   //创建数组
var a = arr.splice(3, 2, 'x', 'y', 'z');   //从下标为3的开始往后2位 替换为后面的元素
console.log(arr);   //输出的结果是 ['a', 'b', 'c', 'x', 'y', 'z', 'f', 'g']
console.log(a);   // ['d', 'e']
/********也可以纯添加元素********/
//arr.splice(3, 0, 'x', 'y');   从下标3开始 添加元素 但没有元素被替换掉 返回值是空数组
/********也可以纯删除元素********/
//arr.splice(3, 2);   从下标3开始换掉两个 但没有元素进行补充  
```

> slice:
>
> ​		获取子数组
>
> ​		slice(a,b)  截取从下标a开始 到下标b的前一项 的元素截取出来 不改变原数组
>
> ​		如果只写一个slice(a) 截取从下标a开始到结束的元素
>
> ​		可以写负数slice(-3) 截取从-3位到结束的元素

> concat:
>
> ​		数组合并 原来数组不受影响

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var arr = arr1.cocat(arr2, arr3);   //在arr1后面拼接arr2和arr3
console.log(arr);   //输出结果为 [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

> reverse:
>
> ​		反转数组内的元素

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.reverse();
console.log(arr);   //输出结果为 [9, 8, 7, 6, 5, 4, 3, 2, 1]
```

### 索引

> indexOf():
>
> ​		传入的是要索引的元素
>
> ​		输出的是下标 没有就是-1
>
> includes:

### 冒泡排序

> 总次数是 需要排序的总数-1
>
> ​		arr.length - 1 次
>
> 例如：
>
> ​		30, 22, 19, 13, 35, 8
>
> 过程：
>
> 1.
>
> ​		22, 30, 19, 13, 35, 8	=>	22, 19, 30, 13, 35, 8	=>	22, 19, 13, 30, 35, 8	=>	22, 19, 13, 30 , 8, 35
>
> 2.
>
> ​		19, 13, 22, 8, 30, 35
>
> 3.
>
> ​		13, 19, 8, 22, 30, 35
>
> 4.
>
> ​		13, 8, 19, 22, 30, 35
>
> 5.
>
> ​		8, 13, 19, 22, 30, 35

### 二维数组

> ![image-20220829222834901](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220829222834901.png)

### 引用数据类型

```js
//数组是复杂类型的数
var a = [1, 2, 3, 4];
var b = a;
a[0]++;
console.log(a);   //输出结果是 [2, 2, 3, 4]
console.log(b);   //输出结果是 [2, 2, 3, 4]
//引用类型 a 里面在内存里 存的是一个地址 类似于指针
//复杂数据地址放在栈，值放在堆
//这种情况下 a 和 b 相互影响
```

```js
//他们在相互比较时 是比较的内存中的地址
var a = [1, 2, 3];
var b = [1, 2, 3];
console.log( a === b );    //输出结果是 false
```

### 克隆

> 深克隆和浅克隆
>
> 浅克隆 通常使用for循环
>
> 深克隆 需要用到递归

```js
//只能克隆数组里的第一层 二维数组的第二层无法进行克隆
var arr1 = ["a", "b", "c", "d"];
var arr2 = [];
for (var i = 0; i < arr1.length; i++){
    arr2.push(arr1[i]);
}
arr1.push("f");
console.log(arr2);
```

## 函数

### 函数的调用

> 函数名（）  就可以进行调用

### arguments

>  在不确定用多少形参的时候可以用arguments  很像一个数组 也可以当做一个数组 但不是完完全全的和数组一样

### 函数的返回值

> 用return来进行返回

```js
//定义方法
function add(a,b){
    return a + b;
}
var aaa = add(1,2);
console.log(aaa);    //3
```

### sort方法

![image-20220831222503527](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220831222503527.png)

> 要换位置就返回负数 不换就返回正数

### 注释

![image-20220902210902733](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220902210902733.png)

### 递归

> 只有在循环写出来让人无法理解的情况下才会用递归
>
> 递归会不停的创建函数 时间和内存消耗会增大
>
> 如果找不到终止点的话 会无限递归 会导致内存溢出

### 死循环和无限递归

> 死循环会让cpu占用100%
>
> 无限递归会让内存溢出

### 局部变量：函数里的变量 函数外不能用

### 全局变量 ：函数外的变量 函数里可以用 哪都可以

### 遮蔽效应

> 函数外定义一个变量 函数里面也定义一个变量 但是他们两个重名了 
>
> ![image-20220902222044844](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220902222044844.png)
>
> 作用域问题 函数里面的a是局部变量 不会影响到外面的全局变量

### 变量声明提升

> 只会提升到当前作用域的最前面

![image-20220902222420523](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220902222420523.png)![image-20220902222509895](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220902222509895.png)

> 上例用到了变量声明提升和遮蔽效应

### 嵌套函数

> 函数内的函数是局部函数 
>
> 函数外的函数是全局函数
>
> 大致规则参考全局变量与局部变量

### 作用域链

> 当前作用域没有的话就往外找
>
> 当定义了两个相同的变量时 就近原则 找最近的一个变量

### 全局变量污染 var

> 如果在函数内部定义局部变量 要是没加var的话 他就会变成全局变量 就会造成变量污染

### 闭包

![image-20220905212648760](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905212648760.png)

> 内部函数被移动到外部执行了
>
> 闭包是函数本身和该函数声明时所处的环境状态
>
> 每次创建函数时都会创建闭包

![image-20220905214506470](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905214506470.png)

![image-20220905214722662](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905214722662.png)

### 闭包面试题

![image-20220905220030156](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905220030156.png)

### 立即执行函数

> 函数和调用是写在一起的
>
> > 
>
> ![image-20220905221102377](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905221102377.png)
>
> ![image-20220905221124678](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905221124678.png)
>
> 此时 名字已经不重要了 
>
> 要用小括号括起来 或者写个加号或者减号
>
> ![image-20220905221207738](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905221207738.png)

> 用到立即执行函数就不会出现割裂的情况
>
> ![image-20220905221444387](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905221444387.png)
>
> 将全局变量转换为局部变量
>
> ​		这种情况是不对的
>
> ​		他推进去的是console.log(i); arr[]()是在for循环结束后执行的 所以 此时i=5 所以输出的全是5
>
> ​		此时的i是全局变量
>
> ![image-20220905222045220](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905222045220.png)
>
> ​		这样可以转换
>
> ​		定义的时候是多少 返回的就是多少
>
> ​		此时j是局部变量
>
> ![image-20220905222446387](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220905222446387.png)

## DOM

> 注意 s 
>
> getElementById
>
> getElementsByTagName  得到的是一个类数组
>
> getElementsByClassName

### 延时执行

> window.onload 当页面加载玩执行

### 连写

> 例如：
>
> ```html
> <div id="box1">
>     <p>段落1-1</p>
>     <p>段落1-2</p>
>     <p>段落1-3</p>
> </div>
> <div id="box2">
>     <p>段落2-1</p>
>     <p>段落2-2</p>
>     <p>段落2-3</p>
> </div>
> <script>
>     var aa = document.getElementsByTagName("div").getElementsByTagName("p");  //找到所有的div下的p
>     var bb = document.getElementsById("box1").getElementsByTagName("p");  //找到box1下所有的p
> </script>
> ```

### querySelector()方法

> 通过css选择器进行寻找
>
> 只能找到符合条件的第一个
>
> ```html
> <div>
>     <p class="aaa">目标1 </p>
>     <p class="bbb">目标2 </p>
>     
>     <p class="ccc">目标3 </p>
>     <p class="ccc">目标4 </p>
>     <p class="ccc">目标5 </p>
>     <p class="ccc">目标6 </p>
> </div>
> <script>
>     var aa = document.querySelector("p.aaa");  //目标1
>     var aa = document.querySelector("p.ccc:nth-of-type(2)");  //目标4
> </script>
> ```

### querySelectorAll()方法

> 与上同 
>
> 找到的性质与getElementsByClassName同 类数组

### 节点寻找

> ![image-20220907215955776](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220907215955776.png)
>
> ![image-20220907220325303](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220907220325303.png)

### 非标准属性获取

> ![image-20220907222741338](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220907222741338.png)

### 节点的创建移除和克隆

> ![image-20220907223047926](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220907223047926.png)

### 事件代理

> e.target 谁冒泡出来 就是谁
>
> # addEventListener() 方法

## This

### 总览

![image-20220921222616695](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220921222616695.png)

### 立即执行函数里面的this是window

```js
var a = 1;
var obj = {
    a: 2,
    fun: (function(){
      var a = this.a;
        return function(){
            console.log(a + this.a);
        };
    }()),
};
obj.fun();  //3
```

> var a = this.a     中的this是window
>
> console.log(a+this.a)   中的this是obj

### 定时器 延时器里面的this是window

```js
var obj = {
    a: 1,
    b: 2,
    fun: function(){
        console.log(this.a + this.b);
    },
};
var a = 3;
var b = 4;
setTimeout(obj.fun, 2000);  //7
```

### 给谁的绑定的DOM事件this就是谁

```js
button.onclick = function () {
    this.style.backgroundColor = "red";   //其中this是button
}
```

> 组合规则 （有更简单的方法）
>
> ```js
> var buttons = document.querySelectorAll("button");
> for (var i = 0; i < buttons.length; i++){
>     buttons[i].onclick = function(){
>         var aa = this;
>         setTimeout(function(){
>             that.style.backgroundColor = "red";
>         },2000);
>     };
> }
> ```

### call和apply中的this指向谁自定义

> 函数.call(上下文)；
>
> 函数.apply(上下文)；
>
> 两者的区别在于传参的方式不同

![image-20220921221904778](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220921221904778.png)

![image-20220921222214043](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220921222214043.png)

### new操作符来调用函数 this会指向这个对象

## 构造函数

### new

> 四步走：
>
> 1.使用new调用方法 函数体会自动创建一个空白对象
>
> 2.this指向空白对象
>
> 4.函数自动返回对象 即使没有return

### 构造函数解释和约定

> ![image-20220923210708268](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923210708268.png)
>
> 用new调用的就属于构造函数 是不是构造函数 和名字没关系
>
> 构造函数必须用new调用
>
> 构造函数的首字母要大写 是开发者们的约定

### 构造中的this

> 不是方法本身 是方法内部创造出来的空白函数体
>
> 四步走第一步

### 给对象添加方法

> ![image-20220923212105664](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923212105664.png)
>
> 传参不足的话 少的参数会显示undefined

### 类和实例

> 类 描述对象有哪些方法 而不规定他们的值
>
> 实例 是具体的对象 需要指定具体的属性 和 值
>
> 类和实例 一个抽象 一个具体
>
> ![image-20220923212857534](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923212857534.png)
>
> ![image-20220923213037690](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923213037690.png)

## protopype 原型

> ![image-20220923213259246](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923213259246.png)
>
> ![image-20220923213420935](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923213420935.png)
>
> ![image-20220923213802766](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923213802766.png)
>
> 构造函数中的prototype属性是构造函数实例的原型
>
> prototype对普通函数来说没啥用
>
> ![image-20220923214000694](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923214000694.png)

## 原型链

### 原型链查找

> 实例可以通过打点访问他的原型的属性和方法
>
> 实例没有 实例的原型有 一样能用
>
> 实例原型没有的话 可以去找 实例原型的原型   如果实例中有相关属性或者方法 就不会去原型链里找
>
> 这个过程被称为`原型链查找`

### 在prototype上添加方法和属性

> ![image-20220923220128408](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923220128408.png)
>
> 公共属性也可以这样写

### 原型链的终点

> ![image-20220923222540950](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923222540950.png)

### 数组的原型链

> ![image-20220923222743037](C:\Users\19371\AppData\Roaming\Typora\typora-user-images\image-20220923222743037.png)
