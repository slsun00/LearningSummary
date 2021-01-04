## html的 script 标签

### 标签使用

```js
<script> 
	JavaScript 代码块
</script>

标签
	script  
    	定义客户端脚
        默认类型是 JavaScript , 所以不管后缀是不是 .js ,浏览器都会按照 JavaScritp 解析

属性
 	type : MIME-type
    	 type 属性规定脚本的 MIME 类型 , 
          html5 默认 JavaScript 现在大多数浏览器都支持，可以省略不写 
    src  : URL
    	规定外部脚本文件的 URL。
        含有 src 的标签，会省略 标签中间的 JavaScript 代码块
    defer ："defer" 布尔值
    	规定对脚本延迟到页面加载完成才执行
        对外部文件才有用
    async :"async"  布尔值
    	异步执行，一边加载页面一边加载脚本
        仅适用于外部脚本（只有在使用 src 属性时）。
    charset
    	规定在外部脚本文件中使用的字符编码。
    xml:space : preserve
    	规定是否保留代码中的空白。
    JavaScriot 代码段
        
        
        
MIME 类型
	组成：
    	媒介类型/子类型
    常见 	
        text/javascript    // 一般用这个
        text/ecmascript
        application/ecmascript
        application/javascript
        text/vbscript
--------------------------------------------------

// 引用几个外部脚本要写几个对应的 script 标签           
<script type="text/javascript" src="https://www.w3school.com.cn/js/myScript1.js"></script>   
<script src="/js/myScript1.js" defer ></script>
	
```

## JavaScript 

### 声明位置

* 属性中

    ```js
    <button onclick="alert('点我')">点了</button>
    <a herf="javascript:alter('吊我')">超链接</a>   点击超链接，会执行js代码
    ```

* script 标签中

    * head ：常用，记得加上延迟属性
    * body : 之后

* 外部文件中

    * 脚本文件
    * 使用 <script> 标签可以导入 JavaScript 文件

### 执行顺序

*   单独的 JavaScript 文件不能单独运行，需要导入到网页中，通过浏览器来执行

*   顺序

    ```js
    根据 <script> 标签的位置来确定的
    1. 按照 html 页面的执行顺序，
    2. 执行到<script>,代码都被加载、解析和执行完以后，
    3. 继续解析后面的 HTML 部分，同时准备下一个代码块的执行
    
    为防止出现解析加载出现延迟，使用 defer 或者 asynic
    ```

### 文件 / 脚本

*   扩展名 .js

*   又称外部脚本

    ```js
    1. 引用几个外部脚本文件，就需要写几个 script 标签
    2. 外部脚本中不能包含 <script>  标签
    3. 可以在 HTML 中放置任意数量的脚本
    ```

* 优势 

    ```js
    分离了 HTML 和代码
    使 HTML 和 JavaScript 更易于阅读和维护
    已缓存的 JavaScript 文件可加速页面加载
    ```

## 代码块

```js
代码块就是使用 <script> 标签包含的 JavaScript 代码段。
<script>
    var a = 1
</scritp>
<scritp>
    alter(a)
</script>

1. JavaScript 是按照块进行的，但是不同的块属于同一作用域(全局作用域)，从上到下
	即下面的代码块可以使用上面的变量
2. 一行一行执行的

```

## 基本语法

*   语法就是指构成合法的 JavaScript 程序的所有规则和特征的集合，包括词法和句法
*   词法
    *   定义了 JavaScript的基本名词规范，包括字符编码、命名规则、标识符、关键字、注释规则、 运算符和分隔符等
*   句法
    *   定义了 JavaScript的基本运算逻辑和程序结构，包括短语、句子和代码段的基本规则，

## 严格模式

### 概述

*   ECMAScript5新增了严格运行模式

### 目的

*   消除语法中不合理、不严谨的部分、一些安全隐患
*   提高编译器效率，提升程序运行速度
*   为新版本左铺垫

### 使用

