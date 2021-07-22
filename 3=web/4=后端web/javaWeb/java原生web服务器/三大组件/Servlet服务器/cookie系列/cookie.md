## 介绍

```java
cookie 用来存储用户信息
```

## 注意

```java
// Servlet Cookie 处理需要对中文进行编码与解码
String   str   =   java.net.URLEncoder.encode("中文");            //编码
String   str   =   java.net.URLDecoder.decode("编码后的字符串");   // 解码
```

## Servlet Cookies 方法

```java
public void setDomain(String pattern)
	该方法设置 cookie 适用的域，例如 w3cschool.cn。
public String getDomain()
	该方法获取 cookie 适用的域，例如 w3cschool.cn。
public void setMaxAge(int expiry)
    // setMaxAge(60*60) 在浏览器自动保存到本地
	该方法设置 cookie 过期的时间（以秒为单位）。
    如果不这样设置，cookie 只会在当前 session 会话中持续有效。
public int getMaxAge()
	该方法返回 cookie 的最大生存周期（以秒为单位），
    默认情况下，-1 表示 cookie 将持续下去，直到浏览器关闭。
public String getName()
	该方法返回 cookie 的名称。名称在创建后不能改变。
public void setValue(String newValue)
	该方法设置与 cookie 关联的值。
public String getValue()
	该方法获取与 cookie 关联的值。
public void setPath(String uri)
    // 就是说：url 和 cookie 进行绑定
	该方法设置 cookie 适用的路径。
    如果您不指定路径，与当前页面相同目录下的（包括子目录下的）所有 URL 都会返回 cookie。
public String getPath()
	该方法获取 cookie 适用的路径。
public void setSecure(boolean flag)
	该方法设置布尔值，表示 cookie 是否应该只在加密的（即 SSL）连接上发送。
public void setComment(String purpose)
	该方法规定了描述 cookie 目的的注释。该注释在浏览器向用户呈现 cookie 时非常有用。
public String getComment()
	该方法返回了描述 cookie 目的的注释，如果 cookie 没有注释则返回 null。
```



## 操作

### 创建 cookie

```java
创建 -- 设置进请求头 -- 发送

/ 扩展 HttpServlet 类
public class HelloForm extends HttpServlet {
  public void doGet(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException  {
      // 创建 Cookies    
      // cookie 是一个键值对 Cookie(value, key)
      Cookie firstName = new Cookie("first_name",
                      request.getParameter("first_name"));

      // 为 Cookies 设置过期日期为 24 小时后
      firstName.setMaxAge(60*60*24); 

      // 在响应头中添加两个 Cookies
      response.addCookie( firstName );

      // 设置响应内容类型
      response.setContentType("text/html");
 
      // 发送请求
      PrintWriter out = response.getWriter();
      
      /*
      删除 cookie
      修改 cookie
      获取 cookie
      
      
      */

  }
}    
```

### 删除 cookie

```java
介绍 
    读取一个现有的 cookie，并把它存储在 Cookie 对象中。
    使用 setMaxAge() 方法设置 cookie 的年龄为零，来删除现有的 cookie。
    把这个 cookie 添加到响应头。
    
例子（只是删除）
    // 删除现有的名为 "first_name" 的 cookie
    Cookie cookie = null;
    Cookie[] cookies = null;
    // 获取与该域相关的 Cookies 的数组
    cookies = request.getCookies();
	f( cookies != null ){
         for (int i = 0; i < cookies.length; i++){             
             cookie = cookies[i];             
             if((cookie.getName( )).compareTo("first_name") == 0 ){                  
                 cookie.setMaxAge(0);                  
                 response.addCookie(cookie);                  
            }
            out.print("名称：" + cookie.getName( ) + "，");
            out.print("值：" + cookie.getValue( )+" <br/>");
         }
      }else{
          out.println(
            "<h2 class="tutheader">No cookies founds</h2>");
      }
   }
```

### 修改 cookie

```java
// 获取后再发回去就行
```



### 获取 cookie

```java
介绍
    需要通过调用 HttpServletRequest 的 getCookies( ) 方法创建一个 javax.servlet.http.Cookie 对象的数组。
    然后循环遍历数组，并使用 getName() 和 getValue() 方法来访问每个 cookie 和关联的值。
    
代码实例
    Cookie cookie = null;
    Cookie[] cookies = null;
    // 获取与该域相关的 Cookies 的数组
    cookies = request.getCookies();
    if( cookies != null ){
        for (int i = 0; i < cookies.length; i++){             
            cookie = cookies[i];             o
            out.print("名称：" + cookie.getName( ) + "，");             
            out.print("值：" + cookie.getValue( )+" <br/>");
        }
    }else{
        out.println(
            "<h2 class="tutheader">未找到 Cookies</h2>");
    }


```



## 域空间

```java
javaWeb 边编程中， 有三个可以存放域属性的空间范围对象，按照存储对象从小打到的顺序分别为
    ServletCongtext -->  HttpSession --> HttpServletRequest
    
 /*
 页面域：当前JSP页面范围
 请求域：一次请求， 只在一次请求中有效
 会话域：一次会话， 一个浏览器和服务器之间发生的一系列的请求和响应的过程
 应用于： 整个web应用
 
 */   
    
区别
ServetCoItext
    // 整个应用都可以应用，浏览器关闭就关闭了
	即application,置入其中的域属性是整个应用范围的,可以完成跨会话共享数据。
        
HttpSession
        // 浏览器关闭就结束了，但是在同一个请求中是可以共享数据的
        置入其中的域属性是会话范围的，可以完成跨请求共享数据。
        
HttpServletRequest
        // 一次请求中使用
        置入其中的域属性是请求范围的，可以完成跨Servlet 共享数据。
使用原则
    // 这些Servlet必须在同一-请求中
    在可以保证功能需求的前提下,优先使用小范围的。
    这样不仅可以节省服务器内存，还可以保证数据的安全性。
  
```

