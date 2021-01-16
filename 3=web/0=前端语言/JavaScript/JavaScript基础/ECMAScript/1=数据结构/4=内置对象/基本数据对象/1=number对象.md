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

* 静态属性

    ```js
    prototype   
    	数字对象的静态属性，使用原型对象的属性来给当前文档中的数字对象分配新的属性和方法
    ```

    

* 最值

    ```js
    MIN_VALUE    (min_value)最小值，一个接近 0 的值       5E-324
    MAX_VALUE    (max_value)最大值					1.79E+308
    
    // Number.MIN_VALUE   Number.MAX_VALUE
    ```

* 无穷

    ```go
    Infinity      (infinity) 无穷大，数值超过浮点型所能表示的范围
    -Infinity     (-infinity) 负无穷大
    
    POSITIVE_INFINITY   正无穷大 ，比 Max_BALUE 大的值 
    NEGATIVE_INFINITY   负无穷大 ，比 min_VALUE 小的值
    
    // 就是一个专门的字面量，直接使用
    a = Infinity;  // 类型是 Number
    
    ```

* 非数值

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

