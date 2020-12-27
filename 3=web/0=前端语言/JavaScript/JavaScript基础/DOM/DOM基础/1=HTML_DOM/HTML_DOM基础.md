## 参考手册

```js
HTML DOM 参考手册   https://www.w3school.com.cn/jsref/index.asp
```



## HTML DOM

*   概述
    *   HTML 的标准对象模型
    *   HTML 的标准变成标准
    *   W3C 标准
*   使用
    *   定义了所有 HTML 元素的*对象*和*属性*，以及访问它们的方法
    *   HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准

## 节点

### 概述

*   html dom 中所有的事物（所有的内容）都是结点，
*   DOM 是被视为节点树的 HTML

### 节点属性

```go
				  Node		   NodeName			NodeType 	nodevaluue
整个文档是一个   	  文档节点		#document			9			null
每个HTML元素    	元素节点	   标签名				1		    null
HTML 元素内的文本    文本结点		  #text				 3			属性值
每个HTML属性		属性结点	   属性名				2		   文本内容
注释				 注释结点						  8


4-7 很少用
```

### 结点树

*   将 HTML 视为树结构，这种结构被称为 结点树

![image-20201115222820256](../../../../img_source/image-20201115222820256.png)



### 结点关系

*   结点树之间的结点彼此拥有层级关系

*   关系

    ```js
    父	parent		
    子	child		一个节点有任意个数的子
    同胞 sibling		相同父节点
    
    // 从上到下，统一层级的标签从左往右写
    	  html
    head        body
    
    
    
    html 
    	root  		根结点 ，没有父节点
        child
            firstchild   head
            lastchild    body
        
    head
    	parentNode	html
        nextSibling  body   上下关系，下一个
        
    body  
    	parentNode		html
        previousSibling  head  上下关系，上一个
        
    ```

    

## 方法属性

### 介绍

*   方法是我们可以在节点（HTML 元素）上执行的动作

### 编程接口

*   所有的 HTML 元素被定义为对象，
*   编程接口是对象方法、对象蜀绣属性
    *   方法 ：能够执行的动作，（添加。修改元素等）
    *   属性：能够获取或设置的值（结点的名称或内容)

## 操作

## 事件

*   就是文档或浏览器窗口中发生的一些特定的交互瞬间
*   JavaScript 与 HTML 之间的交换是通过事件实现的

### 事件反应

*   对 HTML 事件作出反应

    ```js
    1. 在事件的属性中设置一些 Js 代码，事件被触发时，执行 JavaScript 代码
        <h1 onclick="alert(你点了h1)"></h1>  当用户点击一个 HTML 元素时，执行 js 代码，
    	结构和行为耦合，不推荐
    
    
    2. 为对应事件绑定处理函数,当事件被触发时，会调用相应的函数
    	
    	// 为 button 元素分配 onclick 事件
    	<script>
            function changeBackGround(){
                var mybtn = document.getElementById("myBtn");
        		mybtn.onclick=function(){
                    alert("点了 mybtn");
                };
            }
        </scritpt>
    	1.  单机触发的函数，称为单击响应函数	
        2.  注意浏览器加载顺序,script 标签在页面上端，代码执行的时候，页面没有加载，会出错
        	// 先加载页面，后执行函数
        	1. 写在要绑定的标签下面
            2. 使用 window 的 onload 属性，页面加载完再执行
                   widow.onload = function(){
                         var mybtn = document.getElementById("myBtn");
                        mybtn.onclick=function(){
                            alert("点了 mybtn");
                        };
                    }；
              3. script 标签的 defer
    ```

    

    

*   事件例子

    *   当用户点击鼠标时
    *   当网页已加载时
    *   当图片已加载时
    *   当鼠标移动到元素上时
    *   当输入字段被改变时
    *   当 HTML 表单被提交时
    *   当用户触发按键时







### 事件监听

```js
addEventListener()
	语法
    	element.addEventListener(even,function,useCapture)
			even : 事件的类型
             function : 事件触发后调用的函数
             useCapture : 布尔值，描述事件是冒泡(false 默认)还是捕获（true ）

	用于向指定元素添加事件句柄 ， 添加的句柄不会覆盖已存在的事件句柄
	一个元素可以添加多个事件句柄，也可以是同类型的事件句柄 - 如：两个 click 事件
	可以向任何 DOM  对象添加事件监听，不仅仅是 HTML 元素
	
	// 当用户点击按钮时触发监听事件
    document.getElementById("mybtn").addEventListener("click",displayDate)
// 移除 addEventListener 添加的事件句柄
removeEventListener()
```

### 事件传递

*   概述

    *   事件传递定义了事件触发的顺序

*   类型

    *   冒泡
    *   捕获

*   方法

    ```js
    // 将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素，哪个元素的 cilck 先触发？
    
    // 冒泡法
    	内部元素的时间先触发，然后触发外部元素，即先 p 再 div
    // 捕获法
        外部元素的事件先触发，然后才触发内部元素的事件 先 div 后 p
    ```

    

## 导航

```js 
使用结点关系，在节点树上导航

// 返回的是一个数组
var x = document.getElementByIdTagName("p")  //获取所有的 p 元素节点
for (i=0;i<x.length;i++) {		
    document.write(x[i].innerHTML)    // 输出每个结点的值
}

利用其它属性值进行导航
parentNode
firstChild
lastChild


```































































































