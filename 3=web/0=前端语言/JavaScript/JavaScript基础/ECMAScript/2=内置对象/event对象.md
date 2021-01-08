## 事件

## 事件句柄 

```js
事件句柄  插入 HTML 标签来定义事件动作。
```



## 操作

### 冒泡（bubble）

```js
// 所谓的冒泡：就是值事件的向上传导，当后代元素上的事件被触发的时候，其祖先元素的相同事件也会被触发
// 注意 ：是祖先的相同事件

<body>
	<div>
    	<span id="s1"> 这是span 元素 </span>
    </div>    
</body>

给 body div span  都绑定相同的事件，当你触发 span 事件的时候，会依次触发 div body 的事件

// 大部分冒泡是有用的，但是如果不希望事件冒泡，可以通过事件对象来取消冒泡
var s1 = document.getElementById("s1")
s1.onclick = function(event){
    event = event || window.event;
    // 其他操作
    // 取消冒泡
    event.cancelBubble = true
}
```

### 委任

```js
// 相当于继承
// 将事件统一绑定给元素的祖先元素，这样后代元素上的世家你触发的时候，会一直薄袄到祖先元素
// 通过祖先元素的响应函数来处理事件，利用冒泡，减少事件的绑定次数


// 点击 ul 中超链接，会触发和 ul 绑定的函数，不用为每一个超链接绑定函数
u1.onclick = function(){
    // 触发的事件的对象使我们期望的元素则执行，否则不执行
    event = event || window.event
    if  (event.target.className == "link"){
           alert("ul 响应函数")
    }
}
<body>
	<ul id="u1">
     	<li><a href="javascript:;">超链接1</a></li>
         <li><a href="javascript:;">超链接2</a></li>
     </ul>
</body>
```

### 绑定

```js
// u1.onclick = function(){}
// 使用 对象.事件 = 函数的形式绑定响应函数，只能同时为一个元素的一个事件绑定一个响应函数
// 如果绑定多个，后面的会覆盖掉前面的 

// 可以同时为一个元素的相同事件绑定多个响应函数，事件触发的时候，响应函数会依次执行
// 不支持 IE8 及其以下的
addEventListener()
参数
	1. 事件的字符串 ：不要 on
    2. 回调函数，当事件触发时该函数会被调用，是否在捕获阶段出发时间，需要一个布尔值，一般都传 false

    var btns = document.getElementById("btn")

    // 这样会依次触发下面的两个函数，而不会出现后面的覆盖前面的情况
    btns.addEventListener("click",function(){
       alert(1)
    },false);
    btns.addEventListener("click",function(){
       alert(2)
    },false); 
//--------------------------------------------------------------------
attachEvent()
参数
	1. 事件字符串 ：加上 on
    2. 回调函数
    btns.attachEvent("onclick",function(){
        alert(2)
    };
// 兼容使用
// obj 要打绑定的时间
// eventStr 事件的字符串（不加 on）
// callback  回调函数
function bid(obj,evenStr,callback){
   if (obj.addEventListener){
       	// 大部分浏览器
        obj.addEventListener(eventStr,callback,false)
   } else {
       
     // IE8 及其以下
        obj.attchEvent("on"+eventStr,function(){
            // 匿名函数中调用回调函数
            callback().call(obj);
        });
   };
}
```

### 传播

```js
关于事件的传播，微软和远景理解不同
微软
	事件应该由内向外传播，也就是事件触发的时候，应该先触发当前与阿奴苏上的事件，然后再向当前元素的祖先元素上传播
    事件应该在冒泡阶段执行
网景
	事件应该由外向内传播，也就是事件触发的时候，应该先触发当前元素的最外层的祖先元素的事件，然后在箱内传播给后代
    
W3C
	综合两个公司的方案，分为三个阶段
    1. 捕获阶段 ： 
    	从最外层的祖先元素，向目标进行事件的捕获，但是默认此时不会触发事件
    2. 目标阶段
    	事件捕获到目标元素
    3. 冒泡阶段
    	事件从目标元素向他的组向元素传递，依次触发祖先元素上的事件
        
 // 注意
     1. 希望在捕获阶段出发时间，就可以将 addEventListener() 的第三个参数设置为true , 一般不这样设置
```



## 属性

*   键盘事件

    ```js
    // 按键被按下
    // 按着不松，会一直触发，但是第一次和第二次之间时间比较长，其他的时间间隔很短
    onkeydown   
    // 按键被松开,不会连续触发
    onkeyup		
    
    键盘事件一般都会绑定给可以获取到焦点的对象
    var input document.getElementsByTagName("input")[0];
    input.onkeydown = function(event){
        event = event || window.event;
        // 输入框不能输入数字 。数字 是 48 - 57
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            // 在文本框中输入内容，属于 onkeydown 的默认行为
            // 如果在 onkeydown 中取消了默认行为，则输入的内容，不会出现在 文本框中
            return false;
        }
    }
    ```

    