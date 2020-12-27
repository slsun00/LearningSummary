## 为什么用

*   Cookie 有很多，就会增加客户端和服务端的数据传输量 ， 加以浏览器限制，我们不能在 Cookie 中存储过多信息
*   在服务端存储用户数据，会传递一个特殊的 Cookie , 这个 Cookie 对应服务端一个 Session ,通过这个就可以找到用户信息，进而知道是哪个用户再发送请求

## 运行原理

*   客户端第一次向服务端发送请求 
    *   服务端创建 Session , 给它设置一个全球唯一的 ID（可用UUID设置）
*   服务端发送一个 HttpResponse 响应到客户端
    *   响应头中有 set-Cookie ,cookie 的 Value 值是 Session 的 ID在建瓯
*   客户端保存 cookie 
    *   随后发送请求时，请求头中就包含 Cookie 
*   服务器得到 cookie
    *   根据 cookie的 Value 值找到服务器中对应的Session ,  区分不同用户













































































