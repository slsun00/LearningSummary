## Document

*   每个载入浏览器的 HTML 文档都会成为 Document 对象。
*   通过 document 对象，可以访问 html 中的所有元素
*   Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问(只此一个)

## Element

*   Element 对象表示 HTML 元素 ,所有 HTML 元素是元素节点

*   Element 对象可以拥有类型为元素节点、文本节点、注释节点的子节点

*   NodeList 对象表示节点列表

*   素也可以拥有属性。属性是属性节点 , 即下面的 Attribute  

    ```js
    1. 对于返回的高度，要注意返回的是否有 px 
    2. 是否是计算来的，是否是只读的，计算的高度都有什么
    
    
    // 垂直滚动条滚动到底
    scrollHeight - scrollTop == clientHeight
    	
    // 水平滚动条滚动到底
    scollWidth - scrollLeft == clientWidth
    ```

    

## Attribute

## Event

### 概述

*   事件是可以被 JavaScript 侦测到的行为
*   HTML  事件是发生在 HTML 元素上的事情
*   HTML 页面使用JavaScropt 时，JavaScript 可以触发这些事件



## 类别

```js
事件句柄	event handlers

鼠标/键盘属性
IE属性
标准 Event 属性
标砖 Event 方法

```



### HTML 事件

*   HTML 事件是可以是浏览器行为，也可以是用户行为

*   网页中的每个元素都可以产生某些可以触发 JavaScript 函数的事件

    ```js
    html 页面加载完成
    input 字段改变
    html 按钮被点击
    ```

*   事件触发，可以执行一些 JavaScript 代码

    ```js
    // 单引号 或者  双引号,常通过事件属性来调用
    <some-html-element some-event="some JavaScript">
    <button onclick="displayDate()">the time is </button>
    ```

### 参考手册

```js
html dom 事件对象
```

