## Number 对象

### 	概述

*   表示一个数值日志、整数、浮点数
*   一般情况下，不需要担心 Number 对象，因为浏览器自动将数字文本转化为数字类实例
*   注意静态调用属性，需要用兑现 Number, 注意大写

### 声明

```js
var val = new Number(number);  // 包装类
	参数无法转换为数组，返回错误 NaN（Not a Number）
```

### 属性

#### 静态属性

```js
prototype   
	数字对象的静态属性，使用原型对象的属性来给当前文档中的数字对象分配新的属性和方法
```



#### 最值

```js
MIN_VALUE    (min_value)最小值，一个接近 0 的值       5E-324
MAX_VALUE    (max_value)最大值					1.79E+308

// Number.MIN_VALUE   Number.MAX_VALUE
```

#### 无穷

```go
Infinity      (infinity) 无穷大，数值超过浮点型所能表示的范围
-Infinity     (-infinity) 负无穷大

POSITIVE_INFINITY   正无穷大 ，比 Max_BALUE 大的值 
NEGATIVE_INFINITY   负无穷大 ，比 min_VALUE 小的值

// 就是一个专门的字面量，直接使用
a = Infinity;  // 类型是 Number

```

#### 非数值

```js
 NaN				等价于一个值，但不是一个数字

-----------------------------------------------------------------
    NaN  // 类型是 Number
        概念
            not a Number 非数值，IEEE 定义的
			非数字类型计算、转化为数字 ，就会生成 NaN
        运算
            1. 不等于任何值，包括自己
                NaN === NaN  // false
            2. NAN 参与的运算，结果都是 NaN
        类型判断
          1. isNaN(object) // 判断是否是 NaN ，是的话就返回 true
          2. 非数字形式的字符换转为数字，会生成 NaN
                +'oops'  // NaN
		  3. typeOf 不能分辨 NaN 和数字
// 字面量，也是直接使用的
var a = NaN;
```



### 方法

*   数字对象只包含每个对象对性的一部分默认方法

```js
constructor()		返回创建此对象的实例的函数。默认这是数字对象
toExponential()      讲一个数字强制以指数表示，及时这个数字在js规定使用标准符号表示的范围之内
tofixed()			格式一个数为小数点右边有特定位数的小数
toLocaleString()	 返回当前数字的字符串值版本的格式，可能根据浏览器的区域设置不同而不同
toPrecision()		 定义显示有多少位来显示一个数(小数点左边和右边的数)
toString()			返回数的值的字符串表示形式
valueOf()			返回数的值
```



## 转换为数字

### Number() 函数

```js
类型会转为 number , 值分情况讨论

1. 原始类型值
	字符串  ：
    	纯数字的 ：数字   Number("123")
        有非数字 ：NaN	  "12fd",只要有一个字符无法转，就会转为 NaN
	    空字符串 ：0
    布尔值
    	true  1
		false 0
		undefined  转为 NaN
		null       转为 0

2. 对象
	转化为 NaN ，除非是包含单个数值的数组  Number([5]) //5

转换规则
	调用 valueOf 方法
    	返回原始类型的值 ： 直接使用 Number 函数，没有后续
         返回对象 		： 调用 toString 方法
        						返回原始类型的值  ： 使用 Number
                                   还是对象		   ： 报错
                                   
var obj = {x:1}
Number(obj)

if (typeOf obj.valueOf === 'object') {
    Number(obj.toString)
} else {
    Number(obj.valueOf())
}
```

### parse系列

```js
parseInt(string,radix) number       字符串 x 中的有效整数 提取出来，有小数的，截去小数
parseFloat(string): number	        字符串 x 中的有效浮点数提取出来

// 格式 数字+其他字符，只有这种才可以。 23fdt45 这能找到 23
// 非 String 使用，会先转化为字符串，然后再进行操作
var a = "123fsdf"  
a = parseInt(a)  // 123
```

### 符号转换

```js
    任意值进行 - * /  的运算都会转换成 Number
    任意值(NaN 除外) - 0  // 实现转化为Number

// 自动转化为 数值
     一元运算    +"sdf"  // NaN
	减法		true-1   // 0
    乘法		'5'*'2'   // 10
	/
```



