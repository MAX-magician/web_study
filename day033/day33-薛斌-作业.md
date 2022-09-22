# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104151218335](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041512374.png)

> 结果: 333
>
> 原因: `obj` 中的`fn:fn`相当于`fn: function(){console.log(this.a + this.b);}`
>
> this是`obj`

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104151410702](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041514739.png)

> 结果: 77
>
> 原因:`fn:obj1.fn` = `fn: function () {console.log(this.a + this.b);}`
>
> `this`是`obj2`

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104151544232](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041515281.png)

> 结果: 7
>
> 原因:`outer()`返回对象`{a:3,b:4,fn:[Function:fn]}`
>
> 再`.fn()` 这时的`this`是上一步返回的对象

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104151838521](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041518560.png)

> 结果: 777
>
> 原因: `c:fun` = `c:[Function:fun]`
>
> 当`c()`时`this`指的是c[1]

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104152023486](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041520525.png)

> 结果: 77
>
> 原因: `var fn = boj1.fn` = `var fn = [Function:fn]`
>
> 再`fn()`此时`this`是`window`

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104152150133](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041521169.png)

> 结果: 66
>
> 原因: `obj.fun()` -> `fun:this.a+this.b`里面的`this`指的是`obj`
>
> `b:fun()` 因为`fun()`此时`this`是`window` => `b: 33`

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104152311291](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041523326.png)

> 结果: B
>
> 原因: `数组[下标]()`中的`this`是`数组` => `arr`

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104152502753](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041525788.png)

> 结果: D
>
> 原因: `arguments`接受了调用方法时传入的数据 并放在数组里 此时的`this`是数组

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104152908247](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041529284.png)

> 结果: 33
>
> 原因: 因为立即执行函数中的`this`指向的是`window`所以`var a = this.a`中`this.a = 11`
>
> `obj.fun()`执行了`return`后的方法 此时 `obj`调用方法 所以`console.log(a + this.a)`中`this.a = 22` 闭包`a`是`var a = this.a = 11`

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104153153142](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041531177.png)

> 结果: 77
>
> 原因: `obj.fun` => `[Function: fun]`
>
> 延时器里面的`this`是`window`

# 作业

> 请说出下面代码的执行结果, 并说明原因

![image-20211104153313870](https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202111041533905.png)

> 结果: 33
>
> 原因: `obj.fun()`让方法被`obj`调用了 此时`this`是`obj`

