## 介绍

*   JavaScript 是一个脚本语言，是一个轻量级，但是功能强大的编程语言

*   ECMA 是 JavaScript 语言的规范标准 ， JavaScript 是 ECMAScript 的一种实现

*   ECMAScript 是 JavaScript 的标准，单不等同于 JavaScript , 也不是唯一被标准化的规范

*   版本

    ```js
    ECMAscript 1.0  2.0  3.0   5.0  5.1  6（ECMA2015） ...  之后是 ECMA+年份
    JavaScript 1.0  1.1                  2.0
    
     ECMAScript 只是一个标准，不同浏览器厂商对该标砖有不同的实现
     
     浏览器		 JavaScript实现方式
     FireFox		SpiderMonkey
     IE				JScript/Chakra
     Safari			JavaScriptCore
     Chrome			v8
     Carakan		Carakan
     
    ```

## 构成

*   完整的 JavaScript 分为三部分

    ```js
    ECMAScript    核心		    语言核心部分
    DOM           文档对象模型	 网页文档操作标准
    BOM           浏览器对象模型    客户端和浏览器窗口操作 
    ```

*   浏览器只是 ECMAScript 实现的宿主环境之一，宿主环境不仅提供基本的 ECMAScript 实现，还提供各种扩展功能

*   文档对象模型

    *    HTML 的应用程序编程接口 API ，DOM 把整个文档映射为一个属性的节点结构，以方便 JavaScript 脚本快速运行

*   浏览器模型

    *   可以对浏览器窗口进行访问和操作，这只是一个部分，没有形成规范

## Js特点

*   解释性语言
*   动态语言
*   基于原型的面向对象



## html 中的 script 标签

```js
位置
    head ：常用，记得加上延迟属性
    body : 之后
语法
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



## 声明位置

### 介绍

```js
行内	-- body 中  直接写到元素内部
内嵌	-- head 中  script 标签
外部  -- head 中  script 标签（标签内部不能写代码）
```

### 行内式

```js
介绍
	直接写到元素的内部
语法例子
	<body>
    	<input type="button" value="唐伯虎" onclick="alert("秋香")">
    </body>
描述
	可以将单行、少量的 js 代码写在 html 标签中（以 on 开头）：onclick
缺点
	可读性查，当 html 中有大量代码不方便阅读，引号容易出现错误，
```

### 内嵌式

```java
介绍
    写在 script 标签中， script 标签写在 head 中
语法例子
    <head>
    	<script>
    		alert("秋香")
    	</script>
    </head>
```

### 外部文件中

```js
介绍
	将 js 代码单独写到一个 .js 文件中，然后通过 script 引入
    这个 .js 文件称为 外部脚本
特点
    1. 引用几个外部脚本文件，就需要写几个 script 标签
    2. 外部脚本中不能包含 <script>  标签
    3. 可以在 HTML 中放置任意数量的脚本
优势
    分离了 HTML 和代码
    使 HTML 和 JavaScript 更易于阅读和维护
    已缓存的 JavaScript 文件可加速页面加载
语法例子
	<head>
    	<script src="my.js"></script>
    </head>
```



* 脚本文件
* 使用 <script> 标签可以导入 JavaScript 文件

## 执行

#### 浏览器执行

```java
浏览器分两部分
    渲染引擎：俗称内核，用来解析 html 和 css
    js 引擎: 俗称js解释器， 读取网页中的 js 代码，对其处理后运行
运行
    浏览器不会执行 js 代码，而而是通过 js 引擎，将代码逐行解释为机器语言，然后由计算机执行
    js 语言归为脚本语言， 会逐行执行
```

#### 执行顺序

* 单独的 JavaScript 文件不能单独运行，需要导入到网页中，通过浏览器来执行

* 顺序

    ```js
    根据 <script> 标签的位置来确定的
    1. 按照 html 页面的执行顺序，
    2. 执行到<script>,代码都被加载、解析和执行完以后，
    3. 继续解析后面的 HTML 部分，同时准备下一个代码块的执行
    
    为防止出现解析加载出现延迟，使用 defer 或者 asynic
    ```
