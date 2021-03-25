# 节点操作

## 介绍

```js
方式一
	根据 DOM 提供的方法
方式二
	节点间的层级关系
```



## 增

### 创建

```js
添加新元素，需要先创建该元素，然后把它追加到一个查找到的节点
三种方法
方法一
	document.createElement(元素标签)		：创建元素节点
    
方拾二
	innerHTML
    
方式三
	document.write('<div>123</div>')
	页面加载完毕，再调用这句话，会重绘页面内容，只显示元素标签中的内容
方法
    document.TextNode(文本内容)				：创建文本节点
   
效率比较
	innerHTML+数组 > createElement > innerHTML
属性
    attributes	  节点(元素)的属性节点

//--------------------------------------------------------------
<p id="p1">this is a paragraph </p>
<script>
	// 创建元素节点
    var para = document.createElement("p");
	// 文本节点
	var node = document.createTextNode("新文本中");
    // 属性节点添加文本
    para.appendChild(node);

	// 查找要添加入的父节点
	var element = documet.getElementById("p1");
    element.appendChild(para);
</script>
```



### 插入增加

```js
appendChild(所添加的新节点)	 	
	：向结点的子节点列表的末尾添加新的子节点
insertBefore(所添加新节点，一致子节点)
	: 在一直结点前插入一个新的子节点
```

## 删除

```js
removeChild(child) : 删除一个字节点，返回删除结点


// 删除节点需要找到父节点

<div id="div1">
<pid="p1">this is a paragraph </p>    
</div>

<script>
    // 父节点
    var patent = document.getElementById("div1");
	// 要删除的节点
	var child = docunment.getElementById("p1");
    // 删除操作
    parent.removeChild(child);
</script>
```



## 修改

### 替换

```js
repalceChild( 要插入的新元素，将被替换的老元素)
	将某个子结点替换成另一个
    
    
<div id="div1">
    <p id="p1"> this is a paragraph </p>
</div>

<script>
        // 创建带信息的新节点，元素节点 - 文本节点 - 合并
        var para = document.createElement("p")
		var node = document.createTextNode("new node")
        para.appendChild(node)

	   // 添加
		// 父节点
		var parent = document.getElemetById("div1")
        // 查找要替换的节点
        var child = document.getElementById("p1")
        // 进行替换
        parent.replaceChild(para,child)
        
</script>
```

### 复制

```js
结点.cloneNode(true/false)
	创建指定结点的副本，
    true : 复制当前节点机器所有子节点 
    false : 仅复制当前节点, 默认
```



## 查询

### document

```js
// 方法 
    getElementById(id)		     通过 id 获取一个元素对象
    getElementsByTagName(标签名)       通过标签名获取一组元素节点对象 <p>
    getElementsByName(name属性)	   		 通过name 属性获取一组节点对象
    // html5
    getElementByClassName(class类名)
	querySelector('选择器')   // 根据选择器返回第一个元素对象
	querySelectorAll('选择器') // 根据指定选择器所有对象
    
    
// 属性 ，每个节点都有
    nodeName     规定节点的名称(大写字母)，只读
    nodeValue     规定节点的值
    nodeType  返回节点的类型，只读

文档
	document.documentElement  // 全部文档,html
	document.body             // 文档主体
	document.all			//

注意
 1.   getElementsByName()  对于 class 属性，需要用 classnane
 
 语法例子
 <script>
     document.getElementById("2") // 返回的是一个对象
 </script>
```



### 节点指针

```js
父节点
	节点.parentNode
子节点
    节点.firstChild		:获取元素首个子结点。包括空白文本节点
    节点.lastChild		:最后一个子结点
    
    节点.firstElementChild	返回第一个子元素节点 IE9
    节点.lastElementChild	     返回最后一个子元素节点  IE9
    
    节点.childNodes		:元素的子结点类表，所有的，包括元素、文本等,空白也会作为文本
    节点.children			:元素的子结点（实际使用）
兄弟结点
    结点.previousSibling	 : 获取已知结点的前一个结点，元素、文本等节点
    结点.nextSibling		 : 获取已知结点的后一个结点，元素、文本等节点
    
    结点.previousElementSibling	   上一个兄弟结点
    节点.nextElementSibling  下一个兄弟结点
    // 兼容性 封装函数
    function getNextElementSibling(element){
        var el = element;
        while (el = el.nextSibling) {
            if (el.nodeType == 1){
                return el;
            }
        }
        return null;
    }

```











# 属性值操作

### 介绍

```js
// 主要是两种方法
.  			固有属性
特定函数	  自定义属性
```

### 点操作

