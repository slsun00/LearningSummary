## 介绍

* Session 就一个接口（HttpSession）。 
* Session 就是会话。
* 它是用来维护一个客户端和服务器之间关联的一种技术。 
* 每个客户端都有自己的一个 Session 会话。

## 为什么用

*   Cookie 有很多，就会增加客户端和服务端的数据传输量 ， 加以浏览器限制，我们不能在 Cookie 中存储过多信息
*   在服务端存储用户数据，会传递一个特殊的 Cookie , 这个 Cookie 对应服务端一个 Session ,通过这个就可以找到用户信息，进而知道是哪个用户再发送请求

## 特点

* 服务端会给它设置一个全球唯一的 ID（可用UUID设置）
* 存储在服务端, 经常用来保存用户登录之后的信息
* 底层是基于 Cookie 技术实现的

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
    
* 服务端

    * 接收请求，cookie 的 Value 值是 Session 的 ID,  区分不同用户

        













































































