## 介绍

```java
介绍
   // HttpSession
   Session 就是会话， 
    用来维护一个客户端和服务器之间关联的一种技术
    每个客户端都有自己的一个 Session 会话
    
区别 cookie
   Session是记录在服务端的，
   Cookie是记录在客户端的。
    
使用场景
    当访问服务器否个网页的时候，会在服务器端的内存里开辟一块内存，这块内存就叫做session，
    而这个内存是跟浏览器(这个浏览器指的是浏览器窗口，或者是浏览器的子窗口)关联在一起的。
    
    只允许当前这个session对应的浏览器访问，就算是在同一个机器上新启的浏览器也是无法访问的。
    而另外一个浏览器也需要记录session的话，就会再启一个属于自己的session
```



## 为什么用

*   Cookie 有很多，就会增加客户端和服务端的数据传输量 ， 加以浏览器限制，我们不能在 Cookie 中存储过多信息
*   在服务端存储用户数据，会传递一个特殊的 Cookie , 这个 Cookie 对应服务端一个 Session ,通过这个就可以找到用户信息，进而知道是哪个用户再发送请求

## session

###  结构

```java
设置
    // session的ID号码，session的独一无二号码
    * 服务端会给它设置一个全球唯一的 ID（可用UUID设置）
    * 存储在服务端, 经常用来保存用户登录之后的信息
    * 底层是基于 Cookie 技术实现的
值
    // 服务器里面的一块内存，内存里面能放任何东西，只要是名值对就可以了。
    session里面的名字永远都是String类型
场景描述
    当访问一个页面的时候给浏览器创建一个独一无二的号码，也给同时创建的session赋予同样的号码。
    这样就可以在打开同一个网站的第二个页面时获取到第一个页面中session保留下来的对应信息
    （理解：当访问第二个页面时将号码同时传递到第二个页面。找到对应的session。）。
    这个号码也叫sessionID，session的ID号码，session的独一无二号码。

// java 中的一些关于 session 的方法
    isNew()：是否是新的Session，一般在第一次访问的时候出现
    getid()：拿到session，获取ID
    getCreationTime()：当前session创建的时间
    getLastAccessedTime()：最近的一次访问这个session的时间。
    getRrquestedSessionid： 跟随上个网页cookies或者URL传过来的session
    isRequestedSessionIdFromCookie()：是否通过Cookies传过来的
    isRequestedSessionIdFromURL()：是否通过重写URL传过来的
    isRequestedSessionIdValid()：是不是有效的sessionID
 
```

### 生命周期

```jav
没有设置保留时间
	窗口关闭就消失
要设置保留时间	
```



## session 实现

### 概述

```java
实现方式有两种
    第一种：通过cookies实现
    第二种：通过URL重写来实现
```

### cookie 实现

```java
方式
    session的id 放在cookie里面
	当允许浏览器使用cookie的时候，session就会依赖于cookies，
    当浏览器不支持cookie后，就可以通过第二种方式获取session内存中的数据资源。
原因
    临时 cookie 会在浏览器关掉的时候消失
    就是说session本来就是当浏览器关闭即消失的，所以可以用临时的cookie存放
```

### URL重写的方式

```java
介绍
    是通过硬编码的方式实现，各个语言实现的方式大同小异
    
// java 为例
通过response.encodeURL()方法
    // 作用
    1. 转码
    	转中文的编码，或者一些其他特殊的编码
    2. URL后面加入sessionID
    	// 每一次访问的时候都会将sessionID拼接在 url 后面传过来了， 没必要用 cookie 可
    	若想程序中永远支持session，那就必须加上encodeURL()，
    	当别人禁用了cookie，一样可以使用session。
```

### 规则

```java
如果浏览器支持cookie，创建session多大的时候，会被sessionID保存再cookie里。只要允许cookie，session就不会改变，如果不允许使用cookie，每刷新一次浏览器就会换一个session（因为浏览器以为这是一个新的链接）
如果不支持cookie，必须自己编程使用URL重写的方式实现session
Session不像cookie一样拥有路径访问的问题，同一个application下的servlet/jsp都可以共享同一个session，前提下是同一个客户端窗口。

```



  







## 执行流程

### 首次请求

* 客户端
    * 向服务端发送请求 
* 服务端
    * 创建 Session , 再创建一个 cookie, cookie 的 Value 值是 SessionID
    * SessionID (通过 cookie )包含到HttpResponse 响应到客户端
    * 响应头中有 set-Cookie ,
* 客户端
    * 接收存储 Cookie，

### 非首次请求

*   客户端

    * 向服务端发送请求 
    * 请求头中就包含 Cookie , cookie 中有  sessionID 

*   服务端

    * 接收请求，cookie 的 Value 值是 Session 的 ID,  区分不同用户





































































