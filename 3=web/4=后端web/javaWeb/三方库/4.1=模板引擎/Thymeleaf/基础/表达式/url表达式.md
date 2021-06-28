## 概述

```java 
Thymeleaf标准方言(称为Standard和SpringStandard)
    提供了一种在Web应用程序中轻松创建URL的方法，以便它们包含任何所需的URL工件
    通过连接表达方式来完成
   
地址的跳转， 

使用
    // 会发起请求的的标签
    th:href
	src
	        
    
绝对地址
	@{http://...}
	@{https://...}      
相对地址    
    相对位于应用根路径： 
    	@{/}    // 相对于整个应用根目录
	相对于当前路径：
         @{../}
		 @{./}
     相对于服务器
         @{~/}
```

## 绝对地址

```java
介绍
    用于创建到其他服务器的链接。
    它们需要指定一个协议名称(http://或https://)开头。
                 
	<a th:href="@{https://www.baidu.com/thymeleaf/}">
 
修改
	上面链接不会被修改
     除非在服务器上配置了URL重写过滤器，并在HttpServletResponse.encodeUrl(...)方法中执行修改。
结果呈现
	<a href="https://www.baidu.com/thymeleaf/">
                 
1. 绝对(或协议相对)URL，应该添加什么值？
   由响应过滤器定义URL重写
        在基于Servlet的Web应用程序中，对于每个输出的URL(上下文相对，相对，绝对…)，
        在显示URL之前，Thymeleaf总是调用HttpServletResponse.encodeUrl(...)机制
        这意味着一个过滤器可以通过包装HttpServletResponse对象来为应用程序执行自定义的URL重写。             
```

## 相对路径

### 应用跟路径

```java
介绍
    这些URL是一旦安装在服务器上，就会与Web应用程序根相关联URL
    上下文相关的URL以/字符开头
    
例子
    // 服务器启动在 localhost:8080/link/test
    // test 页面中有以下连接
    // 相对连接：在这种情况下，应用程序上下文将不会被加到URL的前面     
    <a th:href="@{query}"></a>
        localhost:8080/link/query  当前资源的地址 + 要访问的地址
    <a th:href="@{/query}"></a>   
        localhost:8080/query
    <a th:href="@{./query}"></a>
        localhost:8080/link/test/query
    <a th:href="@{../query}"></a>
        localhost:8080/link/query
            
    <a th:href="@{http://www.baidu.query}"></a>        
        http://www.baidu.query

    
例子
    如果将一个名称为myapp.war的文件部署到一个Tomcat服务器中，
    程序访问通过： URL:http://localhost:8080/myapp来访问
	上下文名称：myapp


// 部署在Web服务器的/myapp上下文中的Web应用程序
   <a th:href="@{/order/list}">...</a> 
       // 等价于
       <a href="/myapp/order/list">...</a>
       // 需要保持会话，并且cookie未启用(或者服务器还不知道)，那么生成的格式为
	<a href="/myapp/order/list;jsessionid=s2ds3fa31abd241e2a01932">...</a>
```

### 服务器 url

```java
介绍
    服务器相关的URL与上下文相关的URL非常相似，
    只是它们不假定URL要链接到应用程序上下文中的资源，因此允许链接到同一服务器中的不同上下文:

例子
    <a th:href="@{~/billing-app/showDetails.html}">
    // 当前应用程序的上下文将被忽略
    // 因此尽管应用程序部署在http:// localhost:8080 / myapp，但该URL将输出:
        <a href="/billing-app/showDetails.html">
	// 也是服务器相对的(同样，没有应用程序上下文的前缀)
	<a th:href="@{~/contents/main}">...</a>
```

## url 操作

### 默认协议

```java
介绍
    将保持用于显示当前页面的协议(HTTP，HTTPS)。
    它们通常用于包括样式，脚本等外部资源:
例子
    <script th:src="@{//scriptserver.example.net/myscript.js}">...</script>


```

### 参数

```java
介绍
    // 写在 表达式结尾加()，多个参数使用 , 分割
    （） 转义为 ？
    ，  转义为 &
例子
    // 可以使用多个，用逗号分隔
	<a th:href="@{/order/details(id=${orderId},type=${orderType})}">...</a>
	!-- 注意＆符号会在标签属性中进行HTML转义... -->
       <a href="/myapp/order/details?id=23&type=online">...</a>


```

### 锚点 -- 片段标识符

```java
介绍
    片段标识符可以包含在URL中，包含参数和不包含参数。 
    它们将始终包含在网址的基础上
    # 后面的都会设为 锚点，但是含有的 （） 会翻译为 ？
    
例子
    <a th:href="@{/home#all_info(action='show')}">
	// 结果   <a href="/home?action=show#all_info">

```



### 重写

```java
Thymeleaf允许在应用程序中配置URL重写过滤器，它通过调用Thymeleaf模板生成的每个URL的Servlet API的javax.servlet.http.HttpServletResponse类中的response.encodeURL()方法来实现。
下面在Java Web应用程序中支持URL重写操作的标准方式，并允许URL:

	自动检测用户是否启用了Cookie，
        如果未启用或者如果它是第一个请求并且cookie配置仍未知。
        则将;jsessionid=...片段添加到URL。
     在需要时自动将代理配置应用于URL。
     使用不同的CDN设置，以便链接到分布在多个服务器中的内容。]

```

### 占位变量

```java
url 中可以使用表达式，表示不确定的值
    <a th:href="@{/order/details(id=${order.id})}">
	// 等价： <a th:href="@{'/order/details'(id=${order.id})}"> 可以这样拼串？？


    
```



