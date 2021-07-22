## 介绍

```java
HTTP 是一种"无状态"协议，
这意味着每次客户端检索网页时，客户端打开一个单独的连接到 Web 服务器，服务器会自动不保留之前客户端请求的任何记录。
```

## 维持 session

### Cookie

```java
介绍
	Web 服务器可以分配一个唯一的 session 会话 ID 作为每个 Web 客户端的 cookie
    这可能不是一个有效的方法，因为很多浏览器不支持 cookie，
语法实例
    <input type="hidden" name="sessionid" value="12345">
    当表单被提交时，指定的名称和值会被自动包含在 GET 或 POST 数据中。
    每次当 Web 浏览器发送回请求时，session_id 值可以用于保持不同的 Web 浏览器的跟踪
注意
    点击常规的超文本链接（<A HREF...>）不会导致表单提交
    因此隐藏的表单字段也不支持常规的 session 会话跟踪。
```



### URL 重写

```java
介绍
    在每个 URL 末尾追加一些额外的数据来标识 session 会话，
    服务器会把该 session 会话标识符与已存储的有关 session 会话的数据相关联。
语法例子
    http://w3cschool.cn/file.htm;sessionid=12345
	session 会话标识符被附加为 sessionid=12345，标识符可被 Web 服务器访问以识别客户端。
缺点
	缺点是会动态生成每个 URL 来为页面分配一个 session 会话 ID，        
```



### HttpSession

```java
介绍
    Servlet 还提供了 HttpSession 接口，
    该接口提供了一种跨多个页面请求或访问网站时识别用户以及存储有关用户信息的方式。
```



## httpSession

### 操作

#### 获取/创建

```java
public class SomeServlet extends HttpServlet {
    protected void doPost(
    	HttpServletRequest request,
    	HttpServletResponse response
    ) throw ServletException, IOException {
        
        // request 域
        request.setAttibute("user", "lili")
            
		//             
    }
}

// 如果没有 session 就创建一个
HttpSession session = request.getSession();

/ 如果不存在 session 会话，则创建一个 session 对象
    // true: 没有就创建，用来向 session 中写入数据
    // false: 没有就返回 null , 用来从 session 读取数据
      HttpSession session = request.getSession(true);
      // 获取 session 创建时间
      Date createTime = new Date(session.getCreationTime());
      // 获取该网页的最后一次访问时间
      Date lastAccessTime = new Date(session.getLastAccessedTime());

	// 检查网页上是否有新的访问者
      if (session.isNew()){
         title = "欢迎来到我的网站";
         session.setAttribute(userIDKey, userID);
      } 

	 // 设置响应内容类型
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
```

#### 删除

```java
移除一个特定的属性：
    public void removeAttribute(String name) 
删除整个 session 会话：
    public void invalidate()
设置 session 会话过期时间：
    public void setMaxInactiveInterval(int interval) 
注销用户：
    如果使用的是支持 servlet 2.4 的服务器，
    您可以调用 logout 来注销 Web 服务器的客户端，并把属于所有用户的所有 session 会话设置为无效。
```

#### 修改/设置

```java
public void setAttribute(String name, Object value)
	该方法使用指定的名称绑定一个对象到该 session 会话。
public void setMaxInactiveInterval(int interval)
	该方法在 Servlet 容器指示该 session 会话无效之前，指定客户端请求之间的时间，以秒为单位。
```



#### 查询

```java
public String getId()
		该方法返回一个包含分配给该 session 会话的唯一标识符的字符串。
public long getCreationTime()
	该方法返回该 session 会话被创建的时间，自格林尼治标准时间
    1970 年 1 月 1 日午夜算起，以毫秒为单位。    
public long getLastAccessedTime()
	该方法返回客户端最后一次发送与该 session 会话相关的请求的时间自格林尼治标准时间
    1970 年 1 月 1 日午夜算起，以毫秒为单位。

    
public Object getAttribute(String name)
	该方法返回在该 session 会话中具有指定名称的对象，
    如果没有指定名称的对象，则返回 null。
public Enumeration getAttributeNames()
	该方法返回 String 对象的枚举，
    String 对象包含所有绑定到该 session 会话的对象的名称。   
    
    
public boolean isNew()
	如果客户端还不知道该 session 会话，或者如果客户选择不参入该 session 会话，则该方法返回 true。
    
```



### 域空间

```java
session 是一个用于存放数据的集合， 我们一般成这个用于存放数据的内存空间为与属性空间，简称域
```



## 配置

### xml 配置

```java
  <session-config>
    // 超时时间是以分钟为单位，将覆盖 Tomcat 中默认的 30 分钟超时时间
    <session-timeout>15</session-timeout>
  </session-config>
```





