## window

### 窗口加载事件

```js
语法例子
	window.onload = function(){}
	window.addEventListener('load',function(){})：  图片、flash等
    window.addEventListener('DOMContentLoaded', function(){}) : 仅当 dom 完成， 不包括样式等ie9+
    
窗口页面加载事件，当文档内容完全加载就会触发该事件，进行函数处理
```

### 窗口大小

```js
语法例子
	window.addEventListener('resize',function(){
		// 响应式布局
        if (window.innerWidth <= 800)
    })
```

### 定时器

#### 重复执行

```js
// 希望每隔一段时间进行执行
    
// 定时调用 ，这个是每隔一段事件就调用一次，会执行多次
setInterval(调用函数，延迟的毫秒数)
	setInterval(function(){...}, 3000)
     setInterval('callback()', 3000)
	setInterval(callback, 300)                           

	指定周期重复执行功能代码
    
clearInterval(时间间隔器)
	取消设定的时间间隔器
    
    
window.onload = function(){
    var num = 1;
    // 返回一个 Number 类型的数据，这个数字作为定时器的唯一标识
    // 可以接收任意类型的参数
    // 定时器会有多个，都会加一个名字
    var timer = setInterval(function(){
       count.innerHTML = num++; 
       
        if (num == 11) {
              // 关闭定时器
   			 window.clearInterval(timer)
        }
    },1000);  
}

```

#### 单次执行

```js
//延时调用 调用一个函数。不马上执行，而是隔一段时间以后执行，只执行一次
setTimeout(调用函数，延迟的毫秒数)
	到了指定的毫秒数后，自动执行代码
clearTimeout(定时器)
	取消 setTimeout 设定的定时器
    
    
    
//
定时调用 和 延时调用可以相互代替
定时调用 ： 隔一段时间关闭就是延时调用
延时调用  ：多次调用就是定时调用
```



### 窗口控制

```js
moveBy(水平位移量，垂直位移量)
	按照给定像素参数移动指定窗口
moveto(x,y)		：将窗口移动到指定的指定坐标(x,y)处

resizeBy(水平，垂直)			：窗口调整为指定大小
resizeTo(水平宽度，垂直宽度)	  : 当前窗口改成(x,y)大小

scrollBy(水平位移量，垂直位移量) ：将窗口中的内容按给定的位移量滚动
scrollTo(x,y)				 ：将窗口中的内容滚到指定位置
```



### 焦点控制

```js
focus		得到焦点
blur		移除焦点
```



### 打开关闭窗口

```js
open()
close()

open("URL","窗口名称"，"窗口分割")
	功能
    	打开一个新的窗口，并在窗口中载入指定 URL 地址的网页
     窗口风格
     	height	窗口高度	>= 100
		width	窗口宽度	>= 100
		left	窗口左坐标   >= 0
		top		窗口上坐标   >=0
		location 是否显示地址栏	yes/no
		menubar	  是否显示菜单栏	yes/no
		resizable  是否可以改变窗口大小  yes/no
		scollbars  是否允许出现滚动条    yes/no
		status     是否显示状态栏      yes/no
		toolbar	   是否显示工具栏		yes/no
close()
	功能
    	自动关闭浏览器窗口
	
```





### 对话框

```js
alter("提示字符串")	
	弹出一个警告框，在警告框内显示提示字符串文本

confirm("提示字符串")
	显示一个确认框，在确定框内显示提示字符串，
    	当用户点击 "确定" 按钮时，返回 true
       	当用户点击 "取消" 按钮时，返回 false 

    
prompt("提示字符串","缺省文本")
		显示一个输入框，在输入框内显示提示字符串，在输入文本框显示缺省文本，并等待用户输入
    	当用户点击 "确定" 按钮时，返回用户输入的字符串
       	当用户点击 "取消" 按钮时，返回 null 
```



### 属性

* 状态栏

    ```js
    defaultStatus	改变浏览器状态栏的默认显示
    status			临时改变浏览器状态栏显示
    ```