```js
1. 在代码的第一行 或者前面没有可以实际运行的结果的语句
	不支持的浏览器会作为字符串直接量忽略
	"use strict"
脚本中
	放到脚本第一行，则以严格模式运行(<script>标签对中间的部分)
函数中
	放在函数首部，只有写有严格模式函数有效，其他函数不受影响
最佳实践
	使用局部模式,独立创建了一个作用域，不影响其他脚本，防止变量污染
     将整个 JavaScript 文件脚本放在一个立即执行的匿名函数中，在匿名函数内启动严格模式。
     当 JavaScript 库文件被导入到不同模式的网页中，就不用担心严格模式失效了。
     <script>
         (function() {
    		'user strct'     
	     })();
     </script>
```

### 规范

```JS
变量
	1. 必须使用 var 声明变量 ，先声明后使用
     2. 不能随意删除变量
this
	全局作用域中函数中的 this 是undefined
    构造喊树不加 new 调用， this 会报错，new 实例化的构造函数指向创建的对象实例
    定时器的 this 还是指向 window
    事件、对象还是指向调用者
    
函数
	一个函数中不能有相同的形参
    函数声明在顶层：新版本js会引入块级作用域(es6已引入)，为了与新版本接轨，不允许 在非函数的代码块声明函数
其他
	语法和行为改变

*   
*   进制自定义函数中的 this 指向 window
*   创建 eval 作用域 ，不会影响全局变量
*   对象不能有重名的情况
```




## 值

分类

* 混合值 ：字面量 literal

* 变量值 :   变量

### 字面量

```js
就是常量，不可改变的，可以直接使用，但是一般不直接使用
是一个各种类型的常数值

"" //空字符串直接量
1  //数值直接量
true  //布尔值直接量
/a/g  //正则表达式直接量
null  //特殊值直接量
{}  //空对象直接量
[]  //空数组直接量
function(){}  //空函数直接量，也就是函数表达式
```



### 变量

```js
变量
    可以用来保存字面量，变量的值可以随意改变，
    变量可以用来描述字面量，是一个名称
    age = 18
```



## 其他内容

*   具体内容参看 ：代码规范

    ```js
    1. 标识符命名  ： 经典语句 》 代码规范
    2. 注释            ： 经典语句 》 代码规范
    3. 字符集    unicode 字符集
    
    ```

    

## 转义字符

* 特殊语境中无法使用字符自身而使用
  
  ```js
  // 参考：高级语言 -- 零碎整理 -- 转义序列
  反斜杠 + 字符 = 字符自身
  注意：
      一些字符加上反斜杠后会变成特殊字符
  
  1. 如果在一个正常字符前添加反斜杠，JavaScript 会忽略该反斜杠
  document.write("子曰：\"学\而\不\思\则\罔\，\思\而\不\学\则\殆\"")
  document.write("子曰：\"学而不思则罔，思而不学则殆\"")
  ```

## 输出

```js 
JavaScript 没有任何打印或者输出的函数
不同方式
	window.alert( message )	  弹出警告框
    document.write()   将内容写到 HTML 中（body中）
    console.log()	  写入到浏览器的控制台
    innerHTML  		  写入 HTML 元素

```

*   操作 HTML 元素

    ```js
    innerHTML  		  写入 HTML 元素
        <p id="标签的did">233</p>
        document.getElementById("标签的 id ").innerHTML = "段落改变";
        p 中的 233 会被修改为  段落改变
    ```

*   写到 HTML 文档

    ```js
    document.write(message)   将内容写到 HTML 中（body中）
    	仅仅向文档输出写内容
        如果文档已经完成加载，再执行此语句，整个 HTML 页面将被覆盖
    ```

*   写出到控制台

    ```js
    console.log()	  写入到浏览器的控制台
    	不会大端页面操作，在 F12 启用调试模式，在 console 进行调试
        
    ```

cinsole.log("要输出的值 a="+a)   // 提示信息输出
    ```
    
    

## 系统用字

### 关键字

```js
// 语句标识符
break	catch	continue 	do...while  for for...in  function
if...else  return  switch  throw  try   var  while
```



```js
 关键字
 保留字
 不建议使用的字
```

## 其他类型

```js 
运算符
语句
```

## 代码规范

```js
参见 经典语句 ：代码规范
```



## 零星知识

```js
把脚本置于 <body> 元素的底部，可改善显示速度，因为脚本编译会拖慢显示。

表单没有看懂

JavaScript 中要尽量避免使用 new 关键字
```
