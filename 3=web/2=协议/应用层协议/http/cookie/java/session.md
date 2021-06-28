## 创建-调用

### 介绍

```java
相关方法
    request.getSession() 
        第一次调用是：创建 Session 会话 
        之后调用都是：获取前面创建好的 Session 会话对象。
    isNew(); 判断到底是不是刚创建出来的（新的） 
        true 表示刚创建 
        false 表示获取之前创建   
    getId(); 得到 Session 的会话 id 值。
        每个会话都有一个身份证号。也就是 ID 值。而且这个 ID 是唯一的。
语法案例
protected void setGetSession(HttpServletRequest req, HttpServletResponse resp){
	// 获取创建 
    Session session = req.getSession();
	// 判断是新建还是已经存在的
    boolean isNew = session.isNew()
}
```

## session 键值对操作

```java
设置
	req.getSession().setAttribute("key1", "value1");
获取
    Object attribute = req.getSession().getAttribute("key1");
```

## 生命周期

```java
public void setMaxInactiveInterval(int interval)
    // 单独设置超时时长
    设置 Session 的超时时间（以秒为单位），超过指定的时长，Session 就会被销毁
    正数: 设定 Session 的超时时长。
    负数: 永不超时（极少使用）
public int getMaxInactiveInterval()
    获取 Session 的超时时间
public void invalidate() 
    让当前 Session 会话马上超时无效。      
        
默认超时时长
   超时时间长为 30 分钟。
Tommcat 配置
	// 在 Tomcat 服务器的配置文件 web.xml中默认有以下的配置, 默认 30 min
    <session-config> 
            <session-timeout>30</session-timeout> 
    </session-config>
```

