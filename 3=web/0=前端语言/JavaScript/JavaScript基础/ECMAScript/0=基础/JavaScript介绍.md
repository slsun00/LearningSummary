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