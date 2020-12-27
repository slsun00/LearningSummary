## 介绍

```js
html-DOM
	详情看 DOM -> html-DOM

```



操作内联样式

```js
// 修改样式
window.onload = function(){
    // 获取内联样式
     var box1 = document.getElementById("box1");
    //绑定响应函数
    box1.onclick = function(){
        //修改样式 元素.style.样式名 = 样式值,width height background-color（backgroundColor）
        box.style.width = 1oopx;
        
    };
     
};

// 读取样式
内联样式
	元素.style.样式名
	style 只能修改内联样式
当前元素正在显示的样式
    IE 
        元素没有设置样式，则显示默认样式,不支持 IE8 及以下
        元素.currentStyle.样式名
    其他
    	// 获取元素的当前样式，返回一个对象，对象中封装了当前元素封装的样式 ，
    	// 获取的是真实值，而不是默认值，比如没有设置 width, 不会返回 auto , 而是一个长度
        getComputedStyle()	
        第一个参数 ：要获取的样式
        第二个参数 ： 传递一个伪元素，一般都传 null
		getComputedStyle(box1,null).width



// 定义一个函数获取指定元素当前的样式， obj 要获取样式的元素， name 要获取的样式名
function getStyle(obj,name){
    // 加window变成一个对象的属性，变量没找到报错，属性没有找到返回 undefined
    if (window.getcomputedStyle){
            // 正常浏览器的方式 ,IE8 会出错
		return getcomputedStyle(obj,null)[name];
    } else {
            // IE8 的
    	return obj.currentStyle[name];
    }
}

// 其他样式
element对于修改版
```

