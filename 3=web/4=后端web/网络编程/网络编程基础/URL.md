## URL

## 名称

* URL  ： Uniform Resource Locator
* 统一资源定位符 
* 也就是路径(相对路径、绝对路径、本地路径、服务器路径）
* 描述一个网络上的资源,



## 作用

*   一个给定的独特资源在 Web 上的地址
*   理论上说，每个有效的 URL 都指向一个唯一的资源。这个资源可以是一个 HTML 页面，一个 CSS 文档，一幅图像，等等





## 基本格式

```go
// 标准格式
    scheme://host[:port#]/path/.../[?query-string][#anchor]
	protocol :// hostname[:port] / path / [;parameters][?query]#fragment
   [协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
// 完整格式
    [协议类型]://[访问资源需要的凭证信息]@[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]

scheme/protocol    指定低层使用的协议(例如：http, https, ftp)
host 主机名          
	HTTP服务器的IP地址或者域名
	主机名前也可以包含连接到服务器所需的用户名和密码（格式：username:password@hostname）

port 端口号
	整数，可选，省略时使用方案的默认端口
	如果使用了别的端口，必须指明，例如 		http://www.cnblogs.com:8080/
path           访问网络服务器上文件资源的路径
	Web的早期阶段，像这样的路径表示Web服务器上的物理文件位置。
	如今，它主要是由没有任何物理现实的Web服务器处理的抽象。
parameters
	介绍 
		以 ； 开头部分
		& 符号分隔的键/值对列表
	作用
		用于指定特殊参数的可选项。
query-string  
	介绍
		以 ？ 开始
		发送给http服务器的额外参数数据，就是 url 上的参数
		给动态网页（如使用CGI、ISAPI、PHP/JSP/ASP/ASP.NET等技术制作的网页）传递参数
	形式 
		& 符号分隔的键/值对列表
	作用
		在返回资源之前，Web服务器可以使用这些参数来执行额外的操作
		每个Web服务器都有自己关于参数的规则，
		唯一可靠的方式来知道特定Web服务器是否处理参数是通过询问Web服务器所有者。
anchor         锚
	表示资源中的一种“书签”，给浏览器显示位于该“加书签”位置的内容的方向
	＃后面的部分（也称为片段标识符）从来没有发送到请求的服务器。
	个网页中有多个名词解释，可使用fragment直接定位到某一名词解释。

http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
含义
	scheme 协议 ： http
	host 域名/IP :  www.example.com
	port 端口 ： :80
	path 网络服务器上文件路径  ： /path/to/myfile.html
	params 参数    ?key1=value1&key2=value2
	anchor	锚 #SomewhereInTheDocument	

// 理解
	能想到一个URL类似普通信件的地址：协议代表你要使用的邮政服务，域名是城市或者城镇，端口则像邮政编码；路径代表着你的信件所有递送的大楼；参数则提供额外的信息，如大楼所在单元；最后，锚点表示信件的收件人
```

### 查询

```js
query-string
	（GET模式的窗体参数，以“?”字符为起点，每个参数以“&”隔开，再以“=”分开参数名称与资料，通常以UTF8的URL编码，避开字符冲突
```

### 斜杠

```js
web 中 / 斜杠 是一种绝对路径。

如果被浏览器解析，得到的地址是：http://ip:port/
	<a href="/">斜杠</a>
如果被服务器解析，得到的地址是：http://ip:port/工程路径
	// java 中
	1、<url-pattern>/servlet1</url-pattern> 
     2、servletContext.getRealPath(“/”); 
     3、request.getRequestDispatcher(“/”);
特殊情况： 
	response.sendRediect(“/”); 把斜杠发送给浏览器解析。得到 http://ip:port/
```



## url 编码

```go
1. 每个 URL  都是单独的字符串，所以 URL 中不能包含空格
2. （？） 和 （#） 有特殊含义，不能用于其他，可以用 URL 编码进行转换
    URL 编码 :  百分号编码
    空格 ： ASC 编码字节值为 32 ， 十六进制为 20 ，所以 URL 处理后就变成了 %20
```

## 使用

*   改变 URL 但是不刷新页面（不向后端请求)

    ```js
    1. 通过更改 URL ，但是阻止页面刷新
    	location.href 更改一定会刷新的
    不更新
    	// 通过 hash 不会刷新页面进行服务器请求一套资源，而是通过前端路由的映射规则 
    	// 查找需要进行渲染的组件 ，放到页面上渲染
    	location.hash = 'aaa'   
    
    
    	// html5 存储就像是栈
    	history.pushState(data,title,?url)
    
    	// url 替换，不不留历史记录，不可后退
    	history.replace(data,title,?url)
    
    	history.go(-1) // ==> history.back()
    	history.go(1)  // ==> history.forward()
    ```

## 分类

### 介绍

```js
RL的必需部分在很大程度上取决于使用URL的上下文。
	在浏览器的地址栏中，网址没有任何上下文，因此您必须提供一个完整的（或绝对的）URL，但不需要包括协议（浏览器默认使用HTTP）或端口（仅当目标Web服务器使用某些异常端口时才需要），但URL的所有其他部分都是必需的。
    浏览器已经有文档自己的URL，它可以使用这些信息来填写该文档中可用的任何URL的缺失部分
	如果URL的路径部分以“/”字符开头，则浏览器将从服务器的顶部根目录获取该资源，而不引用当前文档给出的上下文。
```



### 绝对 URL (绝对路径)

*   html绝对路径

    ```js
    介绍
    	HTML绝对路径(absolute path)指带域名的文件的完整路径。
    例子
        完整网址	https://developer.mozilla.org/en-US/docs/Learn
        隐去协议	//developer.mozilla.org/en-US/docs/Learn
            浏览器将使用与用于加载该URL的文档相同的协议来调用该URL
        隐去域名	/en-US/docs/Learn
            浏览器将使用与用于加载托管该URL的文档相同的协议和相同的域名
    注意
    	假设你注册了域名baidubaikewww.seo-xy . com，并申请了虚拟主机，你的虚拟主机提供商会给你一个目录，比如www，	这个www就是你网站的根目录。
    ```

*   本地文件绝对路径

    ```js
    介绍
    	是从盘符开始的路径
    例子
    	C:\windows\system32\cmd.exe
    ```

    



### 相对URL (相对路径)

*   HTML

    ```js
    设从位于以下URL的文档中调用UR
    	https://developer.mozilla.org/en-US/docs/Learn
    z子资源访问
    	Skills/Infrastructure/Understanding_URLs
    	// 该URL不以/开头，浏览器将尝试在包含当前资源的子目录中查找文档
    	https://developer.mozilla.org/en-US/docs/Learn/Skills/Infrastructure/Understanding_URLs
    ```

*   本地文件

    ```js
    是从当前路径开始的路径
    
    . 表示当前路径，在通常情况下可以省略，只有在特殊的情况下不能省略
    .. .为父目录
    ```

### 标识符

```js
相对路径是： 
    . 表示当前目录 
    .. 表示上一级目录 
	资源名 表示当前目录/资源名
// 注意
在实际开发中，路径都使用绝对路径，而不简单的使用相对路径。 1、绝对路径 2、base+相对
```





斜杠

## 区别

```js
URL 中有 path , 这是两个东西
```

