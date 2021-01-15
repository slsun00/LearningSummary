## 注意

```js
js 中所有数据都是对象，对象有属性和方法
```



## 数据类型 + 对象

### 基本类型

*   ECMA 规定了8种基础数据类型

```js
原始类型
	// ES5
        Number
        BigInt
        Boolean
        String
        // 值类型
        Null（空值）		object     // 不包含任何数值的类型
        defined(未定义) 	 undefined
    // ES6
        Symbol 
对象
	Object 
```

### 对象 Objeect

#### 自定义对象

```js
由开发人员自定义的对象  
    Array(数组)  []	  object	 数组
    函数          	 function
```

#### 宿主对象

```js
// 由 Js 的运行环境提供的兑现，目前来讲是浏览器提供的兑现
BOM 
  window navigator screen history location
DOM
  document element attribuute event
```

#### 内建对象

```js
由 ES 标准中定义的对象，在任何 ES 的实现中都可以使用
Number 
String 
Boolean 
Function 	    函数
Object 			{}
// --------------------------------------------------
Math 
Date
regexp
```







### 基本类型

*   概述

    ```js
    1. 基本数据类型都是单一值，值与值之间没有任何联系，
    2. 创建的变量的都是对立的，不能成为一个整体
    var name = "孙悟空"；
    var gender = "男"；
    	以上两个值是单一的，是没有联系的
    ```

* 基础数据类型

    ```js
    
    // typeof 运算符可以检测数据的基本类型
    // 保存在栈内存中，值与值之间是独立存在的，修改一个变量不会影响其他变量
    ```

* 引用类型

    ```js
    复杂数据类型（泛指对象，对象类型）
    // 保存在堆内存中，创建一个对象，就在堆内存中开辟一个空间，
    // 在栈中保存的是  变量 堆内存地址
    // 变量保存的是对象的内存地址(对象的引用)，如果两个变量保存的是一个同一个对象的引用，当通过一个变量修改属性时，另一个量也会改变
      
    object      {}    	object			对象，表示复杂结构的 
    function
    Array
    ```

### 复合数据类型(对象)

```js
// Object
	任何对象都是 Object 的后代 ，任何对象都是 Object 的实例

```





*   动态类型

    ```js
    JavaScript 拥有动态类型：相同的变量可以用在不同的类型
    var x;				// x 为 undefined
    var x = 5;			// x 此时为 number
    var x = "ss";		// x 此时为 string
    ```

    

    