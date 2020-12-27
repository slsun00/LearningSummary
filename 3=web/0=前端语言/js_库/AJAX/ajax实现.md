## 客户端

### 0.实现步骤

```js
1. 创建 ajax 对象
	var  xhr = new XMLRquest();
2. 告诉 ajax 请求地址以及请求方式
	xhr.open('get','http://localhost:8080');
3. 发送请求
	xhr.send()
4. 获取服务端和客户端的响应数据
	xhr.onload = func(){
     	// 
    }
```





### 1. 创建对象

```js
var xhr = new XMLRquest();
// 老版本 IE5 和 I6 使用 ActiveX 对象
variable = new ActiveXObject("Microsoft.XMLHTTP")

// 兼容
var xmlhttp;
if (wondow.XMLHttpRquest){
    xmlhttp = new XMLHttpRquest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
}
```

#### 对象属性

```js
onreadystatechange()
	存储函数（函数名），当 readyState 属性改变，就会调用该函数

readyState
	存有 XMLHttpRequest 的状态，从 0 到 4 发生变化
    0 请求未初始化
    1 服务器连接已建立
    2 请求已接收
    3 请求处理中
    4 请求已完成，且响应已就绪
status
	200  OK
    404   未找到的页面
// 改变
    会触发四次变化
 
// 1. 响应行属性
xhr.status // 状态码
xhr.statusText // 状态字符串
xhr.getAllResponseHeaders() // 所有响应头
xhr.response   // 响应体
```

#### 多JAXA任务

```js
// 网站上存在多个 ajax 任务 ，就应该为 XMLHttpRequest 对象编写一个标准函数
// 为每个 AJAX 任务调用该函数

function myFunction(){
    loadXMLDoc("ajax_info.txt",function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("mydiv").innerHTML = xmlhttp.responseText;
        }
    });
}
```



### 2. 请求方式及url

```go
// 对请求的类型、URL 以及是否异步处理请求
// XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true
xhr.open(method,url,async)
	method ：请求的类型，GET 或者 POST
	url   : 文件在服务器上的位置
    async :   // 这个可以省略，默认使用 true
        true   异步
        false  同步    // 尽量不要用


//-------------------------------
xhr.open("GET","text.txt",true);
xhr.send();

```

### 3. 发送

```js

// 将请求发送到服务器
xhr.send(string)
	string 仅适用于 POST 请求

```

### 4.响应数据处理

```js
// 事件绑定，处理服务器返回的结果
// onreadystatechange 事件被触发 5 次（0 - 4），对应着 readyState 的每个变化。
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        // 判断响应状态码 200 404 。。
        if (xhr.status >= 200 && xhr.status < 300){
            // 处理结果 行 、头、空行 、体

        }
    }
}


// 响应属性
// 获取来自服务器的响应，使用属性 responseText  responseXML
// 非 xml 就用字符串
xhr.responseText	获得字符串形式的响应数据 ,
    
// XML ，需要最作为 XML 对象进行解析，注意使用 responseXML 解析
xhr.responseXML		获得 XML 形式响应数据
```

#### XML

```js

xmlDoc = xmlhttp.responseXML

x= xmlDoc.getElementByTagName("ARTIST");
for (i=0;i<x.length;i++) {
    txt =text + x[i].childNodes[0].nodeValue +"<br />";
}
document.getElementById("myDiv").innerHTML = txt
```



#### json 处理

```js
// 手动设置 ，
	//在 xhr.onreadystatechange  函数设置处理的
	let data = JSON.parse(xhr.response);
    result.innerHTML = data.name;  // name 是 json 一个字段的 key

// 自动转换 ， 
	// 在 xhr.open()  之前设置 响应体数据 的类型
	xhr.responseType = 'json';
	//在 xhr.onreadystatechange  函数设置处理的
    //console.log(xhr.response)   打印出来的就是json数据
	result.innerHTML = x.response.name
```



## 其他

### 请求头设置

```js
// 向请求添加 HTTP 头
// 注意这个必须要设置在 open 和 send 之间
xhr.setRequestHeader(header,value)	
    header: 规定头的名称，请求体类型，
    value: 规定头的值，请求的值
    
// 实际例子
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.setRequestHeader("naem","666");
xhr.send("fname=Bill&lname=Gates");

// 请求请求报文中添加了不是预定义的类型，就会报错 ：Provisional headers are shown ,
// 如果需要实现，就需要后端实现
```

### 文件传输

```js
// 请求
xmlhttp.open("GET","ajax_test.asp",true)
	该文件可以是任何类型的文件，（在传回响应之前，能够在服务器上执行任务）。
// 发送
使用 FormData ,可以使用 js 的一些键值对来模拟一系列表单控件
var formData = new FormData()
fromData.append("formName",$("#upload_file")[0].files[0]);
$.ajax({
    url :"/test_upload",
    type : "POST",
    data :fromData,
    contentType :false,     //  避免失去分界符
    processData : false,    //false 不进行序列化data
    success:function(data){
        // 服务端返回的上传成功的 json 的信息
        if (data["code"] == 200){
            alter(data["message"])
        }
    },
    err:function(data){
    	alert(data{"message"})
	}
})

// 服务端设置
c.Data["json"] = map[string]string{"code":200,"message":"上传成功"}
c.ServeJSON()
```

### 

## 服务器响应

```js
// 这个看 express 框架设置把
```

## 问题

### IE 缓存

```js
// ie 的缓存会出现问题，无法及时获取数据
// 根据不同时间，去发送请求，而不会走本地缓存
xhr.open("GET","http://localhost:8080/ie?t="+Date.now())
```

### 请求超时与异常处理

```js
// 请求超时和异常的时候，给出提示


// 超时设置 ， 2s 之内没有相应就返回结果
	xhr.timeout = 2000; 
// 超时回调
	xhr.ontimeout = function(){
        alert("网络异常，请稍后重试")
    }

// 网络异常回调
	xhr.onerror = function(){
        alert("网络异常，请稍后重试")
    }
```



### 取消请求

```js
// 使用obort 这个需要绑定事件
btn.onclick = function(){
    xhr.abort()
}
```

### 重复发送请求

```js
// 标识变量

const btns = document.querySelectorAll("button")
let isSending = false; // 是否正在发送 ajax 请求

btns[0].onclick = function(){
    // 判断表示变量
    if (isSending) {
        x.abort();   
    };
    xhr = new XMLHttpRequest();
    // 修改变量的值
    isSending = true;
    xhr.open("GET",'http:localhost:8080/delau');
    x.onreadstatechange = function(){
        if (x.readyState === 4) {
            // 修改标识变量
            isSending = false;
        }
    }
    
}
```





























































