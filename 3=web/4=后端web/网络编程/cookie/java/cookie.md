## 创建 - 传送 - 保存

```java
介绍
    服务端创建的， 
    request 进行传递给，服务器从这里获取
    response 返回给客户端
    客户端被通知接收， 浏览器自动保存
语法例子
    void createCookie(HttpServeletRequest req, HttpServletResponse) {
        // 创建 cookie
        Cookie cookie = new Cookie("key", "vaue");
        // 通知客户端保存 Cookie
            resp.addCookie(cookie);
	}
```

## 获取

### 服务器获取

````java
介绍
    获取 cookie 只需要一行代码
    Cookie[] cookies = req.getCookie();
实例
    void getCookie(HttpServletRequest req, HttpServletResponse resp) {
    	// Cookie[] getCookies();
    	Cookie[] cookies = req.getCookie();
    	for(Cookie cookie: cookies){
            cookie.getName(); // cookie 的键
            cookie.getValue();  // cookie 的值
        }
    	Cookie needCookie = CookieUtils.findCookie("key1",cookies)
		
        if (needCookie != null){
            // needCookie 非空，即为处理过了
        }
	}
	// cookie 处理, CookieUtils
public class CookieUtils {
    public static Cookie findCookie(String name, Cookie[] cookies) {
        if (name == null || cookies == null || cookie.length == 0) {
            return null;
        }
        for (Cookie cookie: cookies) {
            if (name.equals(cookie.geName)){
                return cookie;
            }
        }
        return null;
    }
}
````



## 修改

### 服务器修改

```java
// 方式一
	新建一个同名 cookie 覆盖原对象，即 key 值相同的, 发给客户端
     Cookie cookie = new Cookie("key1", "value")
     resp.addCookie(cookie)
// 方拾二
    查找到要修改 cookie 对象，使用 setValue() 方法重新赋值，发给客户端
    Cookie cookie = CookieUtils.findCookie("key1",req.getCookies());
	if (cookie != null) {
    	cookie.setValue("newValue");
        resp.addCookie(cookie)
    }
```



## 存活周期

### 介绍

```java
Cookie 的生命控制指的是如何管理 Cookie 什么时候被销毁（删除）

setMaxAge() 
    正数，表示在指定的秒数后过期 
    负数，表示浏览器一关，Cookie 就会被删除（默认值是-1） 
    零，表示马上删除 Cookie    
```

### 设置

```java
介绍
    不管是创建还是获取，拿到 cookie 对象， 进行设置就行
例子
    Cookie cookie = CookieUtils.findCookie("key1",req.getCookies());
	if (cookie != null) {
        // 存活时间设置
        // -1 立即删除
        cookie.setMaxAge(60 * 60); // 一小时
        resp.addCookie(cookie);   
    }

    
```



## 过滤

### path 设置

```java
介绍
    Cookie 的 path 属性可以有效的过滤哪些 Cookie 可以发送给服务器。哪些不发。 
    path 属性是通过请求的地址来进行有效的过滤。
过滤例子
    // 子目录可见
    CookieA path=/工程路径   只发送：
    CookieB  path=/工程路径/abc
    请求地址
         http://ip:port/工程路径/a.html
			CookieA 发送   CookieB 不发送
         http://ip:port/工程路径/abc/a.html
			CookieA 发送   CookieB 发送
设置
	// getContextPath()   获取工程路径
	cookie.setPath(req.getContextPath() + "/abc"); // ===>>>> /工程路径/abc
	resp.addCookie(cookie);
```



## 