* 窗口位置

    ```js
    IE
    	screenLeft	声明窗口的左上角的 x 坐标
        screeenTop	声明窗口的左上角的 Y 坐标
        
        // 声明当前文档向右滚动过的像素
        document.body.scrollLeft
    	document.documentElement.scrollLeft
    	
    	// 声明当前文档向下滚动过的像素
    	document.body.scrollTop
    	document.documentelement.scrollTop
    
    !IE
    	screenX			声明窗口的左上角的 x 坐标
        screenY			声明窗口的左上角的 Y 坐标
        pageXOffset  	声明当前文档向右滚动过的像素
        pageXOffset		声明当前文档向下滚动过的像素
    FF
    	innerHeight		返回窗口的文档显示区高度
        innerWidth		返回窗口的文档显示区的宽度
        outerHeight		返回窗口的外部高度
        outerWidth		返回窗口的外部宽度
    ```

* 其他属性

    ```js
    opener
    	可以实现同域名下跨窗体之间的通讯，一个窗体要包含另一个窗体的 opener
    closed
    	当前窗口关闭时返回 true
    name 
    	设置或返回窗口的名称
    self
    	返回对当前窗口的引用
    ```

    



## navigator - 浏览器

*   浏览器对象

    ```js
    // 历史原因，大部分属性已经不能帮我们识别浏览器信息
    appCodeName			返回浏览器的代码名
    appName				返回浏览器名称
    appVersion			浏览器的平台和版本信息
    cookieEnable		返回指明浏览器是否使用 cookie 的布尔值
    platform			返回林澜起的操作系统平台
    userAgent			返回由客户机发送给服务器的 user-agent 头部的值

    
    // 一般只使用只使用 uerAgent 来判断浏览器的信息
    是一个字符串，这个字符串中有描述浏览器信息的内容，不同浏览器有不同的 userAgent
    ```
    
    

## Screen

*   显示器对象

    ```js
    availHeight			返回显示器屏幕的可用高度
    availWidth			返回显示器屏幕的可用宽度
    height				屏幕的像素高度
    width				屏幕的像素宽度
    colorDepth			屏幕颜色的位数
    ```

    

## history - 历史记录

*   属性 

    ```js
    length 当前访问过的页面的数量，关闭就没了
    ```
    
*   历史对象

    ```js
    // 操作浏览器向前向后翻页
    back()				前一个URL
    forward()			下一个 URL
    go()			    返回某个具体页面
	参数 ： n 跳转 n 个界面， 正数向前跳，负数向后跳
    ```
    
    

## location - url

*   地址 栏对象

    ```js
    // 封装的是地址栏的信息
    // 如果直接将 localtion 设置为一个完整的路径或相对路径，则页面会自动跳转到该路径，并生成相应的历史记录
    // location = http://www.baidu.com
    
    属性				设置或返回
    	hash			从 # 开始的URL
        host			主机名和当前 URL 的端口号
        hostname		URL 的主机名
        href			设置或获取：完整的  URL
        port			当前 URL 的端口号
        portocol		当前 URL 的协议
        search			从 ？ 开始的 URL, 参数
        
    方法
	assign(URL)		加载新的文档,相当于直接修改 location ,跳转到新的页面
        reload()		重新加载当前页面 ，相当于刷新，方法中传入 true 作为参数，则会强制清空缓存刷新页面
        reolace(newURL)  用新的文档替换当前文档，没有历史记录
    ```
    

## document - dom

* 文档对象

    ```js
    集合
    	anchors[]			描述对象数组
        images[]  			图片对象数组
        links[]				连接对象数组
        forms[]				表单对象数组
    
    属性
    	cookie				设置或返回与当前文档有关的所有 cookie
        domain				返回当前文档的域名
        referrer			返回载入当前文档的文档的 URL
        title				返回当前文档的标题
        URL					返回当前文档的 URL
        
    方法
    	open()		打开一个新文档，并擦除旧文档内容
        close()		关闭文档输出流
        write()		向当前文档追加文本
        writeln()	与 write 相比，在 <pre> 会追加换行
    ```

    