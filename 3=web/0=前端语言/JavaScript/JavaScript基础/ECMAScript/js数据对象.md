## 



## 数据类型

```js
首先要有一个观念，
	在 js 中，一切都是对象
	对象有自己的属性和方法



// 介绍
值类型
	保存在栈内存中，值与值之间是独立存在的，修改一个变量不会影响其他变量 、？？？
引用类型
	复杂数据类型（泛指对象，对象类型）
    保存在堆内存中，创建一个对象，就在堆内存中开辟一个空间，
    在栈中保存的是  变量 堆内存地址
    变量保存的是对象的内存地址(对象的引用)，如果两个变量保存的是一个同一个对象的引用，当通过一个变量修改属性时，另一个量也会改变
    
```



## 数据类型 

### 基本类型

```js
介绍
	1. 基本数据类型都是单一值，值与值之间没有任何联系，
    2. 创建的变量的都是对立的，不能成为一个整体
    var name = "孙悟空"；
    var gender = "男"；
        以上两个值是单一的，是没有联系的
        
        
// ECMA 规定了8种基础数据类型
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

### 对象 Objeect 类型

#### 介绍

```go
任何对象都是 Object 的后代 ，任何对象都是 Object 的实例
```

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









## 类型判断

```js
typeOf 变量名；   // 检查变量类型

constructor
	1. 回当前对象的构造器（类型函数）。利用该属性，可以检测复合型数据的类型，如对象、数组和函数
    2. undefined 和 null 没有 constructor 属性，不能够直接读取，否则会抛出异常
   		可以先检测，在用 constructor
    3. 数值直接量也不能直接读取 constructor 属性，应该先把它转换为对象再调用

toString 
	是 Object 类型的原型方法，它能够返回当前对象的字符串表示

自定义类型检测    
    //强健的数据类型检测工具函数
    //参数：obj 表示待检测的值
    //返回值：返回字符串表示，格式与 typeof 运算符相同，
    //"undefined" "number" "boolean" "string" "function"
    //"regexp" "array" "date" "error" "object"或 "null"
    function typeOf(obj){
        
      // 引用 Object 的原型方法 
      // toString () //列奉所有可能的类型字符串表示
      var _toString = Object.prototype.toString; 
      //模仿typeof运算符返回值，通过映射，统一字符串表示的值 
      var _type ={
        "undefined" : "undefined",
        "number" : "number",
        "boolean" : "boolean",
        "string" : "string",
        "[object Function]" : "function0f",
        "[object RegExp]" : "regexp",
        "[object Array] " : "array",
        "[object Date]" : "date",
        "[object Error]" : "error"
        //在这里可以继续展开要检测的类型
      }
    //把值转换为字符串表示，然后匹配 _type 对象中的键值对，最后处理特殊值 null
    return _type[typeof obj] || _type[_toString.call(obj)] || (obj ? "object" :"null");
    } 

// 要检测宿主对象和自定义类型，则需要用户添加 _type 对象的键值对，以扩展类型检测的范围。
```

| 值（value）                                           | typeof value（表达式返回值） | value.constructor（构造函数的属性值） |
| ----------------------------------------------------- | ---------------------------- | ------------------------------------- |
| number                                                | "number"                     | Number                                |
| string                                                | "string"                     | String                                |
| boolean                                               | "boolean"                    | Boolean                               |
| 对象                                                  | "object"                     | Object                                |
| new 字符                                              | "object"                     | Object                                |
| 数组                                                  | "object"                     | Object                                |
| 函数                                                  | "function"                   | Function                              |
|                                                       |                              |                                       |
| function className(){};  var value = new className(); | "object"                     | Object                                |

## 类型转换

### 强制转换

*   指一个类型强制转换成其他类型的类型数据

    ```js
    转为 ：
    	// var variable = Type()
    	String   （参看string）
        Number   （参看number）
        Boolean   （参看boolean）
    转换成其他的没有意义
    
    ```

### 自动转换

*   自动转换是以强制转换为基础的

*   自动转换,对用户不可见

    ```js
    1. 不同类型的数据相互运算
    	123 + "ad" //"123ad"
    2. 对非布尔值类型的数据求布尔值
    	if ("a") console.log("hello");
    3.对非数值型的数据使用一元运算符 ( + - )
        - [1,2]  // NaN
    
    // 与其某个位置是什么类型的数，就调用什么函数
    ```


### 具体转换

```js
// 自动转换为 boolean
	语句 的条件语句部分
    6 种类型转化为 false   加上 ！ 就是 true

// 转换为字符串
	 主要是加法运算 
     字符串 + 非字符串  ：会将非字符串转化为字符串 ，然后进行拼接
     
// 自动转化为 数值
     一元运算    +"sdf"  // NaN
	减法		true-1   // 0
    乘法		'5'*'2'   // 10
	/
```



