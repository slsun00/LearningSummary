## 获取节点

### document

```js
// 方法 
    getElementById(id)		     通过 id 获取一个元素对象
    getElementsByTagName()       通过标签名获取一组元素节点对象 <p>
    getElementsByName()	   		 通过name 属性获取一组节点对象
    getElementByClassName()
    
    
// 属性 ，每个节点都有
    nodeName     规定节点的名称(大写字母)，只读
    nodeValue     规定节点的值
    nodeType  返回节点的类型，只读

文档
	document.documentElement  // 全部文档,html
	document.body             // 文档主体
	document.all			//
	document.querySelector()	// 根据选择器查找
	document.querySelectorAll()
注意
 1.   getElementsByName()  对于 class 属性，需要用 classnane
```



### 节点指针

```js
父节点.firstChild		:获取元素首个子结点。包括空白文本节点
父节点.lastChild		:最后一个子结点
父节点.childNodes		:元素的子结点类表

兄弟结点.previousSibling	 : 获取已知结点的前一个结点
兄弟结点.nextSibling		 : 获取已知结点的后一个结点

子结点.parentNode			  : 已知结点的父节点

注意
	1. 节点.childNodes
		空白也会作为文本
```





## 创建

```js
添加新元素，需要先创建该元素，然后把它追加到一个查找到的节点

方法
    document.createElement(元素标签)		：创建元素节点
    document.createAttribute(元素属性)		：创建属性节点
    document.TextNode(文本内容)				：创建文本节点

属性
    parentNode    节点(元素)的父节点
    childNodes    节点(元素)的子元素
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

## 修改

```js
修改 HTML = 改变元素、属性、样式、事件
改变 CSS 样式 、 HTML 内容 、HTML 属性
HTML 元素创建 、删除
事件改变(处理程序)

// HTML 元素内容 ：获得节点，然后修改节点的文本值
	属性：	innerHTML     节点(元素)的文本值   任意的 HTML 元素
    对于字节数标签没有意义
    
    属性  innerText       获取元素内部的文本内容，他会在自动将 html 去除
    
// HTML 样式 :获得节点，使用属性
    属性：style
    document.getElementById("p1").style.color = "blue";
```



## 插入增加

```js
appendChild(所添加的新节点)	 	
	：向结点的子节点列表的末尾添加新的子节点
insertBefore(所添加新节点，一致子节点)
	: 在一直结点前插入一个新的子节点
```



## 删除

```js
removeChild(要删除的节点) 	:删除指定的节点


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

## 替换

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

## 复制

```js
需要被复制的结点.cloneNode(true/false)
	创建指定结点的副本，
    true : 复制当前节点机器所有子节点 false : 仅复制当前节点
```

## 属性操作

### 查询获取

```js
getAttribute(元素属性名)			获取元素中指定属性的属性值
setAttribute()			把指定属性设置或修改为指定的值

// 属性 ，每个节点都有
    nodeName     规定节点的名称(大写字母)，只读
    nodeValue     规定节点的值
    nodeType  	  返回节点的类型，只读
    
 元素结点.getAttribute()   
```

### 设置

```js
元素节点.setAttribute(属性名，属性值)
	创建或改变元素节点的属性
```

### 删除

```js
元素节点.removeAttribute(属性名)
	删除元素中指定属性
```



## 文本操作

```js
appendData(string) 		将 string 插入到文本节点的末尾处
insertData(offset,string) 从 offset指定位置插入 string

deleteData(offset,count)  从 offset 起删除 count 个字符

replaceData(offset,count,string)  从 offset 开始将count个字符用string替代
splitData(offset)   从 offset 起将文本节点分成两个节点

substring(offset,count)  返回由 offset 起的 count 个节点
```