#### 修改内容

```js
修改 HTML = 改变元素、属性、样式、事件
改变 CSS 样式 、 HTML 内容 、HTML 属性
HTML 元素创建 、删除
事件改变(处理程序)

内容
	标签内部的内容，<div> 内容 </div>

// HTML 元素内容 ：获得节点，然后修改节点的文本值
	属性：	element.innerHTML     
		节点(元素)的文本值   任意的 HTML 元素，保留空格和换行
	    对于字节数标签没有意义
    
    属性  element.innerText       
		获取元素内部的文本内容，他会在自动将 html 去除，
    

```

#### 修改属性

```js
介绍
	获取元素标签以后，可以通过 . 来进行属性操作

<div id="lb">李白</div>
<img id="img" src="./01.jpg">
var lb = document.getElementById('lb')
var img = document.querySelector('img')
ldh.onclick = function(){
    // 元素修改
    img.src = 'index.html'
}
```

#### 样式属性

```js
element.style  行内样式，css 样式,都是写在 <style></style> 中
element.className 类样式操作


// HTML 样式 :获得节点，使用属性
    属性：style
    document.getElementById("p1").style.color = "blue";
	// 直接更改类名
	 document.getElementById("p1").className = 'change'
	// 保留原类名， 多类名
	 document.getElementById("p1").className = '原类名 新类名'
```



### 函数操作

#### 创建

```js
    document.createAttribute(元素属性)		：创建属性节点
```



#### 查询获取

```js
getAttribute(元素属性名)			获取元素中指定属性的属性值
setAttribute()			把指定属性设置或修改为指定的值

// 属性 ，每个节点都有
    nodeName     规定节点的名称(大写字母)，只读
    nodeValue     规定节点的值
    nodeType  	  返回节点的类型，只读
    
 元素结点.getAttribute()   
```

#### 设置

```js
元素节点.setAttribute(属性名，属性值)
	创建或改变元素节点的属性
```

#### 删除

```js
元素节点.removeAttribute(属性名)
	删除元素中指定属性
```



# 文本操作

```js
appendData(string) 		将 string 插入到文本节点的末尾处
insertData(offset,string) 从 offset指定位置插入 string

deleteData(offset,count)  从 offset 起删除 count 个字符

replaceData(offset,count,string)  从 offset 开始将count个字符用string替代
splitData(offset)   从 offset 起将文本节点分成两个节点

substring(offset,count)  返回由 offset 起的 count 个节点
```



# 自定义属性

## 介绍

```js
介绍
	为了保存并使用数据，有些数据可以保存到页面中而不用保存到数据库中
h5 之前
	<div index="1"></div>
h5 规定
	自定义属性，以 data- 开头作为属性名并且赋值
	<div data-index="1"></div>
```

## 操作

### 获取

```js
// 兼容性获取
	element.getAttribute('data-index')
// h5新增 ie11
	// 只有 data 开头的
	element.dataset.index
	element.dataset['index']
	// 注意
	// 自定义属性里面有多个 - 连接的单词，获取的时候采取 驼峰命名法
	data-list-name-age  
		element.dataset.listNameAge
		dataset['listNameAge']
```



# 事件操作

```js
事件源.事件类型 = 事件处理程序
```

## 鼠标事件

### 鼠标事件对象

```js
介绍
	MouseEvent
相关属性
	e.clientX : 鼠标相当于浏览器窗口可视区的 X 坐标
	e.clientY : 鼠标相当于浏览器窗口可视区的 Y 坐标    
    e.pageX e.pageY : 鼠标相对于文档页面 IE9+
    e.screenX e.screenY : 鼠标相对于电脑屏幕的
```



### 禁止鼠标右键

```js
// contextmenu 控制显示上下文菜单， 用于取消默认的上下文菜单
document.addEventListener('contextmenu', function(e){
    e.preventDefault()
})
```

###  禁止鼠标选中

```js
document.addEventListener('selectstart', function(e){
    e.preventDefault()
})
```

### 其他事件

```js
mouseenter  mouseleave
	不会冒泡
mouseover
	冒泡
```



## 键盘事件

### 键盘对象

```js
键盘对象的 keyCode 可以得到相应键的 ascii 码
```



### 常用事件

```js
onkeyup 键盘松开时触发
onkeydown 键盘按下触发
onkeypress 按键按下触发， 不识别功能键，比如：ctrl shift 等

// 三个事件执行顺序, 同时写这三个
keydown -- keypress -- keyup

注意
	keyup keydown 不区分大小写
    keydown keypress 文本框，： 事件触发的时候，文字还没有落入文本框内
```

