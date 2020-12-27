## jQuuery



## what 是什么

*   一个JS函数库: write less, do more
*   封装简化 DOM 操作(CRUD) / Ajax

## why 为什么用

*   读写合一 ： 读数据和写数据的是一个函数
*   链式调用 ： 可以不断调用 jQuery 对象的方法
*   强大选择器 ： 方便快捷查找 DOM 元素 。进行 CURD
*   隐式遍历(迭代) ：一次操作多个元素
*   事件处理
*   样式操作
*   动画
*   浏览器兼容

## how 怎么用

### 本地引用

```js
production version   生产版 用于实际网站中，已经被精简和压缩
developmnet version  测试版 用于测试和开发，未压缩,可以查看源码

// 从 jquery.com 下载
<script src="jquery-1.1o.2.min.js"></script>
将下载文件放在网页的同一层目录下即可
```

### CDN 远程引入

```js
通过 CDN 内容分发网络引用  , 这个有很多 ，最好找国内的
<script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
```

## 语法

### 伪数组 

*   Object  对象

*   Length 属性

*   数值下标 

*   没有数组特别的方法（没有pop()、push() 等方法）

*   构造伪数组

    ```js
    $() instanceof Array   // false
    // 造一个伪数组
    var weiArr = {}
    weiArr.length = 0
        weiArr[0] = '111'
        weiArr.length = 1
        weiArry[1] = '222'
        weiArry.length = 2
    
    for {var i=0;i<weiArry.length;i++}{
        console.log(weiArry[i])
    }
    
    ```

    

### 函数

*   jQuery向外暴露的就是jQuery函数, 可以直接使用

```js
// $()
    $(selector).action

    $ 美元符号定义 jquery
    selector  选择符
    action    执行对元素的操作

// jQuery()
```



### 对象

*    jQuery 对象是一个包含所有匹配的任意多个dom元素的伪数组对象(注意是伪数组)
*   *   

```js


// 执行 jQuery 核心函数，返回的就是jQuery对象
	$xxx (执行$()得到的)

// 函数作为对象
	当成对象使用: $.xxx


$()  返回的就是 jQuery对象，所以不能直接使用 JavaScript的方法，所以使用 $()[1].innerHTML
```

































































































