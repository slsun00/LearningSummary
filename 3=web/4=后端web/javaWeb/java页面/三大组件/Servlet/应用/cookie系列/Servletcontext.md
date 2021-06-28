## 介绍

```java
ServletContext
    是一个全局的储存信息的空间，服务器开始就存在，服务器关闭才释放
    。    
    ServletContext对象通常也被称之为context域对象

    
```

![image-20210312191904203](image-20210312191904203.png)





## 操作

### 生命周期

```java
ServletContext中的属性的生命周期从创建开始，到服务器关闭结束。
```

### 创建/获取

```java
WEB容器在启动时，
    会为每个Web应用程序都创建一个对应的ServletContext，代表当前Web应用，并且它被所有客户端共享
    所有Servlet共享同一个ServletContext对象, 可以通过ServletContext对象来实现通讯
    
内容
    你可以把它想象成一张表，这个和Session非常相似：
    名字（String） 值Object
获取
    this.getServletContext(); 
	this.getServletConfig().getServletContext();
语法例子
    
    response.setContentType("text/html;charset=utf-8");
    PrintWriter out = response.getWriter();
    // 取出ServletContext的某个属性
    //1.首先获取到ServletContext
    ServletContext servletContext = this.getServletContext();
    //2.取出属性
    String name = (String)servletContext.getAttribute("name");
    out.println("name="+name);

和 cookie 区别
    只要不关闭服务器，不同的浏览器访问的结果都是样的
```



### 销毁

```java
ServletContext对象被销毁
	web应用关闭
    Tomcat关闭
    Web应用reload的时候，
```



## 方法

```java
添加属性：setAttribute(String name, Object obj);

得到值：getAttribute(String name)，这个方法返回Object

删除属性：removeAttribute(String name)
```

